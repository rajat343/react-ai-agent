import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@react-agent/shadcn-ui';

export interface RecentSalesCardProps {}

const RecentSalesCard: React.FC<RecentSalesCardProps> = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Box className="space-y-8">
          <Box className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <Box className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Ritika Khandelwal</p>
              <p className="text-sm text-muted-foreground">ritikasachin.khandelwal@sjsu.edu</p>
            </Box>
            <Box className="ml-auto font-medium">+$1,999.00</Box>
          </Box>
          <Box className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <Box className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Rajat Mishra</p>
              <p className="text-sm text-muted-foreground">rajat.mishra@sjsu.edu</p>
            </Box>
            <Box className="ml-auto font-medium">+$39.00</Box>
          </Box>
          <Box className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/03.png" alt="Avatar" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <Box className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Kunal Goel</p>
              <p className="text-sm text-muted-foreground">kunalrajesh.goel@sjsu.edu</p>
            </Box>
            <Box className="ml-auto font-medium">+$299.00</Box>
          </Box>
          <Box className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/04.png" alt="Avatar" />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <Box className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Chandrasekar Vuppalapati</p>
              <p className="text-sm text-muted-foreground">chandrasekar.vuppalapati@sjsu.edu</p>
            </Box>
            <Box className="ml-auto font-medium">+$99.00</Box>
          </Box>
          <Box className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/05.png" alt="Avatar" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <Box className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Adithya Thirumalai</p>
              <p className="text-sm text-muted-foreground">adithyathirumalai@sjsu.edu</p>
            </Box>
            <Box className="ml-auto font-medium">+$39.00</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
