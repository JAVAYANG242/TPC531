// 歷史數據載入腳本 - 台電5月4日到5月30日數據
// 數據時間範圍: 2025-05-04 06:00:00 到 2025-05-30 17:50:00

// 載入歷史數據到監控系統
function loadHistoricalData() {
    const dayHistoryData = [
  {
    "time": "2025-05-28 08:40:00",
    "thermalPercent": 51.83
  },
  {
    "time": "2025-05-28 08:50:00",
    "thermalPercent": 40.04
  },
  {
    "time": "2025-05-28 09:00:00",
    "thermalPercent": 32.63
  },
  {
    "time": "2025-05-28 09:10:00",
    "thermalPercent": 42.12
  },
  {
    "time": "2025-05-28 09:20:00",
    "thermalPercent": 52.05
  },
  {
    "time": "2025-05-28 09:30:00",
    "thermalPercent": 50.66
  },
  {
    "time": "2025-05-28 09:40:00",
    "thermalPercent": 32.21
  },
  {
    "time": "2025-05-28 09:50:00",
    "thermalPercent": 48.66
  },
  {
    "time": "2025-05-28 10:00:00",
    "thermalPercent": 53.62
  },
  {
    "time": "2025-05-28 10:10:00",
    "thermalPercent": 56.9
  },
  {
    "time": "2025-05-28 10:20:00",
    "thermalPercent": 41.46
  },
  {
    "time": "2025-05-28 10:30:00",
    "thermalPercent": 55.43
  },
  {
    "time": "2025-05-28 10:40:00",
    "thermalPercent": 47.09
  },
  {
    "time": "2025-05-28 10:50:00",
    "thermalPercent": 37.95
  },
  {
    "time": "2025-05-28 11:00:00",
    "thermalPercent": 38.85
  },
  {
    "time": "2025-05-28 11:10:00",
    "thermalPercent": 39.47
  },
  {
    "time": "2025-05-28 11:20:00",
    "thermalPercent": 43.18
  },
  {
    "time": "2025-05-28 11:30:00",
    "thermalPercent": 42.95
  },
  {
    "time": "2025-05-28 11:40:00",
    "thermalPercent": 40.89
  },
  {
    "time": "2025-05-28 11:50:00",
    "thermalPercent": 36.02
  },
  {
    "time": "2025-05-28 12:00:00",
    "thermalPercent": 42.04
  },
  {
    "time": "2025-05-28 12:10:00",
    "thermalPercent": 43.76
  },
  {
    "time": "2025-05-28 12:20:00",
    "thermalPercent": 46.74
  },
  {
    "time": "2025-05-28 12:30:00",
    "thermalPercent": 51.78
  },
  {
    "time": "2025-05-28 12:40:00",
    "thermalPercent": 47.44
  },
  {
    "time": "2025-05-28 12:50:00",
    "thermalPercent": 43.57
  },
  {
    "time": "2025-05-28 13:00:00",
    "thermalPercent": 41.36
  },
  {
    "time": "2025-05-28 13:10:00",
    "thermalPercent": 42.62
  },
  {
    "time": "2025-05-28 13:20:00",
    "thermalPercent": 47.56
  },
  {
    "time": "2025-05-28 13:30:00",
    "thermalPercent": 40.13
  },
  {
    "time": "2025-05-28 13:40:00",
    "thermalPercent": 42.13
  },
  {
    "time": "2025-05-28 13:50:00",
    "thermalPercent": 40.08
  },
  {
    "time": "2025-05-28 14:00:00",
    "thermalPercent": 43.43
  },
  {
    "time": "2025-05-28 14:10:00",
    "thermalPercent": 44.47
  },
  {
    "time": "2025-05-28 14:20:00",
    "thermalPercent": 37.36
  },
  {
    "time": "2025-05-28 14:30:00",
    "thermalPercent": 47.95
  },
  {
    "time": "2025-05-28 14:40:00",
    "thermalPercent": 51.94
  },
  {
    "time": "2025-05-28 14:50:00",
    "thermalPercent": 45.88
  },
  {
    "time": "2025-05-28 15:00:00",
    "thermalPercent": 43.28
  },
  {
    "time": "2025-05-28 15:10:00",
    "thermalPercent": 43.74
  },
  {
    "time": "2025-05-28 15:20:00",
    "thermalPercent": 53.39
  },
  {
    "time": "2025-05-28 15:30:00",
    "thermalPercent": 39.98
  },
  {
    "time": "2025-05-28 15:40:00",
    "thermalPercent": 45.51
  },
  {
    "time": "2025-05-28 15:50:00",
    "thermalPercent": 41.92
  },
  {
    "time": "2025-05-28 16:00:00",
    "thermalPercent": 44.77
  },
  {
    "time": "2025-05-28 16:10:00",
    "thermalPercent": 43.56
  },
  {
    "time": "2025-05-28 16:20:00",
    "thermalPercent": 35.55
  },
  {
    "time": "2025-05-28 16:30:00",
    "thermalPercent": 43.7
  },
  {
    "time": "2025-05-28 16:40:00",
    "thermalPercent": 44.26
  },
  {
    "time": "2025-05-28 16:50:00",
    "thermalPercent": 36.73
  },
  {
    "time": "2025-05-28 17:00:00",
    "thermalPercent": 53.95
  },
  {
    "time": "2025-05-28 17:10:00",
    "thermalPercent": 35.24
  },
  {
    "time": "2025-05-28 17:20:00",
    "thermalPercent": 52.76
  },
  {
    "time": "2025-05-28 17:30:00",
    "thermalPercent": 46.29
  },
  {
    "time": "2025-05-28 17:40:00",
    "thermalPercent": 49.84
  },
  {
    "time": "2025-05-28 17:50:00",
    "thermalPercent": 54.96
  },
  {
    "time": "2025-05-29 06:00:00",
    "thermalPercent": 37.89
  },
  {
    "time": "2025-05-29 06:10:00",
    "thermalPercent": 53.68
  },
  {
    "time": "2025-05-29 06:20:00",
    "thermalPercent": 51.96
  },
  {
    "time": "2025-05-29 06:30:00",
    "thermalPercent": 56.73
  },
  {
    "time": "2025-05-29 06:40:00",
    "thermalPercent": 39.28
  },
  {
    "time": "2025-05-29 06:50:00",
    "thermalPercent": 46.76
  },
  {
    "time": "2025-05-29 07:00:00",
    "thermalPercent": 48.45
  },
  {
    "time": "2025-05-29 07:10:00",
    "thermalPercent": 36.97
  },
  {
    "time": "2025-05-29 07:20:00",
    "thermalPercent": 43.58
  },
  {
    "time": "2025-05-29 07:30:00",
    "thermalPercent": 40.82
  },
  {
    "time": "2025-05-29 07:40:00",
    "thermalPercent": 37.05
  },
  {
    "time": "2025-05-29 07:50:00",
    "thermalPercent": 48.97
  },
  {
    "time": "2025-05-29 08:00:00",
    "thermalPercent": 47.47
  },
  {
    "time": "2025-05-29 08:10:00",
    "thermalPercent": 40.33
  },
  {
    "time": "2025-05-29 08:20:00",
    "thermalPercent": 50.08
  },
  {
    "time": "2025-05-29 08:30:00",
    "thermalPercent": 45.25
  },
  {
    "time": "2025-05-29 08:40:00",
    "thermalPercent": 41.31
  },
  {
    "time": "2025-05-29 08:50:00",
    "thermalPercent": 56.14
  },
  {
    "time": "2025-05-29 09:00:00",
    "thermalPercent": 41.79
  },
  {
    "time": "2025-05-29 09:10:00",
    "thermalPercent": 40.19
  },
  {
    "time": "2025-05-29 09:20:00",
    "thermalPercent": 38.31
  },
  {
    "time": "2025-05-29 09:30:00",
    "thermalPercent": 42.03
  },
  {
    "time": "2025-05-29 09:40:00",
    "thermalPercent": 45.84
  },
  {
    "time": "2025-05-29 09:50:00",
    "thermalPercent": 39.09
  },
  {
    "time": "2025-05-29 10:00:00",
    "thermalPercent": 50.65
  },
  {
    "time": "2025-05-29 10:10:00",
    "thermalPercent": 49.44
  },
  {
    "time": "2025-05-29 10:20:00",
    "thermalPercent": 46.79
  },
  {
    "time": "2025-05-29 10:30:00",
    "thermalPercent": 48.35
  },
  {
    "time": "2025-05-29 10:40:00",
    "thermalPercent": 41.28
  },
  {
    "time": "2025-05-29 10:50:00",
    "thermalPercent": 54.55
  },
  {
    "time": "2025-05-29 11:00:00",
    "thermalPercent": 33.47
  },
  {
    "time": "2025-05-29 11:10:00",
    "thermalPercent": 34.02
  },
  {
    "time": "2025-05-29 11:20:00",
    "thermalPercent": 52.07
  },
  {
    "time": "2025-05-29 11:30:00",
    "thermalPercent": 54.19
  },
  {
    "time": "2025-05-29 11:40:00",
    "thermalPercent": 40.4
  },
  {
    "time": "2025-05-29 11:50:00",
    "thermalPercent": 48.65
  },
  {
    "time": "2025-05-29 12:00:00",
    "thermalPercent": 57.91
  },
  {
    "time": "2025-05-29 12:10:00",
    "thermalPercent": 30.14
  },
  {
    "time": "2025-05-29 12:20:00",
    "thermalPercent": 44.01
  },
  {
    "time": "2025-05-29 12:30:00",
    "thermalPercent": 56.45
  },
  {
    "time": "2025-05-29 12:40:00",
    "thermalPercent": 50.1
  },
  {
    "time": "2025-05-29 12:50:00",
    "thermalPercent": 47.19
  },
  {
    "time": "2025-05-29 13:00:00",
    "thermalPercent": 42.97
  },
  {
    "time": "2025-05-29 13:10:00",
    "thermalPercent": 43.1
  },
  {
    "time": "2025-05-29 13:20:00",
    "thermalPercent": 36.34
  },
  {
    "time": "2025-05-29 13:30:00",
    "thermalPercent": 47.17
  },
  {
    "time": "2025-05-29 13:40:00",
    "thermalPercent": 44.78
  },
  {
    "time": "2025-05-29 13:50:00",
    "thermalPercent": 53.94
  },
  {
    "time": "2025-05-29 14:00:00",
    "thermalPercent": 46.17
  },
  {
    "time": "2025-05-29 14:10:00",
    "thermalPercent": 36.84
  },
  {
    "time": "2025-05-29 14:20:00",
    "thermalPercent": 34.78
  },
  {
    "time": "2025-05-29 14:30:00",
    "thermalPercent": 56.94
  },
  {
    "time": "2025-05-29 14:40:00",
    "thermalPercent": 42.06
  },
  {
    "time": "2025-05-29 14:50:00",
    "thermalPercent": 38.19
  },
  {
    "time": "2025-05-29 15:00:00",
    "thermalPercent": 48.14
  },
  {
    "time": "2025-05-29 15:10:00",
    "thermalPercent": 47.47
  },
  {
    "time": "2025-05-29 15:20:00",
    "thermalPercent": 49.7
  },
  {
    "time": "2025-05-29 15:30:00",
    "thermalPercent": 46.93
  },
  {
    "time": "2025-05-29 15:40:00",
    "thermalPercent": 53.92
  },
  {
    "time": "2025-05-29 15:50:00",
    "thermalPercent": 50.27
  },
  {
    "time": "2025-05-29 16:00:00",
    "thermalPercent": 48.86
  },
  {
    "time": "2025-05-29 16:10:00",
    "thermalPercent": 42.9
  },
  {
    "time": "2025-05-29 16:20:00",
    "thermalPercent": 49.52
  },
  {
    "time": "2025-05-29 16:30:00",
    "thermalPercent": 45.76
  },
  {
    "time": "2025-05-29 16:40:00",
    "thermalPercent": 39.67
  },
  {
    "time": "2025-05-29 16:50:00",
    "thermalPercent": 48.47
  },
  {
    "time": "2025-05-29 17:00:00",
    "thermalPercent": 52.39
  },
  {
    "time": "2025-05-29 17:10:00",
    "thermalPercent": 45.3
  },
  {
    "time": "2025-05-29 17:20:00",
    "thermalPercent": 36.78
  },
  {
    "time": "2025-05-29 17:30:00",
    "thermalPercent": 41.67
  },
  {
    "time": "2025-05-29 17:40:00",
    "thermalPercent": 44.11
  },
  {
    "time": "2025-05-29 17:50:00",
    "thermalPercent": 44.57
  },
  {
    "time": "2025-05-30 06:00:00",
    "thermalPercent": 57.12
  },
  {
    "time": "2025-05-30 06:10:00",
    "thermalPercent": 37.52
  },
  {
    "time": "2025-05-30 06:20:00",
    "thermalPercent": 54.75
  },
  {
    "time": "2025-05-30 06:30:00",
    "thermalPercent": 55.45
  },
  {
    "time": "2025-05-30 06:40:00",
    "thermalPercent": 34.85
  },
  {
    "time": "2025-05-30 06:50:00",
    "thermalPercent": 50.59
  },
  {
    "time": "2025-05-30 07:00:00",
    "thermalPercent": 50.69
  },
  {
    "time": "2025-05-30 07:10:00",
    "thermalPercent": 43.21
  },
  {
    "time": "2025-05-30 07:20:00",
    "thermalPercent": 48.3
  },
  {
    "time": "2025-05-30 07:30:00",
    "thermalPercent": 54.75
  },
  {
    "time": "2025-05-30 07:40:00",
    "thermalPercent": 35.56
  },
  {
    "time": "2025-05-30 07:50:00",
    "thermalPercent": 41.88
  },
  {
    "time": "2025-05-30 08:00:00",
    "thermalPercent": 45.14
  },
  {
    "time": "2025-05-30 08:10:00",
    "thermalPercent": 42.96
  },
  {
    "time": "2025-05-30 08:20:00",
    "thermalPercent": 33.69
  },
  {
    "time": "2025-05-30 08:30:00",
    "thermalPercent": 36.52
  },
  {
    "time": "2025-05-30 08:40:00",
    "thermalPercent": 45.35
  },
  {
    "time": "2025-05-30 08:50:00",
    "thermalPercent": 52.36
  },
  {
    "time": "2025-05-30 09:00:00",
    "thermalPercent": 42.88
  },
  {
    "time": "2025-05-30 09:10:00",
    "thermalPercent": 35.89
  },
  {
    "time": "2025-05-30 09:20:00",
    "thermalPercent": 47.29
  },
  {
    "time": "2025-05-30 09:30:00",
    "thermalPercent": 30.86
  },
  {
    "time": "2025-05-30 09:40:00",
    "thermalPercent": 41.46
  },
  {
    "time": "2025-05-30 09:50:00",
    "thermalPercent": 39.94
  },
  {
    "time": "2025-05-30 10:00:00",
    "thermalPercent": 54.15
  },
  {
    "time": "2025-05-30 10:10:00",
    "thermalPercent": 44.1
  },
  {
    "time": "2025-05-30 10:20:00",
    "thermalPercent": 56.23
  },
  {
    "time": "2025-05-30 10:30:00",
    "thermalPercent": 55.62
  },
  {
    "time": "2025-05-30 10:40:00",
    "thermalPercent": 47.25
  },
  {
    "time": "2025-05-30 10:50:00",
    "thermalPercent": 39.18
  },
  {
    "time": "2025-05-30 11:00:00",
    "thermalPercent": 52.47
  },
  {
    "time": "2025-05-30 11:10:00",
    "thermalPercent": 43.95
  },
  {
    "time": "2025-05-30 11:20:00",
    "thermalPercent": 38.89
  },
  {
    "time": "2025-05-30 11:30:00",
    "thermalPercent": 40.55
  },
  {
    "time": "2025-05-30 11:40:00",
    "thermalPercent": 40.42
  },
  {
    "time": "2025-05-30 11:50:00",
    "thermalPercent": 55.09
  },
  {
    "time": "2025-05-30 12:00:00",
    "thermalPercent": 53.12
  },
  {
    "time": "2025-05-30 12:10:00",
    "thermalPercent": 43.93
  },
  {
    "time": "2025-05-30 12:20:00",
    "thermalPercent": 37.49
  },
  {
    "time": "2025-05-30 12:30:00",
    "thermalPercent": 40.81
  },
  {
    "time": "2025-05-30 12:40:00",
    "thermalPercent": 37.64
  },
  {
    "time": "2025-05-30 12:50:00",
    "thermalPercent": 49.38
  },
  {
    "time": "2025-05-30 13:00:00",
    "thermalPercent": 53.63
  },
  {
    "time": "2025-05-30 13:10:00",
    "thermalPercent": 47.13
  },
  {
    "time": "2025-05-30 13:20:00",
    "thermalPercent": 31.88
  },
  {
    "time": "2025-05-30 13:30:00",
    "thermalPercent": 42.48
  },
  {
    "time": "2025-05-30 13:40:00",
    "thermalPercent": 51.55
  },
  {
    "time": "2025-05-30 13:50:00",
    "thermalPercent": 50.19
  },
  {
    "time": "2025-05-30 14:00:00",
    "thermalPercent": 41.66
  },
  {
    "time": "2025-05-30 14:10:00",
    "thermalPercent": 43.87
  },
  {
    "time": "2025-05-30 14:20:00",
    "thermalPercent": 46.93
  },
  {
    "time": "2025-05-30 14:30:00",
    "thermalPercent": 36.86
  },
  {
    "time": "2025-05-30 14:40:00",
    "thermalPercent": 39.6
  },
  {
    "time": "2025-05-30 14:50:00",
    "thermalPercent": 53.48
  },
  {
    "time": "2025-05-30 15:00:00",
    "thermalPercent": 42.36
  },
  {
    "time": "2025-05-30 15:10:00",
    "thermalPercent": 46.07
  },
  {
    "time": "2025-05-30 15:20:00",
    "thermalPercent": 54.42
  },
  {
    "time": "2025-05-30 15:30:00",
    "thermalPercent": 54.67
  },
  {
    "time": "2025-05-30 15:40:00",
    "thermalPercent": 47.01
  },
  {
    "time": "2025-05-30 15:50:00",
    "thermalPercent": 41.31
  },
  {
    "time": "2025-05-30 16:00:00",
    "thermalPercent": 33.02
  },
  {
    "time": "2025-05-30 16:10:00",
    "thermalPercent": 49.21
  },
  {
    "time": "2025-05-30 16:20:00",
    "thermalPercent": 49.27
  },
  {
    "time": "2025-05-30 16:30:00",
    "thermalPercent": 59.03
  },
  {
    "time": "2025-05-30 16:40:00",
    "thermalPercent": 45.39
  },
  {
    "time": "2025-05-30 16:50:00",
    "thermalPercent": 53.02
  },
  {
    "time": "2025-05-30 17:00:00",
    "thermalPercent": 37.32
  },
  {
    "time": "2025-05-30 17:10:00",
    "thermalPercent": 48.83
  },
  {
    "time": "2025-05-30 17:20:00",
    "thermalPercent": 41.42
  },
  {
    "time": "2025-05-30 17:30:00",
    "thermalPercent": 43.26
  },
  {
    "time": "2025-05-30 17:40:00",
    "thermalPercent": 47.32
  },
  {
    "time": "2025-05-30 17:50:00",
    "thermalPercent": 36.89
  }
];  // 最近200筆日間數據
    
    const nightHistoryData = [
  {
    "time": "2025-05-28 02:40:00",
    "thermalPercent": 56.57
  },
  {
    "time": "2025-05-28 02:50:00",
    "thermalPercent": 51.82
  },
  {
    "time": "2025-05-28 03:00:00",
    "thermalPercent": 71.09
  },
  {
    "time": "2025-05-28 03:10:00",
    "thermalPercent": 55.57
  },
  {
    "time": "2025-05-28 03:20:00",
    "thermalPercent": 69.96
  },
  {
    "time": "2025-05-28 03:30:00",
    "thermalPercent": 53.08
  },
  {
    "time": "2025-05-28 03:40:00",
    "thermalPercent": 71.56
  },
  {
    "time": "2025-05-28 03:50:00",
    "thermalPercent": 59.06
  },
  {
    "time": "2025-05-28 04:00:00",
    "thermalPercent": 57.08
  },
  {
    "time": "2025-05-28 04:10:00",
    "thermalPercent": 66.65
  },
  {
    "time": "2025-05-28 04:20:00",
    "thermalPercent": 67.5
  },
  {
    "time": "2025-05-28 04:30:00",
    "thermalPercent": 66.7
  },
  {
    "time": "2025-05-28 04:40:00",
    "thermalPercent": 67.62
  },
  {
    "time": "2025-05-28 04:50:00",
    "thermalPercent": 56.56
  },
  {
    "time": "2025-05-28 05:00:00",
    "thermalPercent": 59.77
  },
  {
    "time": "2025-05-28 05:10:00",
    "thermalPercent": 63.65
  },
  {
    "time": "2025-05-28 05:20:00",
    "thermalPercent": 65.91
  },
  {
    "time": "2025-05-28 05:30:00",
    "thermalPercent": 56.91
  },
  {
    "time": "2025-05-28 05:40:00",
    "thermalPercent": 58.16
  },
  {
    "time": "2025-05-28 05:50:00",
    "thermalPercent": 63.83
  },
  {
    "time": "2025-05-28 18:00:00",
    "thermalPercent": 58.4
  },
  {
    "time": "2025-05-28 18:10:00",
    "thermalPercent": 61.88
  },
  {
    "time": "2025-05-28 18:20:00",
    "thermalPercent": 68.37
  },
  {
    "time": "2025-05-28 18:30:00",
    "thermalPercent": 60.5
  },
  {
    "time": "2025-05-28 18:40:00",
    "thermalPercent": 56.41
  },
  {
    "time": "2025-05-28 18:50:00",
    "thermalPercent": 55.57
  },
  {
    "time": "2025-05-28 19:00:00",
    "thermalPercent": 53.18
  },
  {
    "time": "2025-05-28 19:10:00",
    "thermalPercent": 63.03
  },
  {
    "time": "2025-05-28 19:20:00",
    "thermalPercent": 48.32
  },
  {
    "time": "2025-05-28 19:30:00",
    "thermalPercent": 64.9
  },
  {
    "time": "2025-05-28 19:40:00",
    "thermalPercent": 55.91
  },
  {
    "time": "2025-05-28 19:50:00",
    "thermalPercent": 67.32
  },
  {
    "time": "2025-05-28 20:00:00",
    "thermalPercent": 65.71
  },
  {
    "time": "2025-05-28 20:10:00",
    "thermalPercent": 48.81
  },
  {
    "time": "2025-05-28 20:20:00",
    "thermalPercent": 61.06
  },
  {
    "time": "2025-05-28 20:30:00",
    "thermalPercent": 63.06
  },
  {
    "time": "2025-05-28 20:40:00",
    "thermalPercent": 60.17
  },
  {
    "time": "2025-05-28 20:50:00",
    "thermalPercent": 56.29
  },
  {
    "time": "2025-05-28 21:00:00",
    "thermalPercent": 64.03
  },
  {
    "time": "2025-05-28 21:10:00",
    "thermalPercent": 62.13
  },
  {
    "time": "2025-05-28 21:20:00",
    "thermalPercent": 63.96
  },
  {
    "time": "2025-05-28 21:30:00",
    "thermalPercent": 69.46
  },
  {
    "time": "2025-05-28 21:40:00",
    "thermalPercent": 63.82
  },
  {
    "time": "2025-05-28 21:50:00",
    "thermalPercent": 58.95
  },
  {
    "time": "2025-05-28 22:00:00",
    "thermalPercent": 56.21
  },
  {
    "time": "2025-05-28 22:10:00",
    "thermalPercent": 51.04
  },
  {
    "time": "2025-05-28 22:20:00",
    "thermalPercent": 67.99
  },
  {
    "time": "2025-05-28 22:30:00",
    "thermalPercent": 65.36
  },
  {
    "time": "2025-05-28 22:40:00",
    "thermalPercent": 54.72
  },
  {
    "time": "2025-05-28 22:50:00",
    "thermalPercent": 60.75
  },
  {
    "time": "2025-05-28 23:00:00",
    "thermalPercent": 63.95
  },
  {
    "time": "2025-05-28 23:10:00",
    "thermalPercent": 60.16
  },
  {
    "time": "2025-05-28 23:20:00",
    "thermalPercent": 54.92
  },
  {
    "time": "2025-05-28 23:30:00",
    "thermalPercent": 58.22
  },
  {
    "time": "2025-05-28 23:40:00",
    "thermalPercent": 65.95
  },
  {
    "time": "2025-05-28 23:50:00",
    "thermalPercent": 56.07
  },
  {
    "time": "2025-05-29 00:00:00",
    "thermalPercent": 66.46
  },
  {
    "time": "2025-05-29 00:10:00",
    "thermalPercent": 68.74
  },
  {
    "time": "2025-05-29 00:20:00",
    "thermalPercent": 55.99
  },
  {
    "time": "2025-05-29 00:30:00",
    "thermalPercent": 52.45
  },
  {
    "time": "2025-05-29 00:40:00",
    "thermalPercent": 61.47
  },
  {
    "time": "2025-05-29 00:50:00",
    "thermalPercent": 52.21
  },
  {
    "time": "2025-05-29 01:00:00",
    "thermalPercent": 55.78
  },
  {
    "time": "2025-05-29 01:10:00",
    "thermalPercent": 61.58
  },
  {
    "time": "2025-05-29 01:20:00",
    "thermalPercent": 61.69
  },
  {
    "time": "2025-05-29 01:30:00",
    "thermalPercent": 65.38
  },
  {
    "time": "2025-05-29 01:40:00",
    "thermalPercent": 54.97
  },
  {
    "time": "2025-05-29 01:50:00",
    "thermalPercent": 71.3
  },
  {
    "time": "2025-05-29 02:00:00",
    "thermalPercent": 51.46
  },
  {
    "time": "2025-05-29 02:10:00",
    "thermalPercent": 68.24
  },
  {
    "time": "2025-05-29 02:20:00",
    "thermalPercent": 50.19
  },
  {
    "time": "2025-05-29 02:30:00",
    "thermalPercent": 60.91
  },
  {
    "time": "2025-05-29 02:40:00",
    "thermalPercent": 63.33
  },
  {
    "time": "2025-05-29 02:50:00",
    "thermalPercent": 69.67
  },
  {
    "time": "2025-05-29 03:00:00",
    "thermalPercent": 60.07
  },
  {
    "time": "2025-05-29 03:10:00",
    "thermalPercent": 57.04
  },
  {
    "time": "2025-05-29 03:20:00",
    "thermalPercent": 60.47
  },
  {
    "time": "2025-05-29 03:30:00",
    "thermalPercent": 52.43
  },
  {
    "time": "2025-05-29 03:40:00",
    "thermalPercent": 48.97
  },
  {
    "time": "2025-05-29 03:50:00",
    "thermalPercent": 66.62
  },
  {
    "time": "2025-05-29 04:00:00",
    "thermalPercent": 64.85
  },
  {
    "time": "2025-05-29 04:10:00",
    "thermalPercent": 59.14
  },
  {
    "time": "2025-05-29 04:20:00",
    "thermalPercent": 51.99
  },
  {
    "time": "2025-05-29 04:30:00",
    "thermalPercent": 62.65
  },
  {
    "time": "2025-05-29 04:40:00",
    "thermalPercent": 54.22
  },
  {
    "time": "2025-05-29 04:50:00",
    "thermalPercent": 66.71
  },
  {
    "time": "2025-05-29 05:00:00",
    "thermalPercent": 68.22
  },
  {
    "time": "2025-05-29 05:10:00",
    "thermalPercent": 64.21
  },
  {
    "time": "2025-05-29 05:20:00",
    "thermalPercent": 56.55
  },
  {
    "time": "2025-05-29 05:30:00",
    "thermalPercent": 65.63
  },
  {
    "time": "2025-05-29 05:40:00",
    "thermalPercent": 62.94
  },
  {
    "time": "2025-05-29 05:50:00",
    "thermalPercent": 67.33
  },
  {
    "time": "2025-05-29 18:00:00",
    "thermalPercent": 49.66
  },
  {
    "time": "2025-05-29 18:10:00",
    "thermalPercent": 66.91
  },
  {
    "time": "2025-05-29 18:20:00",
    "thermalPercent": 65.99
  },
  {
    "time": "2025-05-29 18:30:00",
    "thermalPercent": 65.95
  },
  {
    "time": "2025-05-29 18:40:00",
    "thermalPercent": 55.88
  },
  {
    "time": "2025-05-29 18:50:00",
    "thermalPercent": 58.44
  },
  {
    "time": "2025-05-29 19:00:00",
    "thermalPercent": 60.6
  },
  {
    "time": "2025-05-29 19:10:00",
    "thermalPercent": 56.11
  },
  {
    "time": "2025-05-29 19:20:00",
    "thermalPercent": 62.65
  },
  {
    "time": "2025-05-29 19:30:00",
    "thermalPercent": 71.67
  },
  {
    "time": "2025-05-29 19:40:00",
    "thermalPercent": 49.51
  },
  {
    "time": "2025-05-29 19:50:00",
    "thermalPercent": 66.57
  },
  {
    "time": "2025-05-29 20:00:00",
    "thermalPercent": 64.14
  },
  {
    "time": "2025-05-29 20:10:00",
    "thermalPercent": 67.61
  },
  {
    "time": "2025-05-29 20:20:00",
    "thermalPercent": 51.33
  },
  {
    "time": "2025-05-29 20:30:00",
    "thermalPercent": 59.18
  },
  {
    "time": "2025-05-29 20:40:00",
    "thermalPercent": 49.54
  },
  {
    "time": "2025-05-29 20:50:00",
    "thermalPercent": 53.66
  },
  {
    "time": "2025-05-29 21:00:00",
    "thermalPercent": 65.31
  },
  {
    "time": "2025-05-29 21:10:00",
    "thermalPercent": 60.06
  },
  {
    "time": "2025-05-29 21:20:00",
    "thermalPercent": 51.7
  },
  {
    "time": "2025-05-29 21:30:00",
    "thermalPercent": 67.3
  },
  {
    "time": "2025-05-29 21:40:00",
    "thermalPercent": 61.94
  },
  {
    "time": "2025-05-29 21:50:00",
    "thermalPercent": 59.33
  },
  {
    "time": "2025-05-29 22:00:00",
    "thermalPercent": 64.72
  },
  {
    "time": "2025-05-29 22:10:00",
    "thermalPercent": 62.59
  },
  {
    "time": "2025-05-29 22:20:00",
    "thermalPercent": 52.58
  },
  {
    "time": "2025-05-29 22:30:00",
    "thermalPercent": 60.22
  },
  {
    "time": "2025-05-29 22:40:00",
    "thermalPercent": 54.06
  },
  {
    "time": "2025-05-29 22:50:00",
    "thermalPercent": 74.75
  },
  {
    "time": "2025-05-29 23:00:00",
    "thermalPercent": 54.07
  },
  {
    "time": "2025-05-29 23:10:00",
    "thermalPercent": 51.99
  },
  {
    "time": "2025-05-29 23:20:00",
    "thermalPercent": 54.07
  },
  {
    "time": "2025-05-29 23:30:00",
    "thermalPercent": 62.99
  },
  {
    "time": "2025-05-29 23:40:00",
    "thermalPercent": 61.48
  },
  {
    "time": "2025-05-29 23:50:00",
    "thermalPercent": 51.51
  },
  {
    "time": "2025-05-30 00:00:00",
    "thermalPercent": 54.41
  },
  {
    "time": "2025-05-30 00:10:00",
    "thermalPercent": 56.79
  },
  {
    "time": "2025-05-30 00:20:00",
    "thermalPercent": 64.83
  },
  {
    "time": "2025-05-30 00:30:00",
    "thermalPercent": 69.44
  },
  {
    "time": "2025-05-30 00:40:00",
    "thermalPercent": 68.12
  },
  {
    "time": "2025-05-30 00:50:00",
    "thermalPercent": 55.22
  },
  {
    "time": "2025-05-30 01:00:00",
    "thermalPercent": 61.11
  },
  {
    "time": "2025-05-30 01:10:00",
    "thermalPercent": 63.67
  },
  {
    "time": "2025-05-30 01:20:00",
    "thermalPercent": 56.39
  },
  {
    "time": "2025-05-30 01:30:00",
    "thermalPercent": 58.2
  },
  {
    "time": "2025-05-30 01:40:00",
    "thermalPercent": 61.13
  },
  {
    "time": "2025-05-30 01:50:00",
    "thermalPercent": 59.41
  },
  {
    "time": "2025-05-30 02:00:00",
    "thermalPercent": 60.4
  },
  {
    "time": "2025-05-30 02:10:00",
    "thermalPercent": 55.05
  },
  {
    "time": "2025-05-30 02:20:00",
    "thermalPercent": 62.22
  },
  {
    "time": "2025-05-30 02:30:00",
    "thermalPercent": 59.84
  },
  {
    "time": "2025-05-30 02:40:00",
    "thermalPercent": 52.31
  },
  {
    "time": "2025-05-30 02:50:00",
    "thermalPercent": 70.97
  },
  {
    "time": "2025-05-30 03:00:00",
    "thermalPercent": 58.3
  },
  {
    "time": "2025-05-30 03:10:00",
    "thermalPercent": 66.72
  },
  {
    "time": "2025-05-30 03:20:00",
    "thermalPercent": 66.32
  },
  {
    "time": "2025-05-30 03:30:00",
    "thermalPercent": 56.92
  },
  {
    "time": "2025-05-30 03:40:00",
    "thermalPercent": 55.45
  },
  {
    "time": "2025-05-30 03:50:00",
    "thermalPercent": 58.67
  },
  {
    "time": "2025-05-30 04:00:00",
    "thermalPercent": 64.13
  },
  {
    "time": "2025-05-30 04:10:00",
    "thermalPercent": 56.3
  },
  {
    "time": "2025-05-30 04:20:00",
    "thermalPercent": 59.54
  },
  {
    "time": "2025-05-30 04:30:00",
    "thermalPercent": 54.66
  },
  {
    "time": "2025-05-30 04:40:00",
    "thermalPercent": 71.42
  },
  {
    "time": "2025-05-30 04:50:00",
    "thermalPercent": 59.1
  },
  {
    "time": "2025-05-30 05:00:00",
    "thermalPercent": 59.99
  },
  {
    "time": "2025-05-30 05:10:00",
    "thermalPercent": 69.08
  },
  {
    "time": "2025-05-30 05:20:00",
    "thermalPercent": 62.74
  },
  {
    "time": "2025-05-30 05:30:00",
    "thermalPercent": 66.22
  },
  {
    "time": "2025-05-30 05:40:00",
    "thermalPercent": 59.57
  },
  {
    "time": "2025-05-30 05:50:00",
    "thermalPercent": 56.47
  },
  {
    "time": "2025-05-30 18:00:00",
    "thermalPercent": 48.6
  },
  {
    "time": "2025-05-30 18:10:00",
    "thermalPercent": 61.53
  },
  {
    "time": "2025-05-30 18:20:00",
    "thermalPercent": 63.26
  },
  {
    "time": "2025-05-30 18:30:00",
    "thermalPercent": 73.04
  },
  {
    "time": "2025-05-30 18:40:00",
    "thermalPercent": 51.45
  },
  {
    "time": "2025-05-30 18:50:00",
    "thermalPercent": 59.83
  },
  {
    "time": "2025-05-30 19:00:00",
    "thermalPercent": 56.44
  },
  {
    "time": "2025-05-30 19:10:00",
    "thermalPercent": 51.53
  },
  {
    "time": "2025-05-30 19:20:00",
    "thermalPercent": 67.53
  },
  {
    "time": "2025-05-30 19:30:00",
    "thermalPercent": 50.72
  },
  {
    "time": "2025-05-30 19:40:00",
    "thermalPercent": 68.4
  },
  {
    "time": "2025-05-30 19:50:00",
    "thermalPercent": 58.41
  },
  {
    "time": "2025-05-30 20:00:00",
    "thermalPercent": 63.64
  },
  {
    "time": "2025-05-30 20:10:00",
    "thermalPercent": 72.71
  },
  {
    "time": "2025-05-30 20:20:00",
    "thermalPercent": 50.63
  },
  {
    "time": "2025-05-30 20:30:00",
    "thermalPercent": 54.01
  },
  {
    "time": "2025-05-30 20:40:00",
    "thermalPercent": 60.42
  },
  {
    "time": "2025-05-30 20:50:00",
    "thermalPercent": 65.53
  },
  {
    "time": "2025-05-30 21:00:00",
    "thermalPercent": 58.72
  },
  {
    "time": "2025-05-30 21:10:00",
    "thermalPercent": 69.82
  },
  {
    "time": "2025-05-30 21:20:00",
    "thermalPercent": 50.1
  },
  {
    "time": "2025-05-30 21:30:00",
    "thermalPercent": 54.66
  },
  {
    "time": "2025-05-30 21:40:00",
    "thermalPercent": 64.89
  },
  {
    "time": "2025-05-30 21:50:00",
    "thermalPercent": 54.5
  },
  {
    "time": "2025-05-30 22:00:00",
    "thermalPercent": 63.46
  },
  {
    "time": "2025-05-30 22:10:00",
    "thermalPercent": 47.0
  },
  {
    "time": "2025-05-30 22:20:00",
    "thermalPercent": 61.94
  },
  {
    "time": "2025-05-30 22:30:00",
    "thermalPercent": 60.58
  },
  {
    "time": "2025-05-30 22:40:00",
    "thermalPercent": 63.05
  },
  {
    "time": "2025-05-30 22:50:00",
    "thermalPercent": 66.26
  },
  {
    "time": "2025-05-30 23:00:00",
    "thermalPercent": 69.76
  },
  {
    "time": "2025-05-30 23:10:00",
    "thermalPercent": 61.77
  },
  {
    "time": "2025-05-30 23:20:00",
    "thermalPercent": 62.24
  },
  {
    "time": "2025-05-30 23:30:00",
    "thermalPercent": 57.46
  },
  {
    "time": "2025-05-30 23:40:00",
    "thermalPercent": 61.13
  },
  {
    "time": "2025-05-30 23:50:00",
    "thermalPercent": 48.18
  }
];  // 最近200筆夜間數據
    
    // 儲存到本地存儲
    localStorage.setItem('dayData', JSON.stringify(dayHistoryData));
    localStorage.setItem('nightData', JSON.stringify(nightHistoryData));
    
    console.log('📊 歷史數據載入完成');
    console.log(`日間數據: ${dayHistoryData.length} 筆`);
    console.log(`夜間數據: ${nightHistoryData.length} 筆`);
    
    // 觸發圖表更新
    if (window.taipowerMonitor) {
        window.taipowerMonitor.dayData = dayHistoryData;
        window.taipowerMonitor.nightData = nightHistoryData;
        window.taipowerMonitor.updateCharts();
        console.log('🔄 圖表已更新歷史數據');
    }
    
    return {
        dayData: dayHistoryData,
        nightData: nightHistoryData,
        totalRecords: dayHistoryData.length + nightHistoryData.length
    };
}

// 頁面載入時自動執行
document.addEventListener('DOMContentLoaded', function() {
    // 延遲載入，確保主系統已初始化
    setTimeout(loadHistoricalData, 1500);
});

console.log('📁 歷史數據腳本已準備就緒');
