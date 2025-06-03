import React from 'react';

const StatCard = ({ title, value, icon: Icon, color = 'blue' }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      <div className={`p-3 bg-${color}-100 text-${color}-700 rounded-full`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
