import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { ICompanyRegisterInfo } from "../interfaces/pagesInterface";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { postRegisterCompany, registerCompanyAction } from "../features/registerCompany/registerCompanySlice";
import ModalPopup from "../components/ModalPopup";
import { messageAction } from "../features/messages/message";


const RegisterCompany = () => {
  const dispatch = useAppDispatch();
  const { registerCompany, message } = useAppSelector((state) => state )
  
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
    dispatch(postRegisterCompany(companyRegisterInfo))

    const resetForm = e.target as HTMLFormElement
    resetForm.reset()
  }

  useEffect(() => {
    if (registerCompany.data) {
      dispatch(messageAction.getSuccessMsg(registerCompany.data));
      dispatch(registerCompanyAction.resetState())
    } 
    if (registerCompany.error){
      dispatch(messageAction.getErrorMsg("Error occured and your company could not be registered"));
      dispatch(registerCompanyAction.resetState())
    } 
  }, [dispatch, registerCompany])
  
  return (  
    <div>
      { message.msgLoaded && 
        <ModalPopup  />
      }
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
              <SubmitButton buttonText="Register" buttonType="submit" />
            </div>
        </form>
      </div>


    </div>
  )
}

export default RegisterCompany