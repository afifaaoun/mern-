import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import RatingBook from './RatingBook';
import {useDispatch, useSelector} from "react-redux";

function BookCardUser({element}) {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(2);
const handleInc=(inc)=>{
inc++
}
  return ( 
    <div>
      <Card className='cardbook' style={{ backgroundColor:'#eee',width: '15rem',height: '28rem',display:'flex',marginBottom:'30px',
}}>
        <Card.Img style={{ height: '16rem',cursor:'pointer' }}variant="top" src={`/Public/books/${element.bookImage}`} />
        <Card.Body>
          <Card.Title style={{ display:'flex', justifyContent:'center',textAlign:'center'}}>{element.bookName}</Card.Title>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {setValue(newValue);}}
      />
    </Box>
          <Card.Text style={{  display:'flex', justifyContent:'center'}}>
          {element.bookPrice } TND
          </Card.Text>
          <Card.Text style={{ display:'flex', justifyContent:'center' }}> 
          </Card.Text>
          <Box style={{ display:'flex', justifyContent:'center' }}>
            <Tooltip title="add to cart">
              <AddShoppingCartIcon />
            </Tooltip>
            <Tooltip title="add to wishlist">
              <FavoriteBorderIcon/> 
            </Tooltip>
          </Box>
          <Box>  
          <button > + </button>
          {element.bookQuantity }
          <button > - </button>
          </Box>
        </Card.Body>
      </Card>
    </div>
  );
}  


export default BookCardUser;