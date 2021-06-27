import React, { useEffect, useState } from 'react';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import UserCard from '../../components/UserCard/UserCard';
import { getUserInfo } from '../../services/getUserInfo';
import './HomePage.css';
export default function HomePage() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (input !== '') {
      getUserInfo(input).then((value) => {
        setUser(value);
      });
    }
  }, [input]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container-home">
      <InputSearch onChange={onInputChange} input={input} />
      <UserCard user={user} />
    </div>
  );
}
