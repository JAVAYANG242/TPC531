// 台電發電數據監控 - 完整版本
class TaipowerMonitor {
    constructor() {
        this.apiUrl = 'https://www.taipower.com.tw/d006/loadGraph/loadGraph/data/genary.json';
        this.proxyServices = [
            {
                name: 'AllOrigins',
                url: 'https://api.allorigins.win/get?url=',
                parser: 'allorigins'
            },
            {
                name: 'CorsProxy.io',
                url: 'https://corsproxy.io/?',
                parser: 'direct'
            },
            {
                name: 'Proxy-CorsAnywhere',
                url: 'https://cors-anywhere.herokuapp.com/',
                parser: 'direct'
            },
            {
                name: 'ThingProxy',
                url: 'https://thingproxy.freeboard.io/fetch/',
                parser: 'direct'
            }
        ];
        
        // 數據記錄
        this.dayData = this.loadHistoryData('dayData') || [];     // 日間數據 (6:00-18:00)
        this.nightData = this.loadHistoryData('nightData') || []; // 夜間數據 (18:00-6:00)
        
        // 載入歷史數據
        this.loadInitialHistoricalData();
        
        // 時間區間設置
        this.currentTimeRange = '24h';  // 預設24小時
        this.timeRanges = {
            '1h': { hours: 1, label: '最近一小時' },
            '24h': { hours: 24, label: '最近一天' },
            '7d': { hours: 168, label: '最近一周' },
            '30d': { hours: 720, label: '最近一個月' }
        };
        
        // 圖表
        this.dayChart = null;
        this.nightChart = null;
        this.pieChart = null;
        
        this.init();
    }

    loadInitialHistoricalData() {
        // 如果有外部歷史數據，載入它們
        if (typeof loadHistoricalData === 'function') {
            try {
                const historicalData = loadHistoricalData();
                if (historicalData && historicalData.dayHistoryData && historicalData.nightHistoryData) {
                    // 轉換格式以符合內部數據結構
                    const convertData = (data) => data.map(item => ({
                        time: item.time,
                        percentage: item.thermalPercent,
                        timestamp: new Date(item.time).getTime()
                    }));
                    
                    // 只有當本地沒有數據時才載入歷史數據
                    if (this.dayData.length === 0) {
                        this.dayData = convertData(historicalData.dayHistoryData);
                        this.saveHistoryData('dayData', this.dayData);
                        console.log(`📚 載入歷史日間數據: ${this.dayData.length} 筆`);
                    }
                    
                    if (this.nightData.length === 0) {
                        this.nightData = convertData(historicalData.nightHistoryData);
                        this.saveHistoryData('nightData', this.nightData);
                        console.log(`📚 載入歷史夜間數據: ${this.nightData.length} 筆`);
                    }
                }
            } catch (e) {
                console.warn('載入歷史數據時發生錯誤:', e);
            }
        }
    }

    init() {
        console.log('📊 台電發電數據監控系統啟動');
        this.updateStatus('connecting', '連接中...');
        this.setupCharts();
        this.setupTimeRangeButtons();
        this.fetchData();
        
        // 每10分鐘更新一次
        setInterval(() => {
            this.fetchData();
        }, 600000); // 10分鐘 = 600,000毫秒
        
        console.log('⏰ 設定每10分鐘自動更新數據');
    }

