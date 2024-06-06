import React, { useRef } from 'react'

const UseRef = () => {

    let name = useRef()
    let email = useRef()
    let password = useRef()

    const Submit = () => {

        let data = {

            name: name.current.value,
            email: email.current.value,
            password: password.current.value,

        }

        console.log(data);

    }

    return (
        <>

            <labe>Name : </labe>
            <input type="text" ref={name} /><br /><br />

            <labe>Email : </labe>
            <input type="text" ref={email} /><br /><br />

            <labe>Password : </labe>
            <input type="text" ref={password} /><br /><br />

            <button onClick={Submit}>Submit</button>
        </>
    )
}

export default UseRef