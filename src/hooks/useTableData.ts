import { ref } from 'vue';
import { getToken } from './useAuth';

const urlApi = import.meta.env.VITE_URL_ENDPOINT  

// Interface da tabela de reports
export interface IReportsTableData {
  title: string;
  description: string;
  createdAt: string;  
  situation: string;
  status: string;
}

// Interface da tabela de usuários
export interface IAdmsTableData {
  name: string;
  email: string;
  cpf: string;  
  status: string;
  createdAt: string;
}

// Funcão que consulta a API e retorna os reports
export async function useTableDataReports() {  
  const header = {
    "x-access-token" : (await getToken('Reports Consult - Web')).token
  }  
  const response = await fetch(`${urlApi}/report/list/city/1`, { headers: header });
  const data = await response.json()

  const reportsData = Array()

  data.forEach(item => {
    reportsData.push({
      id: item.id,
      title: item.title,
      description: item.description,
      createdAt: item.createdAt,
      situation: item.situation,
      status: item.status,     
    })
  });  
 
  const reportsTableData = ref<IReportsTableData[]>( reportsData );
  
  return {
    reportsTableData,
  };
}

// Funcão que consulta a API e retorna os usuários
export async function useTableDataAdms() {  
  const header = {
    "x-access-token" : (await getToken('Adms Consult - Web')).token
  }  
  const response = await fetch(`${urlApi}/user/admin/list/1'`, { headers: header });
  const data = await response.json()

  const admsData = Array()  

  data.forEach(item => {
    admsData.push({      
      name: item.name,
      email: item.email,
      cpf: item.cpf,
      status: item.status == 1 ? 'Active' : 'Inactive',
      createdAt: item.createdAt,
    })
  });  
 
  const admsTableData = ref<IAdmsTableData[]>( admsData );
  
  return {
    admsTableData,
  };
}