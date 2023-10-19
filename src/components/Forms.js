import React,{ useState } from 'react'

const Forms = () => {
    const [form,setForm]=useState({username:'',password:'',country:''})
    const submitHandler=(e)=>{
      e.preventDefault();
console.log(form);
    setForm({username:'',password:'',country:''})
    }
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='username'>Username</label>
            <input id='username' value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})}></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input id='password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}></input>
        </div>
        <div>
            <label htmlFor='country'>Nationality</label>
            <select id='country' value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})}>
                <option value=''>Select</option>
                <option value='India'>India</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Sri Lanka'>Sri Lanka</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Forms
