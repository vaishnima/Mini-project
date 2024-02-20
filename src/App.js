
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';



function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouter/>}/>
        <Route path='/admin/*' element={<AdminRouter/>}/>
        </Routes></BrowserRouter>
     </div>
  );
}

export default App;
