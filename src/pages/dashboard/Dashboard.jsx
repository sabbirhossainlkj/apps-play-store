import { PieChart } from 'lucide-react';
import React from 'react';
import { Legend, Pie } from 'recharts';

const Dashboard = () => {

    const data = [
  { name: 'Install', value: 400, fill: '#0088FE' },
  
  { name: 'Uninstall', value: 200, fill: '#FF8042' },
];
    return (
        <div className='flex justify-center'>
            <h2>Dashboard</h2>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    </PieChart>
    <Legend></Legend>
        </div>
    );
};

export default Dashboard;