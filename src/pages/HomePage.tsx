import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/storeHook';
import { getAllCompanies } from '../features/company/companySlice';
import CompanyCard from '../components/CompanyCard';
import SearchBar from '../components/SearchBar';


const HomePage = () => {
  const { companies } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  },[dispatch])

  const [searchTerm, setSearchTerm] = useState("")

  const searchByCityOrState = companies.data?.filter(company => {
    if (!searchTerm.length) return company;
    return company.city.toLowerCase().includes(searchTerm)|company.state.toLowerCase().includes(searchTerm)
  })
  
  return (
    <>
      <div className='mb-12 flex items-center justify-between'>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>

      <div>        
       {searchByCityOrState &&
       searchByCityOrState.map(company => {
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
    </>
    
  );
}

export default HomePage;