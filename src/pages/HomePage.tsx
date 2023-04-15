import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/storeHook';
import { getAllCompanies } from '../features/company/companySlice';
import CompanyCard from '../components/CompanyCard';


const HomePage = () => {
  const { companies } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  },[dispatch])
  
  return (
    
      <div>        
       {companies.data?.map(company => {
        const { _id, name, email, phoneNumber, city, state, offices, rating, isAdmin} = company
        return (

          <CompanyCard 
           key={_id}
           id={_id} 
           name={name} 
           email={email} 
           phoneNumber={phoneNumber} 
           city={city}
           state={state}
           offices={offices}
           rating={rating}
           isAdmin={isAdmin}
           />
        )
      }) }

      </div>
  );
}

export default HomePage;