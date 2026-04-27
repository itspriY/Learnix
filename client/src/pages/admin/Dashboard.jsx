/*import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className='grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Card>
            <CardHeader>
                <CardTitle>
                    Total Sales
                </CardTitle>
            </CardHeader>
        </Card>
    </div>
  )
};

export default Dashboard; */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {/* Card */}
        <Card className="shadow-md hover:shadow-xl transition duration-300 rounded-2xl border border-gray-200">
          
          <CardHeader>
            <CardTitle className="text-gray-600 text-sm font-medium">
              Total Sales
            </CardTitle>
          </CardHeader>

         
        </Card>

       

      </div>
    </div>
  )
};

export default Dashboard;
