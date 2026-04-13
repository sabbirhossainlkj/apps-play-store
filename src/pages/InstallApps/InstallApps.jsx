import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';


const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext)
    console.log(installedApps)
    return (
        <div className='w-10/12 mx-auto space-y-3'>
            <h1>Install Apps Page</h1>
            {
                installedApps.map ((app,index) => {
                    return(
                        <div key ={index} className='flex items-center shadow-2xl gap-4 border p-4 rounded-2xl bg-emerald-200'>
                            <img className='h-[80px]' src={app.image} alt={app.name} />
                            <h1 className='font-bold text-2xl'>{app.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default InstallApps;