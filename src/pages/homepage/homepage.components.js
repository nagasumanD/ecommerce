import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory-menu/directory-menu.components';

const homepage= () => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
};


export default homepage;