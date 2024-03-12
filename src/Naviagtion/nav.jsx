import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {

  return (
    <>
    <div  style={{
        width: '20%',
        height: '99vh',
        borderRight: '2px solid gray',
        top: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <Link to={'/table'} style={{all: 'unset' , cursor: 'pointer'}}>
            <h1>Table</h1>
        </Link>
    </div>
    <Outlet />
   </>
  )
}

export default Nav