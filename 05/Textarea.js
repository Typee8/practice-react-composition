import React from 'react';
import { createRef } from 'react';

class Textarea extends React.Component {
  textareaRef = createRef();

getSnapshotBeforeUpdate() {
  const textarea = this.textareaRef.current;
  const textareaHeight = textarea.offsetHeight;

  if(textareaHeight < 100) {
    return true;
  } else {
    return false;
  }
}

componentDidUpdate(prevProps, prevState, snapshot) {
  const textarea = this.textareaRef.current;
  const textareaHeight = textarea.offsetHeight;
  const textareaScrollHeight = textarea.scrollHeight;

  if(textareaHeight < textareaScrollHeight && snapshot === true) {
    console.log(textarea.style.height);
    textarea.style.height = `${textareaScrollHeight}px`;
  }
}


    render() {
      const { content, updateContent } = this.props;

        return <textarea ref={this.textareaRef} value={content} onChange={updateContent}>
        </textarea>
    }
}

export default Textarea;