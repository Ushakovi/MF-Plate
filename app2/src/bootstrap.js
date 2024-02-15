import React, { version as ReactVersion } from 'react';
import ReactDOM from 'react-dom';
import { version as SCVersion } from 'styled-components';

function App() {
    return (
        <h1>
            MF1 React: {ReactVersion} SC: {SCVersion}
        </h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
