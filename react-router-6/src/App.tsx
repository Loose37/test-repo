import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import GamePage from './Pages/Game Page';

export interface IApplicationProps {};

const Application: React.FunctionComponent<IApplicationProps> = props => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='Game Page'>
        <Route index element={<GamePage />} />
        <Route path=':number' element={<GamePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default Application