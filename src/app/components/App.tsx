import React from 'react';
import { InputElement } from './Example';

export interface IAppProps {
  title: string;
}

export const App = ({ title }: IAppProps) => {
  return (
    <div>
      {title}<br />
      <InputElement />
    </div>
  );
}
