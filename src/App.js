import './App.css';
import './Responsive.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
    <Header />
    <Main />
    <Footer />
    <ToastContainer />
    </Router>
  );
}

export default App;
