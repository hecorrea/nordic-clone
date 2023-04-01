import React, { useState } from 'react';
import Page from '../../core/Page';
import { MODULE } from '../../helper/constans';
import '../styles.scss';

const Home = (props) => {
  const { name, email, site } = props;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Page 
      state={props}
      module={MODULE.HOME}
    >
      <div className={`card ${theme}`}>
        <div className="card-header">
          <h2>{name}</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <div className="card-body">
          <p>Email: {email}</p>
          <p>Site: {site}</p>
        </div>
      </div>
    </Page>
  );
};

Home.defaultProps = {
  name: 'John',
};

export default Home;