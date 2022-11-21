import React, {useContext} from 'react'
import { Context } from '../../context'
import s from './index.module.css'
export default function User({id, name, team}) {
    const {deleteUser} = useContext(Context)
    const deleteCard = () => deleteUser(id)
    
  return (
    <div className = {s.container} onClick = {deleteCard}>
        <p>{name}</p>
        <p>{team}</p>
    </div>
  )
}
