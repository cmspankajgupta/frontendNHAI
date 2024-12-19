import LoginForm from "../features/LoginForm/LoginForm"
import OtpForm from "../features/OtpForm/OtpForm";
import SignUpForm from "../features/SignUpForm/SignUpForm";
import './Login.scss';

function Login(){
  return (
    <div className='login-page'>
       <div className="left-section "><p className="loginTitle">Welcome to<span className="head-black block">DataLake 3.0</span></p></div>
       <div className="right-section  mt-32">
        {/* <LoginForm/> */}
        <OtpForm/>
        {/* <SignUpForm/> */}
       </div>
    </div>
)}

export default Login;