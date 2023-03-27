import { FC } from 'react';
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
  const {id, name, email, phoneNumber, city, state, offices, rating, isAdmin } = props;

  return (<div>
    <div>{id}</div>
    <div>{name}</div>
  </div>)
}

export default CompanyCard;