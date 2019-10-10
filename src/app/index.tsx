import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@components/App';
import project from '@core/settings/project.json'
import '@assets/sass/style.scss';

const Index = () => {
  return <App title={project.title} />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
