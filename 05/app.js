import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    updateContent = evt => {
      this.setState({text: evt.target.value});
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } updateContent={this.updateContent}/>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
