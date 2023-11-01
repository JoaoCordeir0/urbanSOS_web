import { ref } from 'vue';
import { credentials, validationRequest } from './useAuth';
import axios from "axios";

export interface IReportFormData {
  title: string;
  description: string;
  createdAt: string;  
  situation: string;
  status: string;
}

const key = credentials()

export async function useFormReport(id) {  

  const { data } = await axios.get(`${key.urlApi}/report/details/${id}`, { headers: key.headerApi })  

  const reportFormData = ref<IReportFormData[]>( data )
  
  return reportFormData 
}