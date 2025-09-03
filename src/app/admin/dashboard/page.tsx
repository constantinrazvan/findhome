"use client";

import Link from "next/link";
import { Users, BarChart2, MessageCircle, Home } from "lucide-react";

const Dashboard = () => {
  const paths = [
    { icon: <Users size={32} />, title: "Owners", path: "/admin/dashboard/owners" },
    { icon: <BarChart2 size={32} />, title: "Statistics", path: "/admin/dashboard/statistics" },
    { icon: <MessageCircle size={32} />, title: "Messages", path: "/admin/dashboard/messages" },
    { icon: <Home size={32} />, title: "Properties", path: "/admin/dashboard/properties" },
  ];

  return (
    <div className="bg-gray-50 h-screen w-screen flex flex-col items-center overflow-y-auto sm:overflow-hidden">
      <div className="w-full max-w-7xl px-4 pt-8 flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-emerald-500">Dashboard</h1>
          <p className="text-2xl text-gray-700">
            What would you like to do today, Admin? 👋
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((item) => (
            <Link key={item.path} href={item.path}>
              <div className="cursor-pointer border rounded-2xl p-6 flex flex-col items-center justify-center
                              bg-white shadow-md group
                              hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out
                              hover:bg-emerald-500 hover:text-white">
                <div className="mb-4 text-4xl transition-colors duration-500 ease-in-out group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;