import * as React from 'react';
import logo from '@assets/images/react-icon.svg';

export interface IAppProps {
  title: string;
}

export default function App(props: IAppProps) {
  return <h1><img src={logo}  alt={'React project'} width={120}/> {props.title}</h1>;
}
