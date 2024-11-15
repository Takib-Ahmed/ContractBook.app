import { json } from "stream/consumers"

export const useLocalStorage = (key)=>{
const setItem = (value:unknown) => {
   try{
    window.localStorage.setItem(key,JSON.stringify(value))
   }
   catch(error){
console.log(error)
   }
}
const getitem = () =>{
try{
    const item = window.localStorage.getItem(key)
return item? JSON.parse(item) : undefined;

}
catch(error){
console.log(error)
}


}


return {setItem , getitem};


}