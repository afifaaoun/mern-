import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function BookCard({element}) {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      <Card className='cardbook' style={{ backgroundColor:'#eee',width: '15rem',height: '28rem',display:'flex',marginBottom:'30px',
}} >
        <Card.Img style={{ height: '16rem',cursor:'pointer' }}variant="top" src={`/Public/books/${element.bookImage}`} onClick={()=>navigate(`/book/pdf/${element._id}`)}/>
        <Card.Body>
          <Card.Title style={{ display:'flex', justifyContent:'center',textAlign:'center'}}>{element.bookName}</Card.Title>
          {/* <Card.Text>
          {element.bookDescription}
          </Card.Text> */}
          <Box sx={{'& > legend': { mt: 2 },display:'flex', justifyContent:'center'}}>
            <Rating name="read-only" value={element.totalrating} readOnly />
          </Box>
          <Card.Text style={{  display:'flex', justifyContent:'center'}}>
          {element.bookPrice } TND
          </Card.Text>
          <Card.Text style={{ display:'flex', justifyContent:'center' }}> 
          </Card.Text>
          <Box style={{ display:'flex', justifyContent:'center' }}>
            <Tooltip title="add to cart">
              <div>
                <AddShoppingCartIcon onClick={handleClickOpen}/>
                <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            Sorry :( you cannot add to cart or add to wishList if you haven't an account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>navigate('/login')}>
            SignIn
          </Button>
          <Button onClick={()=>navigate('/register')} autoFocus>
            SignUp
          </Button>
        </DialogActions>
                </Dialog>
              </div>              
            </Tooltip>
            <Tooltip title="add to wishlist">
              <div>
                <FavoriteBorderIcon onClick={handleClickOpen}/>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
        <DialogContent>
          <DialogContentText>
            Sorry :( you cannot add to cart or add to wishList if you haven't an account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>navigate('/login')}>
            SignIn
          </Button>
          <Button onClick={()=>navigate('/register')} autoFocus>
            SignUp
          </Button>
        </DialogActions>
                </Dialog>
              </div>              
            </Tooltip>
          </Box>
        </Card.Body>
      </Card>
    </div>
  );
  
}

export default BookCard;