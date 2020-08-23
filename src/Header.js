import React from 'react';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
                <div className='search__bar'>
                    <SearchIcon />
                    <input
                        placeholder="Search songs, artist"
                        type='text' 
                    />
                </div>
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt='PG' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
