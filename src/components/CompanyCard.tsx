import { FC } from 'react';
import {BsTelephonePlusFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import { ICompanyProps } from '../interfaces/componentInterface';


const CompanyCard: FC<ICompanyProps> = (props) => {
  const {name, city, state, offices, rating, phoneNumber } = props;

  return (
    <div className="mb-4 w-[70%] bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-white-200 hover:-translate-y-4 duration-200 hover:animate-pulse">
      <div className="py-5">
        <h1 className="text-center text-xl" data-testid="company-name"> 
          {name.toUpperCase()}
        </h1>
      </div>
      
      <div>
        <img src="charlesdeluvio-pOUA8Xay514-unsplash.jpg" alt={`img-${name}`} className="aspect-[6/2] object-cover" data-testid="company-logo"/>
      </div>

      <div className='py-2 border-b-2 border-gray-900 dark:border-white'>
        <h2 className="text-center text-lg font-bold" data-testid="company-location">{city}, {state}</h2>
      </div>

      <div>
        <h3 className="py-2 text-center text-lg font-medium" data-testid="selection-heading">Select a pick-up branch</h3>
      </div>

      <ul className='p-4 m-2 h-32 grid grid-cols-2 gap-2 bg-gray-800 rounded-lg text-white list-none' data-testid="office-locations">
        {offices.map(office => (          
            <li key={office._id} className='mb-2'>
              <NavLink
              to='#!'
              className=" flex hover:text-violet-400 active:text-violet-600">
                <MdLocationOn />
                <span>
                  {office.location}
                </span>
              </NavLink>
            </li>          
        ))}
      </ul>

      <div className="flex justify-center align-center gap-5" data-testid="company-phone">
        <BsTelephonePlusFill />
        <span>{phoneNumber}</span>
      </div>

      <div className="m-5" data-testid="company-rating">
        <span>Rating: {rating}</span>
      </div>
    </div>)
}

export default CompanyCard;