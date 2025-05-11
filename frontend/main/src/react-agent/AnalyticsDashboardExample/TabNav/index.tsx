import React from 'react';
import { TabsTrigger, TabsList } from '@react-agent/shadcn-ui';

export interface TabNavProps {}

const TabNav: React.FC<TabNavProps> = ({}) => {
  return (
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
  );
};

export default TabNav;
