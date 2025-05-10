import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import {initialState,reducer} from './Utility/reducer.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}> 
      <App />
    </DataProvider>
  </StrictMode>
);
