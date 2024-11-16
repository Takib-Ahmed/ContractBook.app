
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "./Hooks/useLocalstorage";
export default function SubmissionForm({
  setContractlist,
  Contractlist,

  SelectedContract,
  setSelectedContract,
  Updater,
  IsUpdateClickable,


}) {
 
  const Contractform = document.querySelectorAll('.contractform')
  const formRefs = useRef([]);
  const Nameinput =   document.getElementById('name')
const {setItem} = useLocalStorage('value')


const handleKeyDown = (event, index) => {
  if (event.key === 'Enter') {
  if(index!==2){
    event.preventDefault(); // Prevent default form submission
  }
    const nextInput = formRefs.current[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
    if(index==2 && Nameinput){
      Nameinput.focus()
    }
  }
};

window.onload = () =>{

  Nameinput && Nameinput.focus()
}

useEffect(() => {

}, [Contractlist]);

const [Message,setMessage] = useState("")
  const [sumissionlist] = useState([
    {
      labelname: "Name",
      name_id: "name",
      inputtype: "name",
      placeholder: "name",
    },
    {
      labelname: "Phone",
      inputtype: "number",
      name_id: "number",
      placeholder: "880...",
    },
    {
      labelname: "Email",
      inputtype: "email",
      name_id: "email",
      placeholder: "@gmail.com",
    },
  ]);

  const [formdata, setformdata] = useState({
    id:Date.now(),
    name:"",
    number: "",
  email: "",

  });


  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });

if(IsUpdateClickable){
  const updatedformdata = {
    ...SelectedContract,
    [e.target.name]: e.target.value,
  };


  
  Object.keys(SelectedContract).length && setSelectedContract(updatedformdata);

  };
  setMessage("")
  }

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md h-[500px]">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
Contract Management
      </h2>

      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={
              `cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ` 
            }
            onClick={() => {
           
            }}
         id="SelectExpense" >
{IsUpdateClickable? 'Editing' : 'Contract Form'}
          </div>
        
        </div>

        {sumissionlist.map((value, key) => (
          <div className="mt-3" key={key}>
            <label
              htmlFor={value.labelname.toLowerCase()}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {value.labelname}
            </label>
            <div className="mt-2 forminputparent">
              {(
                <input
                  value={
                 (   Object.keys(SelectedContract).length && value.name_id==='name'
                      ? SelectedContract.name
                      : value.name_id==='email' ? SelectedContract.email : SelectedContract.number )
                  }
                  onChange={
                   handlechange 
                  }
                  ref={(el) => (formRefs.current[key] = el)} // Assign ref dynamically
          onKeyDown={(event) => handleKeyDown(event, key)}
                  type={value.inputtype}
                  name={value.name_id}
                  id={value.name_id}
                  autoComplete="off"
                  placeholder={value.placeholder}
              required min={0} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 contractform"
                 />
              )}
      
            </div>
            
          </div>
        ))}
       

        <button
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          onClick={(e) => {
            e.preventDefault();
          
            const hasValue = Array.from(Contractform).every((e) => e.value !== '');
      if(hasValue){  
        
        if (IsUpdateClickable) {
        Object.keys(SelectedContract).length && Updater();
        Contractform.forEach((e)=> e.value= ''); 

  setSelectedContract({})

        
      }

     
      
      else {
      
  
       
        const ISvalid = Array.from(Contractform).some((e) =>  e.checkValidity());
        const ISmailvalid = document.getElementById('email').checkValidity();
    
if(hasValue && ISvalid && ISmailvalid){
 
  Contractform.forEach((e)=> e.value= '')
  


 // Assuming Contractlist and setContractlist are part of your state

// 1. First, update Contractlist with the new formdata
setContractlist(prevList => {
  const updatedList = [...prevList, formdata];
  setItem(updatedList); // This will set the new list to item immediately after the state update
  return updatedList;
});

  



 
    
 
    setformdata({...formdata,id:Date.now()}); 
   setTimeout(() => {
    setformdata({})
  
   

   }, 1000);
       
 
  }


else{
  setMessage('invalid input')
}


       

    }}
    else{
      setMessage("all fields are required")
    }
     
      
         
          }}
        >
          Save
        </button>
        <p className=" text-[15px] mt-2  text-center text-red-500 font-thin">{Message} </p>
      </form>
    </div>
  );
}
