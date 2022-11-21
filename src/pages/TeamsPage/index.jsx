import React, {useContext} from 'react'
import User from '../../components/User'
import { Context } from '../../context'
import s from './index.module.css'
export default function TeamsPage() {
  const {users} = useContext(Context)

  return (
    <div className = {s.container} >
      {
        users.length 
        ? users.map(el => <User key={el.id} {...el}/>) 
        : <p>There is no users</p>
      }
    </div>
  )
}
