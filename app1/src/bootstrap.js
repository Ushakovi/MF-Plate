import React, { useState, useId, version as ReactVersion } from 'react';
import ReactDOM from 'react-dom';
import { version as SCVersion } from 'styled-components';

const Counter = React.lazy(() => import('app2/Counter'));

function App() {
    const [load, setLoad] = useState(false);
    const id = useId();
    const handleClick = () => {
        setLoad(true);
    };

    return (
        <>
            <h1>
                Shell React: {ReactVersion} SC: {SCVersion}
            </h1>
            <p>{id}</p>
            <button onClick={handleClick}>Load second app</button>
            <React.Suspense fallback='Loading Counter...'>
                {load && <Counter />}
            </React.Suspense>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
