import { ref } from 'vue';
import { credentials, validationRequest } from './useAuth';
import axios from 'axios';

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

const key = credentials()

export async function useTableDataReports() {    
  const { data } = await axios.get(`${key.urlApi}/report/list/city/1`, { headers: key.headerApi })

  validationRequest(data)

  const reportsData = Array()

  data.forEach(item => {
    reportsData.push({
      id: item.id,
      title: item.title,
      description: item.description,
      createdAt: formatDate(item.createdAt),
      situation: item.situation,
      status: item.status,     
    })
  })
 
  const reportsTableData = ref<IReportsTableData[]>( reportsData )
  
  return { reportsTableData }
}

export async function useTableDataAdms() {    
  //const { data } = await axios.get(`${key.urlApi}/user/admin/list/${localStorage.getItem('AdminCity')}`, { headers: key.headerApi })
  const { data } = await axios.get(`${key.urlApi}/user/admin/list/3`, { headers: key.headerApi })

  validationRequest(data)
  
  const admsData = Array()  
  
  data.forEach(item => {
    console.log(item.status)
    admsData.push({  
      id: item.id,    
      name: item.name,
      email: item.email,
      cpf: item.cpf,
      status: item.admin.status == 1 ? 'Active' : 'Inactive',
      createdAt: formatDate(item.createdAt),
    })
  })
 
  const admsTableData = ref<IAdmsTableData[]>( admsData )
  
  return { admsTableData }
}

function formatDate(date) {  
  return ((new Date(date)).toLocaleString('pt-BR', { timezone: 'UTC' })).replace(',', '')
}