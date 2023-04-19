export interface ICompanyProps {
  id: string;
  name: string;
  phoneNumber: string;
  city: string;
  state: string
  offices: {
    _id: string;
    name: string;
    location: string;
  }[];
  rating: number;
  
}

export interface ISuccessMsgProps {
  successMsg: string;
}

export interface IErrorMsgProps {
  errorMsg: string;
}