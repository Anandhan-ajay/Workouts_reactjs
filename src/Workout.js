import React, { useState } from 'react'

function Workout() {
    // step 1
    const [users,setUsers] = useState([
        {
            id:1,
            name:'Anandhan',
            role:'React js developer'
        },
        {
            id:2,
            name:'Ajay',
            role:'Angular developer'
        }
    ])
    // step 2 
    const [formData,setFormData] = useState({name:'',role:''});
    // step 3
    const handleInputChange = (event) => {
        const {name , value} = event.target;
        setFormData((previousUsersList)=>({
            ...previousUsersList,
            [name] : value,
        }))
    }
    // step 4
    const addUserLists = () =>{
        if (formData.name.trim() === '' || formData.role.trim() === ''){
            return
        }
        const newUser = {
            id:Date.now(),
            name:formData.name,
            role:formData.role
        }
        setUsers((prevUsers)=>[...prevUsers,newUser])
        setFormData({name:'',role:''})
    }
    // step 6
    const handleDelete = (userId) => {
        const deleteThis = window.confirm('Are you sure want to delete this');
        if(deleteThis){
            setUsers((prevUsers) => prevUsers.filter((user)=>user.id !== userId));
        }
    }
  return (
    <div>
        <h1>Users List</h1>
        <div>
            <input 
            type='text'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleInputChange}
            />
            <input 
            type='text'
            name='role'
            placeholder='Enter your role'
            value={formData.role}
            onChange={handleInputChange}
            />
            <button onClick={addUserLists}>Add user</button>
        </div>
        <ul>
            {users.map((item)=>{
                return(
                <li key={item.id}>
                    <span>{item.name} ({item.role})</span>
                    <button>Edit</button>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Workout