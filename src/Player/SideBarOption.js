import React from 'react'
import './SideBarOption.css'
function SideBarOption({ title, Icon }) {
    return (
        <div className='sideBarOption'>
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* If icon missing  */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption