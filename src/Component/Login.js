import React from 'react'
import { Link } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import './Login.css'

export default function () {
  return (
    <div className='LoginIn'>
        <Form inline>
            <FormGroup floating>
            <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
            />
            <Label for="email">
                Email
            </Label>
            </FormGroup>
            <FormGroup floating>
            <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
            />
            <Label for="password">
                Password
            </Label>
            </FormGroup>
            <Link to='/dashboard'> 
                <Button>
                    Log In
                </Button> 
            </Link>
        </Form>
    </div>
  )
}
