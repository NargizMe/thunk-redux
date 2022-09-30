import React from 'react';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {reducerCustomer} from './redux/reducer';
import Customer from './Customer';
import AddCustomer from './AddCustomer';
import { Routes, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import thunk from 'redux-thunk';

const storeCustomer = createStore(reducerCustomer, applyMiddleware(thunk));


function App() {
  const navigate = useNavigate();
  
  const items1 = [
  {
    key: 'Home',
    label: `Home`,
    onClick: () => navigate("/")
  },
  {
    key: 'addCustomer',
    label: `Add Customer`,
    onClick: () => navigate("/addCustomer")
  }];
  
  return (
    <Provider store = {storeCustomer}>
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      <Routes>
        <Route path='/' element={<Customer/>} />
        <Route path='/addCustomer' element={<AddCustomer/>} />
      </Routes>
    </Provider>
  );
}

export default App;
