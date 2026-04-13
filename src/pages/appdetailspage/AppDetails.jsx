import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log( id);

  const data = useLoaderData();
  const app = data.find((item) => String(item.id) === id);

  // const [] = useState([]);
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handelInstalledApps = () => {
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div>
      <div className="shadow-2xl p-5 text-center space-y-3">
        <img
          className="mx-auto h-[200px] w-auto]"
          src={app.image}
          alt={app.name}
        />
        <h2>{app.title}</h2>
        <p>develop by: {app.companyName}</p>
        <button
          onClick={handelInstalledApps}
          className="btn bg-taupe-600 text-white"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
