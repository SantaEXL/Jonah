import './resources/theming.scss'

import { Button } from 'react-bootstrap';
import PageLayout from './resources/layouts/PageLayout';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
    <PageLayout>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
    </PageLayout>,
    document.getElementById('root'),
);