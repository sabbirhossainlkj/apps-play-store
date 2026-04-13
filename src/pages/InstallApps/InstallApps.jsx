import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps);

  const handleUnistall = (app) => {
    const remainingApps = installedApps.filter(item => item.id !== app.id);
    setInstalledApps(remainingApps)
        toast.error(`${app.title} uninstalled successfully!`);
    
  }

  return (
    <div className="w-10/12 mx-auto space-y-3">
      <h1>Install Apps Page</h1>
      {installedApps.length == 0 ? <p className="font-bold text-3xl text-center">No apps installed.</p> : installedApps.map((app, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center shadow-2xl gap-4 border p-4 rounded-2xl bg-emerald-200"
          >
            <div className="flex items-center gap-3">
            <img className="h-[80px] rounded-2xl" src={app.image} alt={app.name} />
            <h1 className="font-bold text-2xl">{app.title}</h1>
            </div>
            <button onClick={() => handleUnistall(app)} className="text-xl btn">Uninstall</button>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
