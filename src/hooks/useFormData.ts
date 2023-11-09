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

export interface ISettingsFormData {
  id: string;
  name: string;  
  state: string;
  email: string;
  status: string;
  createdAt: string;
}

const key = credentials()

// Dados de reports
export async function useFormReport(id) {  

  const { data } = await axios.get(`${key.urlApi}/report/details/${id}`, { headers: key.headerApi })  

  validationRequest(data)

  return ref<IReportFormData[]>( data )
}

// Dados de usuário
export async function useFormUser(id) {  

  const { data } = await axios.get(`${key.urlApi}/user/details/${id}`, { headers: key.headerApi })  

  validationRequest(data)
  
  return ref<IUserFormData[]>( data )     
}

// Dados de configurações
export async function useFormSettings(id) {  

  const { data } = await axios.get(`${key.urlApi}/city/details/${id}`, { headers: key.headerApi })  

  validationRequest(data)
  
  return ref<ISettingsFormData[]>( data[0] )
}

// Atualiza status de um report
export async function useUpdateReportStatus(status, id) {

  const updateParams = {
    report: id,
    status: status,
    token: key.tokenApi
  }
  
  const { data } = await axios.patch(`${key.urlApi}/report/update/status`, updateParams)  

  return data
}

// Atualiza informações da cidade
export async function useUpdateSettings(id, email, status) {
  
  const updateParams = {
    city: id,
    email: email,
    status: status,
    token: key.tokenApi
  }
  
  const { data } = await axios.put(`${key.urlApi}/city/update/`, updateParams)  

  return data
}