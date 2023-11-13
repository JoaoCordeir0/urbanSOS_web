import { ref } from 'vue';
import { credentials, validationRequest } from './useAuth';
import axios from 'axios';

export interface IInfoData {
  count_total: Int16Array
  count_opened: Int16Array
  count_resolved: Int16Array
}

const key = credentials()

export async function useInfoDataDashboard() {
  const { data } = await axios.get(`${key.urlApi}/report/list/info/${localStorage.getItem('AdminCity')}`, { headers: key.headerApi })

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