import { ChangeEvent, FormEvent, useState } from "react";
import { LockClosedIcon } from '@heroicons/react/20/solid';

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
            <div className="mb-5">
              <label htmlFor="company-name" className="block text-sm font-medium leading-6">
                Company Name
                <input
                  id="company-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your company name..."
                  onChange={handleChange}                        
                />
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="email Address" className="block text-sm font-medium leading-6">
                Email Address
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your company email..."
                  onChange={handleChange}                      
                />                
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6">
                Phone Number
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your company phone number..."
                  onChange={handleChange}                        
                />                
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="city" className="block text-sm font-medium leading-6">
                City
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="text"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter the city your company is located..."
                  onChange={handleChange}                        
                />                
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="state" className="block text-sm font-medium leading-6">
                State
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="text"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter the state your company is located..." 
                  onChange={handleChange}                       
                />                
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your login password"
                  onChange={handleChange}                        
                />                
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6">
                Confirm Password
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="password"
                  required
                  className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Re-enter your login password" 
                  onChange={handleChange}                       
                />                
              </label>
            </div>
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