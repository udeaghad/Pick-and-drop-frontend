import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/storeHook';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RegisterCompany from './pages/RegisterCompany';


const App = () => {

  const { darkTheme } = useAppSelector( state => state);

  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
       <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/Register-Company' element={ <RegisterCompany /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
