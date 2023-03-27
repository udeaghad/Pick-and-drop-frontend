import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/storeHook';
import { getAllCompanies } from '../features/company/companySlice';
import CompanyCard from '../components/CompanyCard';


const HomePage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  },[dispatch])
  
  return (
    
      <div >
        This is home page

        <CompanyCard />
      </div>
  );
}

export default HomePage;