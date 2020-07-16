import React, { Component } from "react";
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
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.translate} defaultValue={this.state.input} />
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
