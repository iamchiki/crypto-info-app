import SideNavbar from './components/SideNavbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetail from './components/CryptoDetail';

function App() {
  return (
    <div className='flex bg-[#f0f2f5]'>
      <div>
        <SideNavbar></SideNavbar>
      </div>

      <div className='ml-[280px] flex-1 '>
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>} />
          <Route path='/home' element={<Home />} />
          <Route
            path='/cryptos'
            element={<CryptoCurrencies coinLimit={100}></CryptoCurrencies>}
          />
          <Route path='/news' element={<News></News>} />
          <Route
            path='/cryptoDtl/:coinId'
            element={<CryptoDetail></CryptoDetail>}
          />
          <Route path='*' element={<Navigate to='/home'></Navigate>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
