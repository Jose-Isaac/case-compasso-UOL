import React from 'react';
import './InputSearch.css';

export const InputSearch = ({ onChange, input }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} className="container-search">
      <input
        className="container-search__input"
        placeholder="Buscar por um usuário"
        value={input}
        onChange={onChange}
      />
    </form>
  );
};