    setupCharts() {
        // 發電結構餅圖
        const pieCtx = document.getElementById('pieChart').getContext('2d');
        this.pieChart = new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['火力發電', '再生能源', '儲能'],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: [
                        '#e74c3c',  // 火力發電 - 紅色
                        '#27ae60',  // 再生能源 - 綠色
                        '#f39c12'   // 儲能 - 橙色
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    hoverBorderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return `${label}: ${value.toLocaleString()} MW (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1000
                }
            }
        });

        // 日間火力占比圖表
        const dayCtx = document.getElementById('dayChart').getContext('2d');
        this.dayChart = new Chart(dayCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: '火力發電占比 (%)',
                    data: [],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: 'white',
                        bodyColor: 'white'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        title: {
                            display: true,
                            text: '時間'
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });

        // 夜間火力占比圖表
        const nightCtx = document.getElementById('nightChart').getContext('2d');
        this.nightChart = new Chart(nightCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: '火力發電占比 (%)',
                    data: [],
                    borderColor: '#9b59b6',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: 'white',
                        bodyColor: 'white'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        title: {
                            display: true,
                            text: '時間'
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });

        // 載入歷史數據到圖表
        this.updateCharts();
    }

    updateStatus(type, message) {
        const statusElement = document.getElementById('status');
        statusElement.className = `status ${type}`;
        statusElement.textContent = message;
    }

    async fetchData() {
        this.updateStatus('connecting', '獲取數據中...');
        
        // 依序嘗試所有代理服務
        for (let i = 0; i < this.proxyServices.length; i++) {
            const proxy = this.proxyServices[i];
            console.log(`🔌 嘗試代理服務: ${proxy.name} (${i + 1}/${this.proxyServices.length})`);
            
            try {
                const success = await this.tryProxy(proxy);
                if (success) {
                    console.log(`✅ 成功！透過 ${proxy.name} 獲取台電數據`);
                    this.updateStatus('success', '連接成功');
                    return;
                }
            } catch (error) {
                console.warn(`❌ ${proxy.name} 失敗:`, error.message);
                continue;
            }
        }
        
        // 所有代理都失敗
        console.error('🚫 所有代理服務都無法獲取台電數據');
        this.showCorsError();
    }

    async tryProxy(proxy) {
        const proxyUrl = proxy.url + encodeURIComponent(this.apiUrl);
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超時
            
            const response = await fetch(proxyUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            let powerData;
            
            if (proxy.parser === 'allorigins') {
                const proxyResponse = await response.json();
                if (proxyResponse.status && proxyResponse.status.http_code === 200) {
                    powerData = JSON.parse(proxyResponse.contents);
                } else {
                    throw new Error(`代理錯誤: ${proxyResponse.status?.http_code || 'Unknown'}`);
                }
            } else {
                powerData = await response.json();
            }
            
            // 驗證數據格式
            if (!powerData || !powerData.aaData || !Array.isArray(powerData.aaData)) {
                throw new Error('數據格式不正確');
            }
            
            this.processData(powerData);
            return true;
            
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error('請求超時');
            }
            throw error;
        }
    }

    processData(rawData) {
        const updateTime = rawData[''] || new Date().toLocaleString('zh-TW');
        const aaData = rawData.aaData || [];
        
        // 分類統計
        const thermal = { nuclear: 0, coal: 0, lng: 0, oil: 0, cogen: 0 };
        const renewable = { solar: 0, wind: 0, hydro: 0, other: 0 };
        const storage = { discharge: 0, charge: 0 };

        aaData.forEach(item => {
            const powerType = item[0] || '';
            const subType = item[1] || '';
            const unitName = item[2] || '';
            const generation = parseFloat(item[4]) || 0;

            // 跳過小計行
            if (unitName.includes('小計')) {
                return;
            }

            // 火力發電分類 - 根據台電實際分類
            if (powerType.includes('核能') || powerType.includes('Nuclear')) {
                thermal.nuclear += generation;
            } 
            else if (powerType.includes('燃煤') || powerType.includes('Coal')) {
                thermal.coal += generation;
            }
            else if (powerType.includes('民營電廠-燃煤') || powerType.includes('IPP-Coal')) {
                thermal.coal += generation; // 民營燃煤併入燃煤
            }
            else if (powerType.includes('燃氣') || powerType.includes('LNG')) {
                thermal.lng += generation;
            }
            else if (powerType.includes('民營電廠-燃氣') || powerType.includes('IPP-LNG')) {
                thermal.lng += generation; // 民營燃氣併入燃氣
            }
            else if (powerType.includes('燃油') || powerType.includes('Oil')) {
                thermal.oil += generation;
            }
            else if (powerType.includes('輕油') || powerType.includes('Diesel')) {
                thermal.oil += generation; // 輕油併入燃油
            }
            else if (powerType.includes('汽電共生') || powerType.includes('Co-Gen')) {
                thermal.cogen += generation;
            }
            // 再生能源分類
            else if (powerType.includes('太陽能') || powerType.includes('Solar')) {
                renewable.solar += generation;
            } 
            else if (powerType.includes('風力') || powerType.includes('Wind')) {
                renewable.wind += generation;
            } 
            else if (powerType.includes('水力') || powerType.includes('Hydro')) {
                // 排除抽蓄水力（那是儲能）
                if (!subType.includes('抽蓄水力') && !subType.includes('Pumped Hydro')) {
                    renewable.hydro += generation;
                }
            } 
            else if (powerType.includes('其它再生能源') || powerType.includes('Other Renewable')) {
                renewable.other += generation;
            }
            // 儲能系統分類
            else if (powerType.includes('儲能') && powerType.includes('Energy Storage')) {
                storage.discharge += generation;
            }
            else if (powerType.includes('儲能負載') && powerType.includes('Energy Storage Load')) {
                storage.charge += generation;
            }
        });

        // 計算總計
        const thermalTotal = thermal.nuclear + thermal.coal + thermal.lng + thermal.oil + thermal.cogen;
        const renewableTotal = renewable.solar + renewable.wind + renewable.hydro + renewable.other;
        const storageNet = storage.discharge - storage.charge;
        const totalPower = thermalTotal + renewableTotal + storageNet;

        // 計算占比
        const thermalPercent = totalPower > 0 ? ((thermalTotal / totalPower) * 100).toFixed(1) : 0;
        const renewablePercent = totalPower > 0 ? ((renewableTotal / totalPower) * 100).toFixed(1) : 0;
        const storagePercent = totalPower > 0 ? ((Math.abs(storageNet) / totalPower) * 100).toFixed(1) : 0;

        // 更新顯示
        this.updateDisplay({
            updateTime,
            thermal: { ...thermal, total: thermalTotal },
            renewable: { ...renewable, total: renewableTotal },
            storage: { net: storageNet, status: storageNet > 0 ? '放電中' : '充電中' },
            total: totalPower,
            percentages: { thermal: thermalPercent, renewable: renewablePercent, storage: storagePercent }
        });

        // 記錄數據用於圖表
        this.recordData(thermalPercent, updateTime);

        // 詳細日誌輸出
        console.log('📊 台電數據解析完成 (時間: ' + updateTime + ')');
        console.log('🔥 火力發電詳細:');
        console.log('   核能: ' + Math.round(thermal.nuclear) + ' MW');
        console.log('   燃煤(含民營): ' + Math.round(thermal.coal) + ' MW');
        console.log('   燃氣(含民營): ' + Math.round(thermal.lng) + ' MW');
        console.log('   燃油+輕油: ' + Math.round(thermal.oil) + ' MW');
        console.log('   汽電共生: ' + Math.round(thermal.cogen) + ' MW');
        console.log('   火力小計: ' + Math.round(thermalTotal) + ' MW (' + thermalPercent + '%)');
        console.log('🌱 再生能源詳細:');
        console.log('   太陽能: ' + Math.round(renewable.solar) + ' MW');
        console.log('   風力: ' + Math.round(renewable.wind) + ' MW');
        console.log('   水力: ' + Math.round(renewable.hydro) + ' MW');
        console.log('   其他再生: ' + Math.round(renewable.other) + ' MW');
        console.log('   再生小計: ' + Math.round(renewableTotal) + ' MW (' + renewablePercent + '%)');
        console.log('🔋 儲能系統: ' + Math.round(storageNet) + ' MW (' + storagePercent + '% - ' + (storageNet > 0 ? '放電' : '充電') + ')');
        console.log('⚡ 總發電量: ' + Math.round(totalPower) + ' MW');
        console.log('🌐 請比對台電官網: https://www.taipower.com.tw/d006/loadGraph/loadGraph/genshx_.html');
    }

    recordData(thermalPercent, updateTime) {
        const now = new Date();
        const hour = now.getHours();
        
        const dataPoint = {
            time: updateTime || now.toLocaleString('zh-TW'), // 使用完整的日期時間
            percentage: parseFloat(thermalPercent),
            timestamp: now.getTime()
        };

        // 判斷日間或夜間 (日間: 6:00-18:00, 夜間: 18:00-6:00)
        if (hour >= 6 && hour < 18) {
            // 日間數據
            this.dayData.push(dataPoint);
            console.log(`☀️ 記錄日間數據: ${dataPoint.time} - ${thermalPercent}%`);
        } else {
            // 夜間數據
            this.nightData.push(dataPoint);
            console.log(`🌙 記錄夜間數據: ${dataPoint.time} - ${thermalPercent}%`);
        }

        // 保持最近50筆記錄
        if (this.dayData.length > 50) {
            this.dayData = this.dayData.slice(-50);
        }
        if (this.nightData.length > 50) {
            this.nightData = this.nightData.slice(-50);
        }

        // 保存到本地存儲
        this.saveHistoryData('dayData', this.dayData);
        this.saveHistoryData('nightData', this.nightData);

        // 更新圖表
        this.updateCharts();
        
        // 自動保存當前數據到本地存儲
        this.saveToLocalStorage();
        
        console.log('✅ 數據顯示更新完成');
    }

    updateCharts() {
        // 根據時間區間決定時間格式
        const formatTimeLabel = (dataPoint) => {
            if (!dataPoint.time && !dataPoint.timestamp) return '';
            
            let date;
            if (dataPoint.timestamp) {
                date = new Date(dataPoint.timestamp);
            } else {
                // 嘗試解析時間字符串
                const timeStr = dataPoint.time;
                if (timeStr.includes('-')) {
                    // 完整日期格式
                    date = new Date(timeStr);
                } else {
                    // 僅時間格式，假設是今天
                    const today = new Date();
                    const [hours, minutes] = timeStr.split(':');
                    date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
                }
            }
            
            if (isNaN(date.getTime())) return dataPoint.time || '';
            
            // 根據時間區間選擇格式
            switch (this.currentTimeRange) {
                case '1h':
                case '24h':
                    return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
                case '7d':
                    return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' }) + ' ' +
                           date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
                case '30d':
                    return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
                default:
                    return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
            }
        };

        // 更新日間圖表
        this.dayChart.data.labels = this.dayData.map(formatTimeLabel);
        this.dayChart.data.datasets[0].data = this.dayData.map(d => d.percentage);
        this.dayChart.update('none');

        // 更新夜間圖表
        this.nightChart.data.labels = this.nightData.map(formatTimeLabel);
        this.nightChart.data.datasets[0].data = this.nightData.map(d => d.percentage);
        this.nightChart.update('none');
    }

    updateDisplay(data) {
        // 更新時間
        document.getElementById('lastUpdate').textContent = data.updateTime;

        // 更新主要數據
        document.getElementById('totalPower').textContent = this.formatNumber(data.total) + ' MW';
        document.getElementById('thermalPower').textContent = this.formatNumber(data.thermal.total) + ' MW';
        document.getElementById('thermalPercent').textContent = data.percentages.thermal + '%';
        document.getElementById('renewablePower').textContent = this.formatNumber(data.renewable.total) + ' MW';
        document.getElementById('renewablePercent').textContent = data.percentages.renewable + '%';
        document.getElementById('storagePower').textContent = this.formatNumber(Math.abs(data.storage.net)) + ' MW';
        document.getElementById('storagePercent').textContent = data.percentages.storage + '%';
        document.getElementById('storageStatus').textContent = data.storage.status;

        // 更新火力發電明細
        document.getElementById('nuclear').textContent = this.formatNumber(data.thermal.nuclear) + ' MW';
        document.getElementById('coal').textContent = this.formatNumber(data.thermal.coal) + ' MW';
        document.getElementById('lng').textContent = this.formatNumber(data.thermal.lng) + ' MW';
        document.getElementById('oil').textContent = this.formatNumber(data.thermal.oil) + ' MW';
        document.getElementById('cogen').textContent = this.formatNumber(data.thermal.cogen) + ' MW';

        // 更新再生能源明細
        document.getElementById('solar').textContent = this.formatNumber(data.renewable.solar) + ' MW';
        document.getElementById('wind').textContent = this.formatNumber(data.renewable.wind) + ' MW';
        document.getElementById('hydro').textContent = this.formatNumber(data.renewable.hydro) + ' MW';
        document.getElementById('otherRenewable').textContent = this.formatNumber(data.renewable.other) + ' MW';

        // 更新餅圖
        this.pieChart.data.datasets[0].data = [
            data.thermal.total,
            data.renewable.total,
            Math.abs(data.storage.net)
        ];
        this.pieChart.update('active');

        // 隱藏錯誤信息
        document.getElementById('errorMessage').style.display = 'none';
    }

    formatNumber(num) {
        return Math.round(num).toLocaleString();
    }

    loadHistoryData(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('載入歷史數據時發生錯誤:', error);
            return [];
        }
    }

    saveHistoryData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('保存歷史數據時發生錯誤:', error);
        }
    }

    showCorsError() {
        document.getElementById('errorMessage').style.display = 'block';
        this.updateStatus('error', '連接失敗');
    }
    
    setupTimeRangeButtons() {
        /**設置時間區間選擇按鈕**/
        const buttons = document.querySelectorAll('.time-btn');
        
        buttons.forEach((button, index) => {
            const ranges = ['1h', '24h', '7d', '30d'];
            const range = ranges[index];
            
            button.addEventListener('click', () => {
                // 移除所有active類別
                buttons.forEach(btn => btn.classList.remove('active'));
                // 添加active到當前按鈕
                button.classList.add('active');
                
                // 更新時間區間
                this.currentTimeRange = range;
                console.log(`🕒 切換到時間區間: ${this.timeRanges[range].label}`);
                
                // 重新載入歷史數據並更新圖表
                this.loadHistoricalDataFromStorage();
                this.updateCharts();
            });
        });
        
        console.log('⚙️ 時間區間按鈕已設置');
    }
    
    filterDataByTimeRange(data) {
        /**根據時間區間過濾數據**/
        if (!data || data.length === 0) return data;
        
        const hours = this.timeRanges[this.currentTimeRange].hours;
        const cutoffTime = new Date(Date.now() - hours * 60 * 60 * 1000);
        
        return data.filter(item => {
            try {
                const itemTime = new Date(item.time);
                return itemTime >= cutoffTime;
            } catch (e) {
                return false;
            }
        });
    }
    
    loadHistoricalDataFromStorage() {
        /**從本地存儲載入歷史數據並應用時間過濾**/
        try {
            // 載入完整的歷史數據
            const fullDayData = this.loadHistoryData('dayData') || [];
            const fullNightData = this.loadHistoryData('nightData') || [];
            
            // 根據時間區間過濾
            this.dayData = this.filterDataByTimeRange(fullDayData);
            this.nightData = this.filterDataByTimeRange(fullNightData);
            
            console.log(`📊 載入歷史數據 - ${this.timeRanges[this.currentTimeRange].label}`);
            console.log(`   日間: ${this.dayData.length} 筆`);
            console.log(`   夜間: ${this.nightData.length} 筆`);
            
        } catch (e) {
            console.error('載入歷史數據錯誤:', e);
        }
    }
    
    saveToLocalStorage() {
        /**保存當前數據到本地存儲**/
        try {
            const now = new Date();
            const timestamp = now.toISOString().slice(0, 19).replace('T', ' ');
            
            // 從localStorage獲取完整數據
            let fullDayData = this.loadHistoryData('dayData') || [];
            let fullNightData = this.loadHistoryData('nightData') || [];
            
            // 添加當前數據點（如果有新的火力占比數據）
            const currentData = this.getCurrentThermalData();
            if (currentData) {
                const dataPoint = {
                    time: timestamp,
                    thermalPercent: currentData.thermalPercent
                };
                
                const hour = now.getHours();
                if (6 <= hour && hour < 18) {
                    fullDayData.push(dataPoint);
                    // 保持最近1000筆記錄
                    if (fullDayData.length > 1000) {
                        fullDayData = fullDayData.slice(-1000);
                    }
                } else {
                    fullNightData.push(dataPoint);
                    if (fullNightData.length > 1000) {
                        fullNightData = fullNightData.slice(-1000);
                    }
                }
                
                // 保存到localStorage
                this.saveHistoryData('dayData', fullDayData);
                this.saveHistoryData('nightData', fullNightData);
                
                console.log('💾 數據已保存到本地存儲');
            }
            
        } catch (e) {
            console.error('保存數據錯誤:', e);
        }
    }
    
    getCurrentThermalData() {
        /**獲取當前火力發電數據**/
        try {
            const thermalElement = document.getElementById('thermalPercent');
            if (thermalElement && thermalElement.textContent !== '-- %') {
                const percentText = thermalElement.textContent.replace('%', '').trim();
                const thermalPercent = parseFloat(percentText);
                if (!isNaN(thermalPercent)) {
                    return { thermalPercent };
                }
            }
            return null;
        } catch (e) {
            return null;
        }
    }
}

// 頁面載入完成後啟動系統
document.addEventListener('DOMContentLoaded', () => {
    window.taipowerMonitor = new TaipowerMonitor();
}); 