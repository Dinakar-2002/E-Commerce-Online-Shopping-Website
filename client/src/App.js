
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import Category from './Component/Category.js';  
import Feedback from './Component/Feedback.js';

import Category from './Component/Category.js';
import Payment from './Component/Payment.js';
// import Forgotpass from './Component/Forgotpass.js';
import Otp from './Component/Otp.js';
// import ResetPass from './Component/ResetPass.js';
// import Things from './Component/Things.js';
import SlideImages from './Component/SlideImages.js';

import Footer from './Component/Layout/Footer.js';
import Navbar from './Component/Layout/Navbar.js';
// import RegistrationForm from './Component/RegistrationForm.js';
// import Reg from './Component/Reg.js';
import Product from './Component/Product.js';
// import Reg from './Component/Reg.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Login from './Component/Login.js';
import FeedbackView from './Component/FeedbackView.js';
import CategoryView from './Component/CategoryView.js';
import ProductView from './Component/ProductView.js';
import PaymentView from './Component/PaymentView.js';
import Reg from './Component/Reg.js';
import RegView from './Component/RegView.js';
import LoginForm from './Component/LoginForm.js';
import Userhome from './Component/UserHome.js';
import AdminHome from './Component/AdminHome.js';
import Forgotpass from './Component/Forgotpass.js';
import ResetPass from './Component/ResetPass.js';
import Qty from './Component/Qty.js';
import CartView from './Component/CartView.js';
import OrderView from './Component/OrderView.js';
import PaybillNext from './Component/PaybillNext.js';
import PayBill from './Component/PayBill.js';
import CustomerOrder from './Component/CustomerOrder.js';
import TodaysOrder from './Component/TodaysOrder.js';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
       <Switch>
        <Route exact path="/" component={SlideImages}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/fed" component={Feedback}></Route>
        <Route exact path="/otp" component={Otp}></Route>
        <Route exact path="/fview" component={FeedbackView}></Route>
        <Route exact path="/cat" component={Category}></Route>
        <Route exact path="/cview" component={CategoryView}></Route>
        <Route exact path="/pro" component={Product}></Route>
        <Route exact path="/pview" component={ProductView}></Route>
        <Route exact path="/pay" component={Payment}></Route>
        <Route exact path="/payview" component={PaymentView}></Route>
        <Route exact path="/reg" component={Reg}></Route>
        <Route exact path="/rView" component={RegView}></Route>
        <Route exact path="/log" component={LoginForm}></Route>
        <Route exact path="/uhome" component={Userhome}></Route>
        <Route exact path="/ahome" component={AdminHome}></Route>
        <Route exact path="/fpass" component={Forgotpass}></Route>
        <Route exact path="/rpass" component={ResetPass}></Route>
        <Route exact path="/qty/:id/" component={Qty}></Route>
        <Route exact path="/mycart/" component={CartView}></Route>
        <Route exact path="/myorder" component={OrderView}></Route>
        <Route exact path="/paybill_next/:price/" component={PaybillNext}></Route>
        <Route exact path="/paybill/:id/:price/" component={PayBill}></Route>
        <Route exact path="/custord" component={CustomerOrder}></Route>
        <Route exact path="/tdod" component={TodaysOrder}></Route>
    
       </Switch>
        <Footer></Footer>  
         </div>
     </Router>
  );
}

export default App;