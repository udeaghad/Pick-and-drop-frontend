import { ChangeEvent, FormEvent, useState } from "react";
import { LockClosedIcon } from '@heroicons/react/20/solid';

import InputField from "../components/InputField";

interface ICompanyRegisterInfo {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  password: string;
  confirmPassword: string;
}

const RegisterCompany = () => {
  const [ companyRegisterInfo, setCompanyRegisterInfo ] = useState<ICompanyRegisterInfo>({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
 
    let value: typeof companyRegisterInfo[keyof typeof companyRegisterInfo] = e.target.value;
    setCompanyRegisterInfo({ ...companyRegisterInfo, [e.target.name]: value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(companyRegisterInfo)
  }
  
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        Register you company
      </h2>

      <div className="ml-[10%] w-[80%] place-content-center">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <InputField 
              id="company-name" 
              name="name" 
              type="name" 
              placeholder="Enter your company name..." 
              label="Company Name" 
              handleChange={handleChange}
            />
            
            <InputField 
              label="Email Address" 
              id="email-address" 
              name="email" 
              type="email" 
              placeholder="Enter your company email..." 
              handleChange={handleChange} 
            />

            <InputField 
              label="Phone Number"
              id="phone-number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your company phone number..."
              handleChange={handleChange}
            />

            <InputField
              label="City"
              id="city"
              name="city"
              type="text"
              placeholder="Enter the city your company is located..."
              handleChange={handleChange}
            />

            <InputField
              label="State"
              id="state"
              name="state"
              type="text"
              placeholder="Enter the state your company is located..."
              handleChange={handleChange}
            />

            <InputField 
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your login password"
              handleChange={handleChange}
            />

            <InputField 
              label="Confirm Password"
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your login password"
              handleChange={handleChange}
            />
                        
          </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
        </form>
      </div>


    </div>
  )
}

export default RegisterCompany