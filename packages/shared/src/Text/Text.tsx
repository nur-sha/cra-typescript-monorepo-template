import React, { FunctionComponent } from 'react';

type Props = {
  children: React.ReactNode;
};

const Text: FunctionComponent<Props> = ({ children }) => {
  console.log('test swe 2');
  return <h1>{children}</h1>;
};

export default Text;
