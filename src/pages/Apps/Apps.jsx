import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../componets/shared/ui/AppCard';
import { GridLoader } from 'react-spinners';

const Apps = () => {
     const data =useLoaderData();
      if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader color="#36d7b7" />
      </div>
    );
  }
    return (
        <div className='w-10/12 mx-auto my-14'>
            
            <div className="text-center">
        <h2 className="text-4xl font-bold">All Apps</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia
          nemo voluptates. <br /> Quaerat, maxime exercitationem nesciunt quia voluptas
          deleniti voluptate?
        </p>
      </div>
             <div className="grid grid-cols-3 gap-3 py-5">
        {data.map((app) => {
          return (
            <AppCard key={app.id} app={app} />
          );
        })}
      </div>
        </div>
    );
};

export default Apps;