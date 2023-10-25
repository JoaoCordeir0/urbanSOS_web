import { ref } from 'vue';
import { credentials } from './useAuth';

export interface IReportsTableData {
  title: string;
  description: string;
  createdAt: string;  
  situation: string;
  status: string;
}

export interface IAdmsTableData {
  name: string;
  email: string;
  cpf: string;  
  status: string;
  createdAt: string;
}

const key = await credentials()

export async function useTableDataReports() {    
  const response = await fetch(`${key.urlApi}/report/list/city/1`, { headers: key.headerApi })
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
  })
 
  const reportsTableData = ref<IReportsTableData[]>( reportsData )
  
  return { reportsTableData }
}

export async function useTableDataAdms() {    
  const response = await fetch(`${key.urlApi}/user/admin/list/2'`, { headers: key.headerApi })
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
  })
 
  const admsTableData = ref<IAdmsTableData[]>( admsData )
  
  return { admsTableData }
}