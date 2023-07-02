import {useRef} from 'react'

const Login = () => {
const usernameref = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("userid",usernameref.current.value)
    usernameref.current.value = ""
  }

  return (
    <div className="login__contianer">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username"> Provide a username</label>
        <input type = "text" name="username" id="username" required ref={usernameref}/>
        <button>Sign in  </button>
      </form>
    </div> 
  )
}

export default Login