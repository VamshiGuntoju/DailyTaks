import React, {useState} from 'react'
export default function () {
  const [values, updatingValues] = useState({})
  function takingValues(temp) {
    const name = temp.target.name
    const value = temp.target.value

    updatingValues(temp => ({
      ...temp,
      [name]: value,
    }))
  }

  function gettingData() {
    console.log(values)

    if(values.Email==="vamshi@gmail.com" && values.Username==="Vamshi" && values.Password==="vamshi@123")
    {
      alert("LogIn Successful")
    } else if(values.Email==="shiva@gmail.com" && values.Username==="Shiva Kumar" && values.Password==="shiva@123")
    {
      alert("Tutor(Shiva Kumar) LogIn Successful")
    }
    else
    {
      alert("Please Enter the Details Properly")
    }
  }
  return (
    <>
      <div className="result-card">
        <br></br>
        <span>Email : </span>

        {values.Email}
        <br></br>
        <span>Username : </span>

        {values.Username}
        <br></br>
        <span>Password : </span>
        {values.Password}
      </div>
      <div className="card">
        <p className="sign-up-text">Sign up</p>
        <p className="create-an-account">
          Create an account or{' '}
          <a href="http://localhost:8080/" target="_blank">
            Sign in
          </a>
        </p>
        <p className="email-address-text">Email address</p>
        <input
          type="text"
          className="email-address-input"
          name="Email"
          onChange={takingValues}
        />
        <p className="email-address-text">Username</p>
        <input
          type="text"
          className="email-address-input"
          name="Username"
          onChange={takingValues}
        />
        <p className="email-address-text">Password</p>
        <input
          type="password"
          className="email-address-input"
          name="Password"
          onChange={takingValues}
        />{' '}
        <br></br>
        
        <p className="long-text">
          I do not want to receive emails with advertising, news, suggestions or
          marketing promotions
        </p>
        <button className="sign-up-button" onClick={gettingData}>
          Sign up
        </button>
        <p className="bottom-text">
          By signing up to create an account, you are accepting our terms of
          service privacy policy
        </p>
      </div>
    </>
  )
}
