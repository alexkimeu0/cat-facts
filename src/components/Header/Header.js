import React from 'react'
import catIcon from '../../images/CatIcon.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={catIcon} alt="Cat Facts" />
        </div>
    )
}

export default Header
