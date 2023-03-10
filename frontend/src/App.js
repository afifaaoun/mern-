import './App.css';
import { Route,Routes } from 'react-router-dom';
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import UserProfile from "./pages/UserDashboard/User"
import Home from './pages/Home';
import BookPdf from './pages/BokkPdf';
import Admin from './pages/AdminDashboard/Admin';
import AdminRoute from './privateRoutes/AdminRoute';
import UserRoute from './privateRoutes/UserRoute';
import Blog from './pages/Blog';
import LogoutUser from './pages/UserDashboard/LogoutUser';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/book/pdf/:id" element={<BookPdf/>} />
      <Route path="/blogs/:id" element={<Blog/>} />
      {/*admin private route */}
      <Route element={<AdminRoute/>}>
      <Route path='/admin' element={<Admin/>}/>
      </Route>
     {/*user private route */}
     <Route element={<UserRoute/>}>
      <Route path='/user' element={<UserProfile/>}/>
      <Route path='/' element={<Home/>}/>

     </Route>

     

   
        {/* <Route index element={<DashboardA/>} /> */}



        {/* <Route index element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="product" element={<OurStore/>} />
        <Route path="product/:id" element={<SingleProduct/>} />
        <Route path="blogs" element={<Blog/>} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="compare-product" element={<CompareProduct />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="reset-password" element={<Resetpassword />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="refund-policy" element={<RefundPloicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="term-conditions" element={<TermAndContions />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
