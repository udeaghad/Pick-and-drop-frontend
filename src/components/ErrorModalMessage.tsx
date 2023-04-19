import { FC } from 'react';
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { IErrorMsgProps } from '../interfaces/componentInterface';

const ErrorModalMessage: FC<IErrorMsgProps> = (props) => {
  const { errorMsg } = props;
  return (
    <div className="sm:flex sm:items-start">
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationTriangleIcon className="h-6 w-6 text-green-700" aria-hidden="true" />
      </div>               
                    
      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
          Error!
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {errorMsg}
          </p>
        </div>
      </div>
                    
    </div>
  )
}

export default ErrorModalMessage;