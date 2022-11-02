import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export interface IGamePageProps {};

const GamePage: React.FunctionComponent<IGamePageProps> = props => {
  const [message, setMessage] = useState("");
  const {number} = useParams();

  useEffect(() =>{
    if (number){
      setMessage("the number is " + number)
    }
    else{
      setMessage("No number was provided")
    }
  },[]);


  return (
    <div>
      <p>this is the Game Page</p>
      <p>{message}</p>
    </div>
    ); 
};

export default GamePage