import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = React.lazy(() => import('app2/Counter'));

function App() {
    const [count, setCount] = useState(0);
    const [load, setLoad] = useState(false);

    const handleClick = () => {
        setLoad(true);
    };

    return (
        <>
            <h1 onClick={handleClick}>Hello from React component</h1>

            <React.Suspense fallback='Loading Counter...'>
                {load && (
                    <Counter
                        count={count}
                        onIncrement={() => setCount(count + 1)}
                        onDecrement={() => setCount(count - 1)}
                    />
                )}
            </React.Suspense>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
