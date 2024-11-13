import { useState } from "react"
import Button from "./Button";
export default function 
Header(){
  
      const [Navlinks] = useState(['Home', 'App', 'Account', 'Export'])
    return (

       <>
         <nav>
      <div
        className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto"
      >
        {/* <!-- Logo --> */}
        <div>
          <img src="/public/logo_prev_ui.png" className="h-14 p-2" />
        </div>

        {/* <!-- Menu --> */}
        <div className="hidden md:block">
          <ul className="flex gap-4 text-gray-500 font-medium">
      {Navlinks.map((value,key)=>(
        <li key={key}>{value}</li>
      ))}
          </ul>
        </div>

        {/* <!-- Button --> */}
        {/* <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">Get App</div> */}
        <Button text={"Get App"}/>
      </div>
    </nav>
       </> 
    );
}
