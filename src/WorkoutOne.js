import React, { useState } from 'react'

function WorkoutOne() {
  const [users, setUsers] = useState([
    {
      id:1,
      name:'Anandh',
      email:'anand@gmail.com'
    },
    {
      id:2,
      name:'Ajay',
      email:'ajay@gmail.com'
    }
  ])
  const [formData,setFormData] = useState({name:'',email:''});
  const handleInputChange = (event) => {
    const {name , value} = event.target;
    setFormData((prevData)=>({
      ...prevData,
      [name] : value,
    }))
  }
  const addNewUser = () => {
    if (formData.name.trim()==='' || formData.name.trim()===''){
      return;
    }
    const newUser = {
      id : Date.now,
      name: formData.name,
      email : formData.email
    }
    setUsers((prevData)=>[...prevData,newUser]);
    setFormData({name:'',email:''});
  }
  const deleteUser = (userId) => {
    const res = window.confirm('Are you sure want to delete this ?');
    if(res){
      setUsers((prevUsers) => prevUsers.filter((user)=>user.id !== userId));
    }
  }
  return (
    <div>
      <h1>Crud app</h1>
      <div>
        <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleInputChange}
        />
        <input
        type='email'
        name='email'
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleInputChange}
        />
        <button onClick={addNewUser}>Add user</button>
      </div>
      <ul>
      {users.map((item)=>{
        return(
          <li key={item.id}>
            <span>{item.name} ({item.email})</span>
            <button>Edit</button>
            <button onClick={()=>deleteUser(item.id)}>delete</button>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default WorkoutOne