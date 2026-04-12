import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaDownload } from 'react-icons/fa';

const AppCard = ({ app }) => {
    return (
        <div className="card shadow-2xl border border-gray-400 rounded-2xl">
              <figure>
                <img className="h-[200px]"
                  src={app.image}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
            
                <div className="flex justify-between items-center">
                  <span className="flex gap-2 font-bold items-center"><FaDownload /> {app.downloads}</span>
                  <span className="flex gap-2 font-bold items-center"><CiStar /> {app.ratingAvg}</span>
                </div>
              </div>
            </div>
    );
};

export default AppCard;