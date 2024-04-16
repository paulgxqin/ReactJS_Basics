import React from 'react';
import ChildComponent from './ChildComponent'; // Make sure the path is correct

function ParentComponent() {
    const message = "Hello from Parent!";

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={message} />
        </div>
    );
}

export default ParentComponent;
