import React, { useState } from 'react';
const Script = require('../core/Script');
import './styles.scss';

const Home = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>123123 webpack-react {name}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
};

Home.defaultProps = {
  name: 'John',
};

export default Home;