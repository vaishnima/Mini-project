import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
     
     <>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouter />} />
        <Route path='/admin/*' element={<AdminRouter />} />
        </Routes>
        
        <ToastContainer/>  
        </BrowserRouter>
        </>
     
  );
}

export default App;
