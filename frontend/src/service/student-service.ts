import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";
import { StudentDTO } from "../models/student";

export function findPageRequest(page: number, name: string, size = 12, sort = "id") {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/students",
        params: {
            page,
            name,
            size,
            sort
        }
    }    
    
    return requestBackend(config)
}

export function findById(id: number) {
    return requestBackend( { url: `/students/${id}` });
}

export function updateRequest(obj: StudentDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/students/${obj.id}`,
        data: obj
    }    
    
    return requestBackend(config)
}

export function insertRequest(obj: StudentDTO) {

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/students",
        data: obj    
    }    
    
    return requestBackend(config)
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/students/${id}`,
    }

    return requestBackend(config)
}




// Função para formatar data e hora no formato "2023-01-20T20:38:12"
function formatarDataHora(dataHora: any) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    return `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}Z`;
}