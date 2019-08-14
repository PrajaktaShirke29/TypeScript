import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

let rootUrl= 'http://localhost:3000/users';

interface HasId{
    id?:number;
}
export class ApiSync<T extends HasId> {

    constructor(public rootUrl:string){}
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);

    }

    save(data : T): AxiosPromise {
        const {id } = data;

        if (id) {
           return axios.put(`${rootUrl}/${id}`, data);
        }else{
            return axios.post(this.rootUrl, data);
        }

    }
}