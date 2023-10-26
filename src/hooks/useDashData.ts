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
  
  const dashTableData = ref<IInfoData[]>( data )
  
  return { dashTableData }
}