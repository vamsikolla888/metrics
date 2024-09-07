import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

/**@PRIMEREACT */
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';

/** @ANTD DESIGNS */
import 'antd/dist/reset.css';


import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/style.css';
import './css/satoshi.css';
import { router } from './router.jsx';
import { store } from './redux/store.js';
import { ToastContainer } from 'react-toastify';
import CommonDialog from './common/dialog/CommonDialog.jsx';
// import CommonToast, { Toast } from './common/toast/CommonToast.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer position='top-right' className="p-0 m-0" theme='' style={{width: "400px", padding: 0}}/>
    </Provider>
  </StrictMode>,
)
