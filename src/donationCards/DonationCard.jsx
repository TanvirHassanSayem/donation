import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id,picture, category, title, category_bg_color, card_bg_color, color } = donation || {}

    return (
        <div  style={{background:card_bg_color}}> 
            <Link to={`/${id}`}>
            <div className={`h-[300px] rounded-xl ${card_bg_color} bg-clip-border shadow-md text hover:shadow-lg shadow-gray-200 `}>
                <div className="overflow-hidden rounded-lg  bg-clip-border ">
                    <img src={picture} alt="" className='w-full h-full' />
                </div>

                <div className='p-2' style={{color:color}}>
                    <div style={{background:card_bg_color}} className={`${category_bg_color} ${color}  font-bold w-[90px] p-1 rounded-md text-center hover:shadow`}>
                        <button type="button" className=''>{category}</button>
                    </div>
                    <h2 className={`${color} p-1 font-bold text-xl`}>{title}</h2>
                </div>



            </div>
            </Link>
        </div>

    );
};

export default DonationCard;