import React, { Component } from "react";
import Header from "./components/Header/header";
import Pre from "./components/Pre/pre";
import TextArea from "./components/TextArea/textarea";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "/* Add your JSX Here */",
      output: "",
      err: "",
    };
  }
  translate = (e) => {
    const code = e.target.value;
    const presets = ["es2015", "react"];
    try {
      const output = window.Babel.transform(code, { presets }).code;
      this.setState({ output, err: "" });
    } catch (error) {
      this.setState({ err: error.message });
    }
  };
  render() {
    return (
      <div>
        <Header>{this.state.err}</Header>
        <div className="container">
          <TextArea translate={this.translate} input={this.state.input} />
          <Pre>{this.state.output}</Pre>
        </div>
      </div>
    );
  }
}

export default App;
