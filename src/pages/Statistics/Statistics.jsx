import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
    const donations=useLoaderData()
    // useEffect(()=>{

    // },[])
    var priceArray = donations.map(e=>e.price)
    var totalprice =  0 ;
    for(var i = 0 ;i<priceArray.length ; i++){
    totalprice+=parseFloat(priceArray[i])
        
    }
    var totalDonation =  0 ;
    let donationData=JSON.parse(localStorage.getItem('donationItems'))
    if(donationData!=null){
        var donationArray = donationData.map(e=>e.price)
          for(var i = 0 ;i<donationArray.length ; i++){
            totalDonation+=parseFloat(donationArray[i])
            
        }
    }
   

 
var totalPricePercentage = (totalprice/(totalprice+totalDonation))*100
var totalDonationPercentage = (totalDonation/(totalprice+totalDonation))*100
    const data = {
        labels: ['Your Donation', 'Total Donation'],
        datasets: [
          {
            label: 'Donation',
            data: [totalDonationPercentage , totalPricePercentage],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
       <section className='flex justify-center my-8'> <div className='w-[500px]'>
       <Pie data={data} />
      </div></section>
    );
};

export default Statistics;