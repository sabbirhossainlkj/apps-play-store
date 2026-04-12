import React, { use } from "react";
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import AppCard from "../ui/AppCard";
import { GridLoader } from "react-spinners";
// const appsPromise = fetch('/data.json')
//     .then(res => res.json());

const Trendingapps = () => {
  // const apps = use(appsPromise);
  // console.log(apps)
  const data = useLoaderData();
//   <GridLoader />
   if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Trending Apps</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia
          nemo voluptates. <br /> Quaerat, maxime exercitationem nesciunt quia voluptas
          deleniti voluptate?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5">
        {data.slice(0, 9).map((app) => {
          return (
            <AppCard key={app.id} app={app} />
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <Link to={"/apps"}>
          <button className="btn btn-primary">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Trendingapps;
