/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import Expensesvg, { Deletesvg, Editsvg, Filtersvg, Sortsvg } from "./svgs/Expensesvg";
import DeleteConfirmBox from "./Deleteconfirmbox";
import { useLocalStorage } from "./Hooks/useLocalstorage";

export default function ContractBook({Contractlist,setContractlist,setSelectedContract,setSelectedkey,setisUpdateClickable}){
useEffect(() => {
  const Savedcontracts = JSON.parse(localStorage.getItem('value') || '[]');
  setContractlist(Savedcontracts);
}, [setContractlist]);


const {setItem} = useLocalStorage('value')
const [Showconfimrbox,setshowconfimrbox] = useState('')

const [Searchvalue,setSearchvalue] = useState('')
const [Clearvalue,setclearvalue] = useState(false)

const onSearch = (value)=>  {
  const checking = document.getElementById("Search").value !== ""
setSearchvalue(value)
checking ? setclearvalue(true)  : setclearvalue(false) && setSearchvalue('')
console.log(value)
} 


    return (
        <>
  

            <div className="border rounded-md relative">
    
              {/* <!-- Header --> */}
              <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                <div className="flex items-center gap-2">
                  {/* <!-- Icon --> */}
                  <div
                    className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base p-1"
                  >
       <img src="/5837778.png" alt="" className=" invert "/>
               
                  </div>
                  {/* <!-- Text --> */}
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-800 Contracts ">Contracts</h3>
                  </div>
                </div>
                <div className="flex justify-center items-center ">
   <div className="  relative">
   <input
      id="Search"
        type="text"
        className="  p-[0.45rem] rounded-l-full border border-gray-300 focus:border-blue-300 focus:outline-none  md:w-36 lg:w-80"
        placeholder="Search contracts..."
        onChange={(e) => e.value !== '' ? onSearch(e.target.value.toLocaleLowerCase()) : setclearvalue(false)
          
           }
         />
 {
  Clearvalue &&         <button className=" absolute right-1  " onClick={()=>{
    document.getElementById('Search').value = '' 
    setclearvalue(false)
             }}> <img src="/cross2.png" alt="" className="  w-9  " /></button>
 }
   </div>
      <button className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-300">
        <i className="text-lg"><img src="/search-user-icon (1).png" alt=""  className=" invert "/></i>
      </button>
    </div>
              </div>
   <div className="flex flex-col-reverse">    
{          Contractlist.filter((Contracts)=> Contracts.name.toLowerCase().includes(Searchvalue)   || Contracts.number.toLowerCase().includes(Searchvalue)  || Contracts.email.toLowerCase().includes(Searchvalue)  ).map((value,key)=>(
                

                <div className="p-4 divide-y border " key={key}>
              
                {/* <!-- Row --> */}
              
                <div className="flex justify-between items-center py-2 relative group cursor-pointer">
                  <div>
                    <h3 className="text-base font-medium leading-7 text-gray-600 text-xl ">{value.name}</h3>
                    <p className="text-xs text-gray-600">{                     
              
                      
                  // (    new Date(value.date).getDate() +` ` +new Date(value.date).toLocaleString('default', { month: 'long' }) +' ' + new Date(value.date).getFullYear() )
                      
                      }</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14  text-right">
               
                 <font className='  text-xl'>{value.number}</font> <br /> <font className=' font-thin'>{value.email}</font>
          
                    </p>
              
                    {/* <!-- 3 Dots --> */}
                    <div
                      className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all"
                    >
              
                      <button className="hover:text-teal-600" role="button" title="Edit Button"  onClick={()=>
              
              { 
                
                setSelectedkey(key)
                setSelectedContract(value)
                setisUpdateClickable(true)
          
              }} >
                <Editsvg/>
                      </button>
              
                      <button className="hover:text-red-600" role="button" title="Delete"  onClick={()=>{
              
                     setshowconfimrbox(key)
                      }}>
              <Deletesvg />
                      </button>
                    </div>
                  </div>
                </div>
                {Showconfimrbox ===key && <DeleteConfirmBox onCancel={()=>{
                    setshowconfimrbox('')
                }} onDelete={()=>{
                         const Updatedistory = Contractlist.filter((_, index) => index !== key);
                    
                   
              
                         setContractlist(Updatedistory);
                         setItem(Updatedistory)
                         setshowconfimrbox('')
                }} /> }
              
              </div>
              ))}
             

</div>     
  



</div>
       </>
    )
  }