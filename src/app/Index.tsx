import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

const Index = () => {
  return <App title="Hello world!" />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
