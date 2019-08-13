import axios, { AxiosResponse, AxiosError } from "axios";
import { Eventing } from "./Eventing";
interface UserProps {
    id?: number
    name?: string;       // ? => makes the data optional
    age?: number;
}

export class User {
    public events: Eventing = new Eventing()
    constructor(private data: UserProps) { }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            }).catch((err: AxiosError) => {
                console.log(err);
            })
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
        }else{
            axios.post(`http://localhost:3000/users`, this.data);
        }

    }
}
