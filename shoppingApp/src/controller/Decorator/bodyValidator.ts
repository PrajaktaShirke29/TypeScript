import 'reflect-metadata';
import { MetadataKeys } from "../../Methods/MetadataKeys";

export function bodyValidator( ...keys : string[]){
    return function(target: any, key:string, desc: PropertyDescriptor){
        Reflect.defineMetadata(MetadataKeys.bodyVatidator, keys, target, key);
    }
}