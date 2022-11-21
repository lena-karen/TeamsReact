import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className = {s.nav}>
        <Link to = '/configurations_page'>Configurations</Link>
        <Link to = '/teams_page'>Teams</Link>
    </nav>
  )
}
