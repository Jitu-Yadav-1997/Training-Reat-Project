import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import './SignIn.css'
import { Link } from 'react-router-dom';

export default function SignIn() {

const [check, setCheck] = React.useState(false)

const accept = () => {
    setCheck(!check)
}

  return (
    <div className='SignIn-Div'>
        <Form>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="firtName">
                    First name
                    </Label>
                    <Input
                    id="firtName"
                    name="firtName"
                    placeholder="ex. Jitendra"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="lastName">
                    Last name
                    </Label>
                    <Input
                    id="lastName"
                    name="lastName"
                    placeholder="ex. Yadav"
                    type="text"
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="gender">
                gender
                </Label>
                <Input
                id="gender"
                name="gender"
                type="select"
                >
                <option>
                    Male
                </option>
                <option>
                    Female
                </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="dateOfBirth">
                Date Of Birth
                </Label>
                <Input
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                type="date"
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label
                    for="email"
                    >
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="phone">
                    Number
                    </Label>
                    <Input
                    id="phone"
                    name="phone"
                    placeholder="phone no"
                    type="phone"
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Input
                id="termsAndCondition"
                name="termsAndCondition"
                type="checkbox"
                value={check}
                onClick={accept}
                />
                <Label
                for="termsAndCondition"
                >
                I agree with terms and condition of the user Dashboard.
                </Label>
            </FormGroup> 
            {
                check ? 
                <Link to='/login'>
                    <Button>
                        Sign in
                    </Button>
                </Link> 
                :
                <Button disabled>
                    Sign in
                </Button>
            }
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </Form>
    </div>
  )
}
