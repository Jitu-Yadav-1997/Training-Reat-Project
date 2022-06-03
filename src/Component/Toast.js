import React from 'react'
import Snackbar from '@mui/material/Snackbar';

export default function Toast(props) {
  return (
    <Snackbar open={props.open} autoHideDuration={5000} onClose={props.onClose}>
            {props.children}
    </Snackbar>
  )
}
