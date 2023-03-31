import React from 'react';
import LinkTag from './LinkTag';
import ScriptTag from './ScriptTag';

const Page = ({ state, module, children }) => {
  const serializedProps = JSON.stringify(state).replace(/</g, '\\u003c');
  return (
    <>
      <LinkTag href={`/static/${module}.bundle.css`} />
      <ScriptTag>
        {`
          window.__INITIAL_PROPS__ = ${serializedProps};
        `}
      </ScriptTag>
      <ScriptTag src={`/static/${module}.bundle.js`} async defer/>
      {children}
    </>
  )
};

export default Page;