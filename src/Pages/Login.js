import LoginForm from "../features/LoginForm/LoginForm"
import './Login.scss';

function Login(){
  return (
    <div className='login-page'>
       <div className="left-section "><p className="loginTitle">Welcome to<span className="head-black block">DataLake 3.0</span></p></div>
       <div className="right-section  mt-32"> <LoginForm/></div>
    </div>
)}

export default Login;