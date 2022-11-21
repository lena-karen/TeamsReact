import Nav from "../Nav";
import ConfigurationsPage from "../../pages/ConfigurationsPage";
import TeamsPage from "../../pages/TeamsPage";
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import {Context} from '../../context'

function App() {
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  const addTeam = (team_title) => {
    setTeams([...teams, {value: team_title, label: team_title}])
  }
  const addUser = (name_value, team_name) => {
    setUsers([...users, 
      {
        id: Date.now(), 
        name: name_value, 
        team: team_name
      }])
  }
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(el => el.id!=id))
  }
  return (
    <Context.Provider value={{teams, addTeam, users, addUser, deleteUser}}>
      <Nav />
      <Routes>
        <Route path = "/configurations_page" element = {<ConfigurationsPage/>} />
        <Route path = "/teams_page" element = {<TeamsPage />} />
      </Routes>
    </Context.Provider>

  );
}

export default App;
