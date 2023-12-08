import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

// temporarily use old react 17-style rendering
const root = createRoot(container);
root.render(<App/>);