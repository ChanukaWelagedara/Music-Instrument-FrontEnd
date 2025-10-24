import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [account, setAccount] = useState([]);
  const [items, setItems] = useState([]);
  const categories = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8"];

  useEffect(() => {
    // Check if user details are stored in local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      setAccount([userDetails]);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jwtSecretKey = process.env.JWT_TOKEN_KEY; 
      let id = JSON.parse(localStorage.getItem("userDetails"))._id;
      const response = await axios.get('http://localhost:5555/instruments/all/' + id, {
        headers: {
          Authorization: `Bearer ${jwtSecretKey}`,
        },
      });
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:5555/instruments/${itemId}`);
      console.log(response.data);
      window.alert("Item deleted successfully!");
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
      window.alert('Error deleting item. Please check the console for details.');
    }
  };

  return (
    <div className="account-page">
      <div className="user-info">
        {account.map((user, index) => (
          <Card key={user.email} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }} color="#999" gutterBottom>
                Account Information
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 600, color: '#1a1a1a', marginTop: 1, marginBottom: 1 }}>
                {user.firstName}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', fontSize: 15 }}>
                {user.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Link to="./AddItem" style={{ textDecoration: 'none' }}>
          <button>+ Add New Item</button>
        </Link>
      </div>

      <div className="items-for-sale">
        <h2>My Listed Instruments</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="center">Actions</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item._id}>
                  <TableCell sx={{ fontWeight: 600 }}>{item.name}</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#1a1a1a' }}>${item.price}</TableCell>
                  <TableCell>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '6px', 
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: item.condition === 'new' ? '#e6f7e6' : '#fff3e0',
                      color: item.condition === 'new' ? '#2d7a2d' : '#e67700'
                    }}>
                      {item.condition}
                    </span>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell sx={{ color: '#666' }}>{item.addDate}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:5555${item.image}`}
                      alt={item.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/account/edititem/${item._id}`} style={{ textDecoration: 'none' }}>
                      <button>Edit</button>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Account;
