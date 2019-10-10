import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '@assets/images/react-icon.svg';
import { InputElement } from './Example';

const DIV = styled.div`
  font-size: 2rem;
  margin: 0 auto;
  margin-top: 10rem;
  width: 500px;
  text-align: center;
  :hover {
    color: red;
  }
`;

interface IAppProps {
  title: string;
}

export const App = ({ title }: IAppProps) => {
  return <DIV>
    <div><img src={logo} alt={'React project'} width={120}/></div>
    <div>{title}</div>
    <InputElement />
  </DIV>;
}
