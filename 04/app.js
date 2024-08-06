import React from "react";
import { createRoot } from "react-dom/client";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  filesListToState(array) {
    this.setState({ filesList: array });
  }

  render() {
    const listOfFiles = this.state.filesList.map((file) => {
      return (
        <li key={file.id}>
          <h2>Nazwa: {file.name}</h2>
          <span>Rozmiar: {file.size}</span>
          <p>{file.content}</p>
        </li>
      );
    });

    return (
      <section>
        <File filesListToState={this.filesListToState.bind(this)} />
        <List>
          {listOfFiles}
        </List>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
