const heros = ["herh","bgh"]

heros.map((hero): string =>{
    return hero 
})

//return object
function createuser ():{name:string , price : number}{
    return {name:"saku", price:68}
}

// type User ={
//     name:string,
//     email: string,
//     isactive :boolean
// }

// function createUser (user:User): User{
//     return {name:"ueyfcjgj",email:"jfbcjs", isactive:true}
// }

type User ={
    readonly _id:string
    name:string
    email: string
    isactive :boolean
    creditdetails ?:number //? for optional..all dont have credit card
}

let myUser:User ={
    _id :"122",
    name:"yfgh",
    email:"uikgj",
    isactive: true
}

myUser.email ="vhmj"

type cardnumber ={
   
    cardno:string
    
}
type carddate ={
   
    carddate:string
    
}
type carddetail = carddate & cardnumber &{
    cvv:number
}