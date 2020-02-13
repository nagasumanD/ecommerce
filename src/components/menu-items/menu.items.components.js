import React from 'react';
import './menu-items.style.scss';

const Menuitems = ({title,imege,size}) => (
    <div className={`${size} menu-item`} >
        <div className='background-imeage' style={{
        backgroundImage:`url(${imege})`}} />
        <div className="content">
            <h1 className="title">
              {title}
            </h1>   
            <span className="subtitle">
            shop now
            </span>
        </div>
    </div>

);

export default Menuitems;