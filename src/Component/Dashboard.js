import React from 'react'
import './Dashboard.css'
import {Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Dashboard() {

    const logout = ()=> {
        alert("You have successfully logged out")
    }

  return (
    <div className='DashBoard'>
        <Card>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    User Profile pic
                </CardTitle>
                <CardText>
                    Please connect me at <a href='#'>http://facebook.com/jitu/home</a>.
                </CardText>
                <CardText>
                <Link to='/'>
                    <Button onClick={logout}>
                        Log Out
                    </Button>
                </Link>
                </CardText>
            </CardBody>
        </Card>
    </div>
  )
}
