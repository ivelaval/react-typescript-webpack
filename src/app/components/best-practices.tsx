import React, { Component } from 'react';

interface IUserIndexedDictionary {
  [id: string]: User;
}

interface User {
  email: string;
}

type State = { count?: number } & typeof initialState;
type Props = { title?: string } & typeof defaultProps;

const initialState = Object.freeze({ count: 0});
const defaultProps = Object.freeze({ title: 'Ivan Avila'});
const dictionary: IUserIndexedDictionary = {
  '2152fsd34': {
    email: 'ivelaval@gmail.com',
  },
  'dfa4524fsf': {
    email: 'ivelaval@hotmail.com',
  }
};

class BestPractices extends Component<Props, State> {
  static readonly defaultProps = defaultProps;
  readonly state = initialState;
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
