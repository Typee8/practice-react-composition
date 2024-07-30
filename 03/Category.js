import React from 'react';

function Category (props) {
    const { children } = props;

    return (
      <section className="category">
        <h2 className="category__header">Category:</h2>
        {children}
      </section>
    );
}

export default Category;