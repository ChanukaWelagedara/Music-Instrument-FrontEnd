import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bankName, setBankName] = useState('');

  useEffect(() => {
    const fetchItemsInCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/cart/all/${JSON.parse(localStorage.getItem("userDetails"))._id}`
        );
        setItems(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setIsLoading(false);
      }
    };
    fetchItemsInCart();
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [items]);

  const calculateTotalAmount = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    setTotalAmount(total);
  };

  const buy = () => {
    setIsPaymentDialogOpen(true);
  };

  const confirmPayment = async () => {
    try {
      axios.delete(`http://localhost:5555/cart/buy/${JSON.parse(localStorage.getItem("userDetails"))._id}`);
      alert("Payment SUCCESS");
      closePaymentDialog();
      window.location.reload();
    } catch (error) {
      console.error('Error confirming payment:', error);
      closePaymentDialog();
    }
  };

  const cancelOrder = async () => {
    try {
      axios.delete(`http://localhost:5555/cart/buy/${JSON.parse(localStorage.getItem("userDetails"))._id}`);
      alert("Order Canceled");
      window.location.reload();
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  const closePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
    setPaymentMethod('');
    setBankName('');
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {isLoading ? (
          <div className="cart-loading">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <>
            {items.length === 0 ? (
              <div className="cart-empty">
                <Typography variant="h5">Your cart is empty</Typography>
              </div>
            ) : (
              <>
                <TableContainer className="cart-table-container">
                  <Table className="cart-table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="cart-table-header">Product</TableCell>
                        <TableCell className="cart-table-header">Name</TableCell>
                        <TableCell className="cart-table-header">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item._id} className="cart-table-row">
                          <TableCell>
                            <img
                              src={`http://localhost:5555${item.image}`}
                              alt={item.name}
                              className="cart-item-image"
                            />
                          </TableCell>
                          <TableCell className="cart-item-name">{item.name}</TableCell>
                          <TableCell className="cart-item-price">${item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                <div className="cart-summary">
                  <Typography variant="h4" className="cart-total">
                    Total: ${totalAmount}
                  </Typography>
                  <div className="cart-actions">
                    <Button className="cart-btn cart-btn-primary" onClick={buy}>
                      Proceed to Checkout
                    </Button>
                    <Button className="cart-btn cart-btn-danger" onClick={cancelOrder}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        <Dialog open={isPaymentDialogOpen} onClose={closePaymentDialog} className="cart-payment-dialog">
          <DialogTitle className="cart-dialog-title">Payment Information</DialogTitle>
          <DialogContent className="cart-dialog-content">
            <TextField
              label="Payment Method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Bank Name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions className="cart-dialog-actions">
            <Button onClick={closePaymentDialog} className="cart-dialog-btn cart-dialog-btn-cancel">
              Cancel
            </Button>
            <Button onClick={confirmPayment} className="cart-dialog-btn cart-dialog-btn-confirm">
              Confirm Payment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
