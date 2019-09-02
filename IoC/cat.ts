import { injectable } from "inversify";
import { Animal } from "./animal";
 
@injectable()
class Cat implements Animal {
    name!: string;    
    bark(): string {
        return 'Meaw!';
    }
}
 
export {Cat}