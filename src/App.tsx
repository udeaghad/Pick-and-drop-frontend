import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/storeHook';
import HomePage from './pages/HomePage';


const App = () => {

  const { darkTheme } = useAppSelector( state => state);

  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <HomePage />

        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
