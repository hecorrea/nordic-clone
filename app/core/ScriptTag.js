import React from 'react';
import withSideEffect from 'react-side-effect';

const ScriptTag = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient,
  handleStateChangeOnServer
)(({ src, children, async = false, defer = false }) => {
  if (src) {
    return <script src={src} async={async} defer={defer} />;
  } else if (children) {
    return <script dangerouslySetInnerHTML={{ __html: children }} />;
  } else {
    return null;
  }
});

function reducePropsToState(propsList) {
  const urls = [];
  let children = null;

  propsList.forEach(props => {
    if (props.children) {
      children = props.children;
    } else if (props.src) {
      urls.push(props.src);
    }
  });

  return {
    urls,
    children,
  };
}

function handleStateChangeOnClient({ urls, children }) {
  if (urls && urls.length > 0) {
    urls.forEach(url => {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    });
  } else if (children) {
    const script = document.createElement('script');
    script.innerHTML = children;
    document.head.appendChild(script);
  }
}

function handleStateChangeOnServer({ urls, children }) {
  let scriptTags = '';

  if (urls && urls.length > 0) {
    urls.forEach(url => {
      scriptTags += `<script src="${url}" async defer></script>`;
    });
  }

  if (children) {
    scriptTags += `<script>${children}</script>`;
  }

  return scriptTags;
}

export default ScriptTag;