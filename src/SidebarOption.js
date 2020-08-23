import React from 'react';
import './css_files/SidebarOption.css';

function Sidebaroption({title, Icon}) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOptions__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroption
