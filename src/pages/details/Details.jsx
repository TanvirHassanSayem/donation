import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from '../../donationCards/DetailsCard';

const Details = () => {
    const [donation,setDonation]=useState({})
    const {id}=useParams()
    const donations=useLoaderData()
   

    useEffect(()=>{
        const findDonation =donations?.find(donation => donation.id ==id)
        setDonation(findDonation)
        
    },[id,donations])
    
   
    return (
        <div>
            <DetailsCard key={id} donation={donation}></DetailsCard>
        </div>
    );
};

export default Details;