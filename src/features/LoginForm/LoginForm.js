import "./LoginForm.scss";
import { Box } from "@mui/material";
import MuiInput from "../../componetns/Input/MuiInput";
import MuiButton from "../../componetns/Button/MuiButton";
import DigitalIndia from "../../assests/DigitalIndia.svg";

const Login = () => {
  return (
    <div className="LoginContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: '3rem',
          paddingBottom: 0,
        }}
      >
        <p className="head-xs head-black mb-32">Login</p>
        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <MuiInput
            variant="outlined"
            label="Registered Mobile Number"
            className="mb-2"
            type="tel"
            required
            sx={{
              marginBottom: "32px",
              height: "3.125rem",
            }}
          />
          <MuiButton
            type="submit"
            name="Login using OTP"
            variant="contained"
            fullWidth
            sx={{
              marginBottom: "1.75rem",
              background: `var(--brand-500)`,
              borderRadius: "6.25rem",
              fontWeight: `var(--body-text-medium)`
            }}
          />
        </form>
        <div className="separator-text text-center mb-28">- or -</div>
        <p className="separator-text text-center mb-28">
          <a className="link" href="#">Don’t have an account?</a>
        </p>
        <MuiButton
          name="Sign Up"
          variant="outlined"
          sx={{
            marginBottom: "2rem",
            borderRadius: "6.25rem",
            color: "brand-500",
            borderColor: "brand-200",
          }}
        />
        <p className="text-center getHelpContainer mb-28">
          <span>Having trouble logging in? </span>
          <a href="#" className="getHelp">Get Help</a>
        </p>       
      </Box>
      <div className="login-footer">
            <span>powered by </span>
            <img src={DigitalIndia} alt="DigitalIndia" />
        </div>
    </div>
  );
};

export default Login;
