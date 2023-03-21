import { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import { useAppDispatch, useAppSelector } from './hooks/storeHook';
import { getAllCompanies } from './features/company/companySlice';

const App = () => {

  const { darkTheme } = useAppSelector( state => state);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  },[dispatch])
  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <Header />
      </div>
    </div>
  );
}

export default App;
