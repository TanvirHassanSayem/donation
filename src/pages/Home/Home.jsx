import React, { useEffect, useState } from 'react';
import Banner from '../../components/Header/banner/Banner';

import { useLoaderData } from 'react-router-dom';
import DonationCards from '../../donationCards/DonationCards';



const Home = () => {

    const donations=useLoaderData()
    const [donationRender, setDonationRender] = useState([]);
  useEffect(()=>{
    setDonationRender(donations)
  },[])
    const submitHandler = (e)=>{
        e.preventDefault()
        let search = e.target.search.value
 if(search==''){
    setDonationRender(donations)
 }else{
   let filterData =  donations.filter(e=>e.category==search)
   setDonationRender(filterData)
 }
    }
    return (
        <div>
           
            <Banner submitHandler = {submitHandler}></Banner>
            <DonationCards donations={donationRender}></DonationCards>
        </div>
    );
};

export default Home;