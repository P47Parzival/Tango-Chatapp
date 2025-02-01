import React from 'react';
import Lptop from './Lptop';
import Leftbottom from './Leftbottom';

const Leftpart = ({ selectedUser }) => {
    return (
        <div>
            <Lptop selectedUser={selectedUser} />
            <Leftbottom />
        </div>
    );
};

export default Leftpart;
