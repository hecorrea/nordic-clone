import React from 'react';
import LinkTag from './LinkTag';
import ScriptTag from './ScriptTag';

const Page = ({ state, module, children }) => {
  const serializedProps = JSON.stringify(state).replace(/</g, '\\u003c');
  return (
    <>
      <LinkTag href={`/${module}.css.bundle.css`} />
      <ScriptTag>
        {`
          window.__INITIAL_PROPS__ = ${serializedProps};
        `}
      </ScriptTag>
      <ScriptTag src={`/${module}.bundle.js`} async defer/>
      <ScriptTag src={`/vendor.bundle.js`} async defer/>
      {children}
    </>
  )
};

export default Page;