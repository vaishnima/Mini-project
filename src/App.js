
import './App.css';
import { BrouserRouter, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <>
    <BrouserRouter>
    <Routes>
      <Route path='/*' element={<UserRoutes/>} />
      <Route path='/admin/*' element={<AdminRoutes/>} />
      </Routes>
      </BrouserRouter>
      
    </>
  );
}

export default App;
