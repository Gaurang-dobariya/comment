import React, { useState } from 'react'

const Use_State = () => {

    const [data, setdata] = useState({})

    let handle = (e) => {

        setdata({ ...data, [e.target.name]: e.target.value })

    }

    let Submit = () => {

        console.log(data);

    }

    return (
        <>
            <labe>Name : </labe>
            <input type="text" name='name' onChange={handle}/><br /><br />

            <labe>Email : </labe>
            <input type="text" name='email' onChange={handle}/><br /><br />

            <labe>Password : </labe>
            <input type="text" name='password' onChange={handle}/><br /><br />

            <button onClick={Submit}>Submit</button>
        </>
    )
}

export default Use_State