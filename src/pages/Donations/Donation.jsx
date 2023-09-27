import React, { useEffect, useState } from "react";

const Donation = () => {
  const [itemsData, setItemsData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  useEffect(()=>{
    let items=JSON.parse(localStorage.getItem('donationItems'))
 if(items!=null){
  setItemsData(items)
  setRenderData(items.slice(0, 4))
 }
  },[])
  return (
    <div>
      
      <div className="grid grid-cols-2 gap-5 px-[5%] mt-5"> 

      {
            renderData?.map(item =><><div  style={{background:item.card_bg_color}} className="flex gap-1 items-center bg-red-200 rounded-lg"   >
            <div className="rounded-l-lg overflow-hidden w-48 h-48">
           <img className="w-48 h-48 object-cover" src={item.picture} alt="" />
            </div>
            <div className="p-5 space-y-1">
           <button  style={{background:item.category_bg_color}} className="  text-sm  px-2 py-1 rounded-sm">{item.category}</button>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="text-blue-500 font-semibold">${item.price}</p>
            <button style={{background:item.color}} className=" text-white font-semibold px-4 py-1 rounded-md">View Details</button>
            </div>
           </div></>)
           }

      </div>
      <div className={`flex justify-center items-center my-8 ${itemsData.length == renderData.length && 'hidden'}`}>
  <button className="bg-[#009444] px-5 py-1 text-lg font-semibold text-white rounded-md" onClick={()=>setRenderData(itemsData)}>See All</button>
</div>
       
    </div>
  );
};

export default Donation;
