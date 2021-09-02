import Iuser from "../Interfaces/Iuser";

export default class UserDetails implements Iuser{
    userName: string
    password: string

    constructor(userName:string, password:string) { 
        // Initialization inside the constructor
        this.userName = userName;
        this.password = password;
     }
    
}