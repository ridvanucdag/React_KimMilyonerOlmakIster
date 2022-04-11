import React, { useRef } from 'react'

function Login({ setUsername }) {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }
    return (
        <div className='login'>
            <input type="text" placeholder='Yarışmaya başlamak için Adınızı Giriniz' className='startInput' ref={inputRef} />
            <button className='startButton' onClick={handleClick}>Başla</button>
        </div>
    )
}

export default Login