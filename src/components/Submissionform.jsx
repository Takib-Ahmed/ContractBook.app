
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SubmissionForm({
  setContractlist,
  Contractlist,

  SelectedContract,
  setSelectedContract,
  Updater,
  IsUpdateClickable,


}) {
 
  const Contractform = document.querySelectorAll('.contractform')


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
            <div className="mt-2">
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
                  type={value.inputtype}
                  name={value.name_id}
                  id={value.name_id}
                  autoComplete="off"
                  placeholder={value.placeholder}
              required
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
            const { name,number,email } = formdata;
      if(name.trim()!== "" && number.trim()!=='' & email.trim()!== ''){    if (IsUpdateClickable) {
        Object.keys(SelectedContract).length && Updater();
        Contractform.forEach((e)=> e.value= ''); 
        setSelectedContract('')
        
      }

     
      
      else {
      
  
        const hasValue = Array.from(Contractform).some((e) => e.value !== '');
if(hasValue){
  Contractform.forEach((e)=> e.value= '')
  setContractlist([...Contractlist, formdata]);
  setformdata({...formdata,id:Date.now()})
  console.log(formdata)
}
       

    }}
     
      
         
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
