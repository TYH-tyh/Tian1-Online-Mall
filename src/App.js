import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Itemshow from './pages/itemshow';
import Cart from './pages/cart';
import Classify from './pages/classify';
import Person from './pages/person';
import Address from './pages/address';
import NewAddress from './pages/address/components/NewAddress';
import EditAddress from './pages/address/components/EditAddress';
import Order from './pages/order';
import TodoOrder from './pages/order/components/TodoOrder';
import FinishOrder from './pages/order/components/FinishOrder';
import CommitOrder from './pages/order/components/CommitOrder';
import Login from './pages/login';
import Userinfo from './pages/userinfo';
import Detail from './pages/detail';
import AddCart from './pages/detail/components/AddCart';
import store from './store';
import Buy from './pages/detail/components/Buy';




class App extends Component {
  render() {
    return (
      <Provider store = {store}>     
     <BrowserRouter>
      <Header />
      <Route path= '/' exact component={Itemshow}></Route>  
      <Route path= '/classify' exact component={Classify}></Route> 
      <Route path= '/cart' exact component={Cart}></Route>
      <Route path= '/detail/commitorder' exact component={CommitOrder}></Route> 
      <Route path= '/detail/addcart' exact component={AddCart}></Route> 
      <Route path= '/detail/buy' exact component={Buy}></Route> 
      <Route path= '/person' exact component={Person}></Route>  
      <Route path= '/order' exact component={Order}></Route>
      <Route path= '/order/todo' exact component={TodoOrder}></Route> 
      <Route path= '/order/finish' exact component={FinishOrder}></Route>   
      <Route path= '/address' exact component={Address}></Route> 
      <Route path= '/address/newaddress' exact component={NewAddress}></Route> 
      <Route path= '/address/editaddress' exact component={EditAddress}></Route> 
      <Route path= '/userinfo' exact component={Userinfo}></Route>
      <Route path= '/login' exact component={Login}></Route>
      <Route path= '/detail' exact component={Detail}></Route>    
     </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
