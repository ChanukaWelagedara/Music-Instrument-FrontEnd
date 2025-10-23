import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ShopContext } from '../../context/shop-context';
import './shop.css';

export const Shop = () => {
  const [items, setItems] = useState({});
  const { addToCart } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([]);

  const categories = ["Guitar", "Drums", "Electronic Instrument", "Brass Instrument", "Audio Equipment", "String Instruments", "Accessories", "KeyBoard"];

  const [displayedItems, setDisplayedItems] = useState({});
  const [loadingStates, setLoadingStates] = useState({});

  const itemsPerPage = 6;

  const fetchItemsByCategory = async () => {
    try {
      const categorizedItems = {};

      for (const category of categories) {
        setLoadingStates((prevState) => ({
          ...prevState,
          [category]: true,
        }));

        const response = await axios.get(`http://localhost:5555/instruments/category/${category}`);
        categorizedItems[category] = response.data.data;

        setLoadingStates((prevState) => ({
          ...prevState,
          [category]: false,
        }));
      }

      setItems(categorizedItems);

      const initialDisplayedItems = {};
      for (const category of categories) {
        if (categorizedItems[category]) {
          initialDisplayedItems[category] = categorizedItems[category].slice(0, itemsPerPage);
        }
      }
      setDisplayedItems(initialDisplayedItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchItemsByCategory();
  }, []);

  const handleNext = (category) => {
    if (items[category]) {
      const currentDisplayed = displayedItems[category] || [];
      const startIndex = currentDisplayed.length;
      const endIndex = startIndex + itemsPerPage;
      const newDisplayed = items[category].slice(startIndex, endIndex);
      setDisplayedItems({
        ...displayedItems,
        [category]: newDisplayed,
      });
    }
  };

  const handlePrevious = (category) => {
    if (items[category]) {
      const currentDisplayed = displayedItems[category] || [];
      let endIndex = currentDisplayed.length - 1;

      if (endIndex < 0) {
        endIndex = 0;
      }

      const newDisplayed = items[category].slice(Math.max(0, endIndex - itemsPerPage), endIndex + 1);

      setDisplayedItems({
        ...displayedItems,
        [category]: newDisplayed,
      });
    }
  };

  const handleAddToCart = (item, condition) => {
    // Check if the item is already in the cart
    const itemIndex = cartItems.findIndex((cartItem) => cartItem._id === item._id);

    if (itemIndex !== -1) {
      // If the item is in the cart, update its condition
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].condition = condition;
      setCartItems(updatedCartItems);
    } else {
      
      setCartItems([...cartItems, { ...item, condition }]);
    }

    addToCart(item);
  };

  return (
    <div className="shop">
      {categories.map((category) => (
        <div key={category} className="shop-category">
          <h2 className="shop-category-title">{category}</h2>
          {loadingStates[category] ? (
            <div className="shop-loading">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <div className="shop-carousel-container">
              <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={true}>
                {displayedItems[category] && (
                  <div className="shop-products-grid">
                    {displayedItems[category].map((item) => (
                      <Card key={item._id} className="shop-product-card">
                        {item.condition === "used" && (
                          <div className="shop-product-badge badge-used">
                            Used
                          </div>
                        )}

                        {item.condition === "new" && (
                          <div className="shop-product-badge badge-new">
                            New
                          </div>
                        )}

                        <div className="shop-product-image-wrapper">
                          <CardMedia
                            component="img"
                            alt={item.name}
                            className="shop-product-image"
                            image={`http://localhost:5555${item.image}`}
                          />
                        </div>
                        <CardContent className="shop-product-content">
                          <Typography variant="h6" component="h3" className="shop-product-name">
                            {item.name}
                          </Typography>
                          <Typography variant="body1" className="shop-product-price">
                            ${item.price}
                          </Typography>
                          <Button
                            variant="contained"
                            className="shop-add-to-cart-btn"
                            onClick={() => handleAddToCart(item, item.condition)}
                          >
                            BROWSE
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </Carousel>
              {displayedItems[category] && displayedItems[category].length < items[category].length && (
                <div className="shop-navigation">
                  <Button className="shop-nav-btn" onClick={() => handlePrevious(category)}>
                    Previous
                  </Button>
                  <Button className="shop-nav-btn" onClick={() => handleNext(category)}>
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
