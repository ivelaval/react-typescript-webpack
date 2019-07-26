import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '@assets/images/react-icon.svg';

const DIV = styled.div`
  font-size: 2rem;
  margin: 0 auto;
  margin-top: 10rem;
  width: 500px;
  text-align: center;

  :hover {
    color: green;
  }
`;

interface IAppProps {
  title: string;
}

export default function App(props: IAppProps) {
  return <DIV>
    <div><img src={logo} alt={'React project'} width={120}/></div>
    <div>{props.title}</div>
  </DIV>;
}
