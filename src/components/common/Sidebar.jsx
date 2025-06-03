import React from 'react';
import { Home, Users, Activity, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-blue-800 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">CRM Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <a href="/dashboard" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <Home size={20} /> Dashboard
        </a>
        <a href="/leads" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <Users size={20} /> My Leads
        </a>
        <a href="/activity" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded">
          <Activity size={20} /> Activity
        </a>
        <a href="/logout" className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded mt-auto">
          <LogOut size={20} /> Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
