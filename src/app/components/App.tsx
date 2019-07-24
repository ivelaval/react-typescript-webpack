import * as React from 'react';

export interface IAppProps {
  title: string;
}

export default function App(props: IAppProps) {
  return <h1>{props.title}</h1>;
}
