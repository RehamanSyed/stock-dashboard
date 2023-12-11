import React from "react";
import Card from "../card/Card";
import { mockCompanyProfile } from "../../constant/mock";
import Header from "../shared/Header";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-RethinkSans">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={mockCompanyProfile.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Card>Cart</Card>
      </div>
      <div>
        <Card>Overview</Card>
      </div>
      <div className="xl:row-span-3 row-span-2">
        <Card>Details</Card>
      </div>
    </div>
  );
};

export default Dashboard;
