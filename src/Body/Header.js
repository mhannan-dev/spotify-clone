import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core'
import './Header.css'
import { useDataLayerValue } from '../DataLayer'

function Header() {
  const [{ user }, dispatch] = useDataLayerValue()

  return (
    <div className="header">
        <div className="header__left">
            <SearchIcon/>
            <input placeholder='Search songs, artist etc' type="text"/>
        </div>
        <div className="header__right">
        <Avatar/>
        <h4>Muhammad Hannan</h4>
        </div>
    </div>
  )
}

export default Header