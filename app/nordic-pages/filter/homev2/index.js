import React, { useState } from 'react';
import axios from 'axios';

const Home = (props) => {
  const { name, email, site, title } = props;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={`card ${theme}`}>
      <div className="card-header">
        <h2>{name}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div className="card-body">
        <p>Title: {title}</p>
        <p>Email: {email}</p>
        <p>Site: {site}</p>
      </div>
    </div>
  );
};

Home.defaultProps = {
  name: 'John',
};

export const getServerSideProps = async (req, res) => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const { data: { title } } = response;

    return {
      title: title,
      name: 'Hernan Correa',
      email: 'hernancorrea.com',
      site: 'CO',
    };
  }catch (err) {
    console.log(err)
  }
};

export default Home;