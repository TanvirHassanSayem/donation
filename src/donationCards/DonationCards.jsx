import React from 'react';
import DonationCard from './DonationCard';

const DonationCards = ({donations}) => {
   
    return (
        <div className='p-10 '>
           <div className=' gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           {
            donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
           }
           </div>
        </div>
    );
};

export default DonationCards;