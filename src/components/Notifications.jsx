import React, { useState } from 'react';

export default function Notifications() {

    const [count, setCount] = useState(0);
 
    return (
        <div className="Counter">
            <h2>Counter</h2>
    
            <p>You clicked {count} times</p>
    
            <button onClick={() => setCount(count - 1)}> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
  );
}
