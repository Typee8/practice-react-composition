import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    updateUsersList = evt => {
      evt.preventDefault();
      const usersList = this.state.usersList.map(item => item);
      const input = evt.currentTarget.querySelector('input');
      usersList.push(input.value);

      this.setState({ usersList: usersList });
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onSubmit={this.updateUsersList}/>
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
