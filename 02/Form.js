import React, { createRef } from 'react';

class Form extends React.Component {
  nameInput = createRef();

    render() {
      const { onSubmit } = this.props;

        return (
            <form onSubmit={onSubmit}>
                <input defaultValue={'Write something'} ref={this.nameInput}/><input type="submit" />
            </form>
        )
    }
}

export default Form;