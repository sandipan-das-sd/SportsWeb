import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function AdminApp() {
  useEffect(()=>{
    toast.success("Admin panel will be Updating Soon!! Please Wait for Few Days")
    toast.success("Welcome to Debtilok Mukherjee")
  },[])
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default AdminApp
