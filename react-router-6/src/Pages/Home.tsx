import React from 'react';
import {Link, useNavigate} from "react-router-dom"

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {

  return (
    <div>
      <p>This is the home page.</p>
      <Link to= "/Game Page"> Start your Game</Link>
      {/* <br />
      <button onClick={() => useNavigate()}></button> */}
    </div>
  );
};

export default HomePage