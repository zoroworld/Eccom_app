import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Authprovider } from './context/Auth';
import { Searchprovider } from './context/Search';
import { Cartprovider } from './context/Cart';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Authprovider>
    <Searchprovider>
      <Cartprovider>
        <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
        </BrowserRouter>
      </Cartprovider>
    </Searchprovider>
  </Authprovider>
);
