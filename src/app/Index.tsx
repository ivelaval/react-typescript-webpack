import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@app/components/App';
import '@app/assets/sass/style.scss';

const Index = () => {
  return <App title='React typescript starter kit!' />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
