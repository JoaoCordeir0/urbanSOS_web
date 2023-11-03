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

export interface IUserFormData {
  id: string;
  name: string;
  email: string;  
  cpf: string;
  password: string;
  status: string;
  createdAt: string;
}

const key = credentials()

export async function useFormReport(id) {  

  const { data } = await axios.get(`${key.urlApi}/report/details/${id}`, { headers: key.headerApi })  

  validationRequest(data)

  const reportFormData = ref<IReportFormData[]>( data )
  
  return reportFormData 
}

export async function useFormUser(id) {  

  const { data } = await axios.get(`${key.urlApi}/user/details/${id}`, { headers: key.headerApi })  

  validationRequest(data)
  
  const userFormData = ref<IUserFormData[]>( data )
  
  return userFormData 
}