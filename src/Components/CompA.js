import React from 'react'

const CompA = (props) => {
  return (
    <div>
      CompA
      <div>{props.children}</div>
    </div>
  );
}

export default CompA;