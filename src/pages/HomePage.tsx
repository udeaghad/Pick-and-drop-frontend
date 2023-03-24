import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/storeHook';
import { getAllCompanies } from '../features/company/companySlice';
import Header from '../components/Header';

const HomePage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  },[dispatch])
  
  return (
    
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <Header />
      </div>
  );
}

export default HomePage;