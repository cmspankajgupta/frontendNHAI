import React from 'react'
import Button from '@mui/material/Button';
import './MuiButton.css'

function MuiButton({variant, name, className }) {
  return (
    <Button variant={variant} name={name} className={className}>{name}</Button>
  )
}

export default MuiButton


