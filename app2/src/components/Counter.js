import React, { useState, version as ReactVersion } from 'react';
import { version as SCVersion } from 'styled-components';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>
                MF1 React: {ReactVersion} SC: {SCVersion}
            </p>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
}

export default Counter;
