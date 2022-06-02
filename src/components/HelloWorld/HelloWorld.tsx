import React from 'react';

export interface HelloWorldInterface {}

const HelloWorld = (props: HelloWorldInterface) => {
  const {} = props;
  return (
    <div data-testid="HelloWorld" className="bg-lime-400">
      HelloWorld
    </div>
  );
};

export default HelloWorld;
