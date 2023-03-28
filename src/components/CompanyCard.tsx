import { FC } from 'react';
import {BsTelephonePlusFill } from 'react-icons/bs';

interface ICompanyProps {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string
  offices: {
    _id: string;
    name: string;
    location: string;
  }[];
  rating: number;
  isAdmin: boolean;
  
}

const CompanyCard: FC<ICompanyProps> = (props) => {
  const {name, city, state, offices, rating, phoneNumber } = props;

  return (
    <div className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-red-700 dark:border-white-200 hover:-translate-y-4 duration-200 hover:animate-pulse">
      <div className="py-5">
        <h2 className="text-center font-black text-lg"> 
          {name.toUpperCase()}
        </h2>
      </div>
      
      <div>
        <img src="charlesdeluvio-pOUA8Xay514-unsplash.jpg" alt={`img-${name}`} className="aspect-[6/2] object-cover"/>
      </div>

      <div>
        <span>{city}, {state}</span>
      </div>

      <div>
        <h3>Select a pick-up branch</h3>
      </div>

      <div>
        {offices.map(office => (          
            <div key={office._id}>
              <button>{office.location}</button>
            </div>          
        ))}
      </div>

      <div>
        <BsTelephonePlusFill />
        <span>{phoneNumber}</span>
      </div>

      <div>
        <span>Rating: {rating}</span>
      </div>
    </div>)
}

export default CompanyCard;