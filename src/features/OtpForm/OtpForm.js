import "./OtpForm.scss";
import { Box, Link } from "@mui/material";
import MuiInput from "../../componetns/Input/MuiInput";
import MuiButton from "../../componetns/Button/MuiButton";
import DigitalIndia from "../../assests/DigitalIndia.svg";
import { useEffect, useRef, useState } from "react";

const OtpForm = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [value, setValue] = useState("");
  // Create refs for input fields

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    // console.log(inputRefs);
  }, []);

  // Function to focus on next input field
  const focusNextInput = (index) => {
    if (index < 5 - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to focus on previous input field
  const focusPreviousInput = (index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Function to handle key presses
  const handleKeyDown = (event, index) => {
    const value = event.key;
    const newOtp = [...otp];

    if (event.key == "Backspace") {
      return focusPreviousInput(index);
    }

    // Check if the key pressed is a number and the maximum length of the input field is reached
    if (event.key >= "0" && event.key <= "9" && value.length === 1) {
      newOtp[index] = value;
      setOtp(newOtp);
      focusNextInput(index);
    }

    if (index + 1 == 5) {
      return setValue(newOtp.join(""));
    }
  };
  return (
    <div className="LoginContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 6,
          paddingBottom: 0,
        }}
      >
        <div style={{ marginBottom: "14px" }}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_179_2821"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#1C1B1F" />
            </mask>
            <g mask="url(#mask0_179_2821)">
              <path
                d="M9.8307 16.9999L17.4256 24.5948L16 25.9999L6 16L16 6L17.4256 7.4051L9.8307 15H25.9999V16.9999H9.8307Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </div>
        <p className="head-xs head-black">Verify OTP</p>
        <p className="body-xs font-regular" style={{ marginBottom: "40px" }}>
          OTP has been sent to{" "}
          <span className="font-medium">+91 9696789000 </span>
          <Link sx={{ textDecoration: "none" }} className="medium">
            Edit
          </Link>
        </p>
        <form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            {otp.map((item, index) => (
              <div key={index} style={{ width: "fit-content" }}>
                <MuiInput
                  inputRef={(e) => {
                    inputRefs.current[index] = e;
                  }}
                  value={item}
                  variant="outlined"
                  // label="Registered Mobile Number"
                  className="mb-2"
                  type="tel"
                  required
                  sx={{
                    marginBottom: "36px",
                    width: "56px",
                    height: "56px",
                    "& .MuiInputBase-input": {
                      fontFamily: "var(--body-font-family)",
                      fontSize: "16px",
                      fontStyle: "normal",
                      textAlign: "center",
                      fontWeight: 400,
                      lineHeight: "24px",
                      /* 150% */
                      letterSpacing: "-0.08px",
                    },
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              </div>
            ))}
          </div>
          <p className="body-xs font-regular">
            Didn’t receive the OTP?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#E0E0E0" />
            </svg>{" "}
            <span className="body-xs font-medium gray-600">
              Resend in 00:21
            </span>
          </p>
          <MuiButton
            type="submit"
            name="Verify OTP"
            variant="contained"
            fullWidth
            sx={{
              marginTop: "24px",
              marginBottom: "28px",
              background: `var(--brand-500)`,
              borderRadius: "100px",
              fontWeight: `var(--body-text-medium)`,
            }}
          />
        </form>
      </Box>
      <div className="login-footer">
        <span>powered by </span>
        <img src={DigitalIndia} alt="DigitalIndia" />
      </div>
    </div>
  );
};

export default OtpForm;
