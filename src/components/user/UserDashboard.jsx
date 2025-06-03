import React from 'react';

const UserDashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    leadsCount: 12,
    recentActivities: [
      'Added a new lead: Acme Corp.',
      'Updated contact info for Global Inc.',
      'Scheduled a follow-up call with XYZ Ltd.',
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {/* Profile Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      {/* Leads Summary */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Leads Summary</h2>
        <p>You have <span className="font-bold text-blue-600">{user.leadsCount}</span> active leads.</p>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
        <ul className="list-disc pl-6">
          {user.recentActivities.map((activity, index) => (
            <li key={index} className="text-gray-700">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
