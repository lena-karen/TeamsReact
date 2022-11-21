import React, {useContext} from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'

export default function AddUserForm() {
    const {teams, addUser} = useContext(Context);
    
    const submit = event => {
        event.preventDefault()
        const {user_name, team_name} = event.target;
        addUser(user_name.value, team_name.value);
        user_name.value = '';
    }
  return (
    <form className = {s.user_form} onSubmit = {submit}>
        <p>Add User</p>
        <input type="text" placeholder = 'Name' name = 'user_name'/>
        <Select className = {s.select_user} options = {teams} name = 'team_name'/>
        <button>Add</button>
    </form>
  )
}
