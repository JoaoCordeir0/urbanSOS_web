import { ref } from 'vue';
import { credentials } from './useAuth';

export interface IInfoData {
  count_total: Int16Array
  count_opened: Int16Array
  count_resolved: Int16Array
}

const key = credentials()

export async function useInfoDataDashboard() {
  const response = await fetch(`${key.urlApi}/report/list/info/1`, { headers: key.headerApi })
  const data = await response.json()

  const dashTableData = ref<IInfoData[]>(data)

  return { dashTableData }
}

export const useInfoChartLineDashboard = {
  options: {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  responsive: [{
    breakpoint: undefined,
    options: {},
  }],
  series: [{
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }]
}

export const useInfoChartDonutDashboard = {
  options: {
    chart: {
      id: 'donut-chart',      
    },
  },
  responsive: [{
    breakpoint: undefined,
    options: {},
  }],
  series: [44, 55, 41, 17, 15]
}