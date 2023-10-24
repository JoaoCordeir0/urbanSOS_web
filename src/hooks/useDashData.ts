import { ref } from 'vue';
import { getToken } from './useAuth';

const urlApi = import.meta.env.VITE_URL_ENDPOINT  

// Interface da tabela de reports
export interface IInfoData {
  count_total: Int16Array
  count_opened: Int16Array
  count_resolved: Int16Array  
}

// Funcão que consulta a API e retorna os reports
export async function useInfoDataDashboard() {  
  const header = {
    "x-access-token" : (await getToken('Dashboard Consult - Web')).token
  }  
  const response = await fetch(`${urlApi}/report/list/info/1`, { headers: header });
  const data = await response.json()

  const dashTableData = ref<IInfoData[]>( data );
  
  return {
    dashTableData,
  };
}