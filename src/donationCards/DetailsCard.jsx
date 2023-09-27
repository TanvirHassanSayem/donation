import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const DetailsCard = ({donation}) => {

    const { id,picture, category, title, category_bg_color, card_bg_color, color,description,price } = donation || {}

    const addDonation =()=>{
      const items=JSON.parse(localStorage.getItem('donationItems'))
      var addedDonationArray=[];
      if(items!= null){
          addedDonationArray=[...items];
      } 
       
         addedDonationArray.push(donation)
        localStorage.setItem('donationItems',JSON.stringify(addedDonationArray))
        toast('Donation Added Successfully', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
   

    return (
        
<div className='p-10'>
  <div className='mx-auto w-3/5 relative'>
    <img src={picture} alt="" className='w-full h-[60vh] ' />

    <div className='absolute  w-full bottom-0  flex items-center '>
      <div className='bg-black bg-opacity-50 w-full p-2 '>
      <button onClick={addDonation} className='text-lg text-white w-[170px] p-2 bg-red-600 font-bold rounded-md hover:border border-inherit'>
        Donate ${price}
      </button>
      </div>
    </div>

 
  </div>
  <div className='py-5 mx-auto w-3/5 '>
      <h2 className={`font-bold text-2xl`}>{title}</h2>
      <p className='py-5 text-sm text-black'>{description}</p>
    </div>
</div>

    );
};

export default DetailsCard;