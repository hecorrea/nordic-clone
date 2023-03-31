import React from 'react';
import withSideEffect from 'react-side-effect';

const LinkTag = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient,
  handleStateChangeOnServer
)(({ rel = 'stylesheet', href }) => (
  <link rel={rel} href={href} />
));

function reducePropsToState(propsList) {
  return propsList.map(props => props.href);
}

function handleStateChangeOnClient(state) {
  if (state && !document.querySelector(`link[href="${state}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = state;
    document.head.appendChild(link);
  }
}

function handleStateChangeOnServer(state) {
  return state ? `<link rel="stylesheet" href="${state}" />` : '';
}

export default LinkTag;
