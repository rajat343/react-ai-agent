import React, { useState } from 'react';
import {
  Box,
  Tabs,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@react-agent/shadcn-ui';
import { Recharts } from '@react-agent/shadcn-ui';
import Header from './Header';
import SubHeader from './SubHeader';
import TabNav from './TabNav';
import SmallCardsContainer from './SmallCardsContainer';
import BigCardsContainer from './BigCardsContainer';

export interface AnalyticsDashboardPageProps {}

const AnalyticsDashboardPage = () => {
  const [selectedReport, setSelectedReport] = useState('sales');

  // Analytics data
  const analyticsData = [
    { name: 'Jan', users: 4000, revenue: 2400, subscriptions: 1800 },
    { name: 'Feb', users: 3000, revenue: 1398, subscriptions: 2210 },
    { name: 'Mar', users: 2000, revenue: 9800, subscriptions: 2290 },
    { name: 'Apr', users: 2780, revenue: 3908, subscriptions: 2000 },
    { name: 'May', users: 1890, revenue: 4800, subscriptions: 2181 },
    { name: 'Jun', users: 2390, revenue: 3800, subscriptions: 2500 },
  ];

  // Sales Report Data
  const salesReportData = [
    { month: 'Jan', sales: 2400, returns: 400, netSales: 2000 },
    { month: 'Feb', sales: 1398, returns: 300, netSales: 1098 },
    { month: 'Mar', sales: 9800, returns: 800, netSales: 9000 },
    { month: 'Apr', sales: 3908, returns: 400, netSales: 3508 },
    { month: 'May', sales: 4800, returns: 500, netSales: 4300 },
    { month: 'Jun', sales: 3800, returns: 300, netSales: 3500 },
  ];

  // Finance Report Data
  const financeReportData = [
    { month: 'Jan', revenue: 2400, expenses: 1800, profit: 600 },
    { month: 'Feb', revenue: 1398, expenses: 1200, profit: 198 },
    { month: 'Mar', revenue: 9800, expenses: 8000, profit: 1800 },
    { month: 'Apr', revenue: 3908, expenses: 3000, profit: 908 },
    { month: 'May', revenue: 4800, expenses: 4000, profit: 800 },
    { month: 'Jun', revenue: 3800, expenses: 3200, profit: 600 },
  ];

  const handleReportChange = (value: string) => {
    setSelectedReport(value);
  };

  return (
    <Box className="hidden flex-col md:flex">
      <Header />
      <Box id="dashboard-content" className="flex-1 space-y-4 p-8 pt-6">
        <SubHeader />
        <Tabs defaultValue="overview" className="space-y-4">
          <TabNav />
          <TabsContent value="overview" className="space-y-4">
            <SmallCardsContainer />
            <BigCardsContainer />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <Recharts.ResponsiveContainer width="100%" height={300}>
                    <Recharts.LineChart data={analyticsData}>
                      <Recharts.XAxis dataKey="name" />
                      <Recharts.YAxis />
                      <Recharts.Tooltip />
                      <Recharts.Line type="monotone" dataKey="users" stroke="#8884d8" />
                    </Recharts.LineChart>
                  </Recharts.ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue vs Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Recharts.ResponsiveContainer width="100%" height={300}>
                    <Recharts.BarChart data={analyticsData}>
                      <Recharts.XAxis dataKey="name" />
                      <Recharts.YAxis />
                      <Recharts.Tooltip />
                      <Recharts.Bar dataKey="revenue" fill="#82ca9d" />
                      <Recharts.Bar dataKey="subscriptions" fill="#8884d8" />
                    </Recharts.BarChart>
                  </Recharts.ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <Select value={selectedReport} onValueChange={handleReportChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Report</SelectItem>
                  <SelectItem value="finance">Finance Report</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="ml-4">
                Download Report
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <Recharts.ResponsiveContainer width="100%" height={300}>
                    <Recharts.ComposedChart data={salesReportData}>
                      <Recharts.XAxis dataKey="month" />
                      <Recharts.YAxis />
                      <Recharts.Tooltip />
                      <Recharts.Bar dataKey="sales" fill="#8884d8" name="Total Sales" />
                      <Recharts.Bar dataKey="returns" fill="#ff7300" name="Returns" />
                      <Recharts.Line type="monotone" dataKey="netSales" stroke="#82ca9d" name="Net Sales" />
                    </Recharts.ComposedChart>
                  </Recharts.ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Financial Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <Recharts.ResponsiveContainer width="100%" height={300}>
                    <Recharts.ComposedChart data={financeReportData}>
                      <Recharts.XAxis dataKey="month" />
                      <Recharts.YAxis />
                      <Recharts.Tooltip />
                      <Recharts.Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                      <Recharts.Bar dataKey="expenses" fill="#ff7300" name="Expenses" />
                      <Recharts.Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
                    </Recharts.ComposedChart>
                  </Recharts.ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Box className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
              <p>System notifications and alerts will be shown here.</p>
            </Box>
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboardPage;
