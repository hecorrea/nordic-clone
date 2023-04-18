import React, { useState } from 'react';

const Home = ({name}) => {
  const [changeValue, setChangeValue] = useState('ON')
  const toogle = () => setChangeValue((prev) => prev === 'ON' ? 'OFF' : 'ON')
  return (
    <>
      <h1>Home2 {name} {changeValue}</h1>
      <button onClick={toogle}>Toogle</button>
    </>
  );
};

export const getServerSideProps = async (req, res) => {
  return {
    name: 'Hernan Correa - CO'
  };
};

// export default About;
export default Home;