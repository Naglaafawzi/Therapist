import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Homepage from './Pages/homePage';
import FAQPage from './Pages/FAQPage';
import ContactUsHeader from './Components/ContactUsHeader';
import ContactUsForm from './Components/ContactUsForm';
import ContactInfo from './Components/ContactUsInfo';
import ConnectUsPage from './Pages/Contact';

function App() {
  return (
    <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/conntact" element={<ConnectUsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;