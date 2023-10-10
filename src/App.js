import './App.css';
import EditUser from './pages/EditUser';
import Routing from './router/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Routing/>
      {/* <EditUser/> */}
    </>
  );
}

export default App;
