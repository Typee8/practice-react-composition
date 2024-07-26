import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './components/Table';
import data from './data.json';

import "./reset.css";
import "./main.css";

function App()  {
    return <Table data={ data }/>
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
