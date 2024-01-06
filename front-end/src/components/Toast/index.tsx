import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: 'green',
          },
        },
        error: {
          style: {
            background: 'red',
          },
        },
      }}
    />
  )
}

export default Toast