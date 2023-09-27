import React from 'react';

const Banner = ({submitHandler}) => {
    return (
        <div >
        <div className="relative">
  <div className="w-full h-[25vh] md:h-[75vh] opacity-10">
    <img src="../photos/home.jpg" alt=""className="w-full h-full object-cover"
    />
  </div>
  
 
  <div className="absolute inset-0 flex  items-center justify-center">
   
    <div className="px-8 md:px-0 md:w-1/3 mx-auto flex flex-col">
    <h1 className='font-bold text-2xl py-5'>I Grow By Helping People In Need</h1>
      <form onSubmit={submitHandler} className='flex'>
      <input
        type="text"
        name="search"
        className="w-full h-10 pl-4 pr-10 rounded-l-lg border-2 border-gray-300 focus:outline-none"
        placeholder="Search here..."
      />
      <button 
        type="submit"
        className="h-10 px-4 bg-red-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none"
      >
        Search
      </button>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;