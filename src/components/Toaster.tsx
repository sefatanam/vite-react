import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

function Toaster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default Toaster;
