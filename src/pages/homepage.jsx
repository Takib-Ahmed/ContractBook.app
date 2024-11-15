import { useState } from "react";

import ContractBook from '../components/Contractlist'

import Submissionform from "../components/Submissionform";
import Header from "../components/Header";
import { useLocalStorage } from "../components/Hooks/useLocalstorage";

export default function Homepage(){
    const [Contractlist,setContractlist] =useState([])
  
    const[SelectedContract,setSelectedContract] = useState({

    })
    const [IsUpdateClickable, setisUpdateClickable] = useState(false);
 
    const [Selecetedkey,setSelectedkey] = useState()
    const[UpdatedContractlist,setUpdatedContractlist] = useState({

    })
 
 
    const {setItem} = useLocalStorage('value')
     const Updater = ()=>{
    
        setUpdatedContractlist(SelectedContract)
setisUpdateClickable(false)

Contractlist[Selecetedkey]=SelectedContract;
var Updatedlist  = Contractlist;
setItem(Updatedlist);
setTimeout(() => {
    setUpdatedContractlist({})  
}, 1000);
     }


    return (
<>



   <main className="relative mx-auto mt-10 w-full max-w-7xl">
    <Header/> <br /> <br />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bodygrid  justify-center">


<Submissionform  setContractlist={setContractlist} Contractlist={Contractlist}   SelectedContract={SelectedContract} setSelectedContract={setSelectedContract} Updater={Updater} IsUpdateClickable={IsUpdateClickable}    Selecetedkey={Selecetedkey} setSelectedkey={setSelectedkey}/>
<div className="lg:col-span-2">

    <div className="">
        

            <ContractBook  Contractlist={Contractlist}  setContractlist={setContractlist}  SelectedContract={SelectedContract} setSelectedContract={setSelectedContract}   setSelectedkey={setSelectedkey}  Selecetedkey={Selecetedkey} setisUpdateClickable={setisUpdateClickable}/>

         </div>
    </div>

            </section></main>
</>
    );
}