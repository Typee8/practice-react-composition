import React from "react";
import { v4 as uuidv4 } from "uuid";

class File extends React.Component {
  addTextFilesDataToState = async (evt) => {
    const filesList = Array.from(evt.target.files);
    const newFilesList = await this.createDataListFromTextFiles(filesList);

    const { filesListToState } = this.props;

    filesListToState(newFilesList);
  };

  async createDataListFromTextFiles(array) {
    const newFilesList = array.map(async (item) => {
      const text = await this.readFileAsText(item);

      const newObject = {
        id: uuidv4(),
        name: item.name,
        size: item.size,
        content: text,
      };

      return newObject;
    });

    const result = await Promise.all(newFilesList);

    return result;
  }

  readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        resolve(event.target.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsText(file);
    });
  }

  render() {
    return (
      <input onChange={this.addTextFilesDataToState} type="file" multiple />
    );
  }
}

export default File;
