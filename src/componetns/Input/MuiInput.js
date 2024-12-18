import * as React from 'react';
import TextField from '@mui/material/TextField';
import './MuiInput.scss'

function MuiInput({variant, label, className, sx}){
  return (
    <TextField
      sx={sx}
      id="outlined-basic"  
      variant={variant} 
      label={label} 
      className="muiInput"
     />
  )
}

export default MuiInput;
