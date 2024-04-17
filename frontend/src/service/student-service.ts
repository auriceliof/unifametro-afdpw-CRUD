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

export function insertRequest(obj: StudentDTO) {

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/students",
        data: obj    
    }    
    
    return requestBackend(config)
}

export function updateRequest(obj: StudentDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/students/${obj.id}`,
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
