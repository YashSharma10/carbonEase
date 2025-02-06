import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, TrendingUp } from "lucide-react";

const SellerDashboard = () => {
  const overviewData = [
    { title: "Total Credits Sold", value: "2,500", icon: <TrendingUp size={24} /> },
    { title: "Total Earnings", value: "$12,500", icon: <CheckCircle size={24} /> },
    { title: "Pending Transactions", value: "5", icon: <Clock size={24} /> },
  ];

  const recentTransactions = [
    { id: "TXN1234", buyer: "Green Corp", amount: "500", price: "$2,500", status: "Completed" },
    { id: "TXN5678", buyer: "Eco Trust", amount: "300", price: "$1,500", status: "Pending" },
  ];

  const activeListings = [
    { id: "LIST001", credits: "1000", price: "$5,000", status: "Active" },
    { id: "LIST002", credits: "750", price: "$3,750", status: "Active" },
  ];

  // User Profile Data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "/path/to/profile-picture.jpg", // Example path for profile picture
    location: "New York, USA",
    totalCredits: "3,500",
    totalEarnings: "$18,000",
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Column: Overview Cards and Transactions */}
      <div className="col-span-3 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {overviewData.map((item, index) => (
            <Card key={index} className="p-4 flex flex-col items-center">
              {item.icon}
              <CardHeader>
                <CardTitle className="text-center">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold">{item.value}</CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.id}</TableCell>
                    <TableCell>{txn.buyer}</TableCell>
                    <TableCell>{txn.amount} Credits</TableCell>
                    <TableCell>{txn.price}</TableCell>
                    <TableCell>
                      <Badge variant={txn.status === "Completed" ? "success" : "warning"}>
                        {txn.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Active Listings */}
        <Card>
          <CardHeader>
            <CardTitle>Active Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell>{listing.id}</TableCell>
                    <TableCell>{listing.credits}</TableCell>
                    <TableCell>{listing.price}</TableCell>
                    <TableCell>
                      <Badge variant="success">{listing.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Right Column: User Profile */}
      <div className="space-y-6">
        <Card className="flex flex-col items-center p-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
          <CardHeader>
            <CardTitle className="text-center text-xl">{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-gray-600">
              <p>{user.email}</p>
              <p>{user.location}</p>
              <p>Total Credits: {user.totalCredits}</p>
              <p>Total Earnings: {user.totalEarnings}</p>
            </div>
          </CardContent>
          <Button className="mt-4">Edit Profile</Button>
        </Card>
      </div>
    </div>
  );
};

export default SellerDashboard;
