import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from 'antd';
import { getAllCustomers } from './redux/action';

function Customer() {
  const[refresh, setRefresh] = useState(false);
    
  const dispatch = useDispatch();
  const customerData = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllCustomers());
    return () => setRefresh(false);
  }, [refresh])


  function handleDelete(id){
    if(confirm('Are you sure???')){
      axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
      toast.success('Your customer deleted!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRefresh(true);
    }
  }
  

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
    },
    {
      title: 'Contact Title',
      dataIndex: 'contactTitle',
    },
    {
      title: 'delete',
      dataIndex: 'delete',
      render: (text, record) => (
        <button onClick={()=> handleDelete(record.id)}>
          {"Delete"}
        </button>
      ),
    },
  ];

  return (
    <>
    <h1>Datas</h1>
      <Table columns={columns} dataSource={customerData} rowKey = {customerData.id}/>
      <ToastContainer />
    </>
  );
}

export default Customer;
