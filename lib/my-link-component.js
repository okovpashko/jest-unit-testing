import React from 'react';

const MyLinkComponent = (props) => {
  return (
    <a href={props.href} target={props.newTab ? '_blank' : '_self'} className="my-link">
      {props.children}
    </a>
  );
};

export default MyLinkComponent;