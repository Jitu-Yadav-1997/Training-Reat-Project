import axios from "axios";
import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Pagination, Avatar} from '@mui/material';

export default function Connections() {

  const [users, setUser] = useState([]);
  const [showUser, setShowUser] = useState([]);

  const onPageChange = (e, v) => {
    setShowUser(users.slice((v-1)*4, (v-1)*4+4))
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {setUser(response.data); setShowUser(response.data.slice(0,4))});
  } , []);

  return (
    <Grid container spacing={2}>
      {
        showUser.map(user => 
          <Grid key={user.id} item xs={3} sx={{marginTop: '300px'}}>
              <Card>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/318/180"
                    alt="green iguana"
                  /> */}
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/318/180" sx={{width:'150px', height:'150px', marginLeft:'60px', marginTop:'10px'}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      User Profile pic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h6>Name : {user.name}</h6><br/>
                      <h6>Username : {user.username}</h6><br/>
                      <h6>Email : {user.email}</h6>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </Grid>
        )
      }
      <Pagination count={3} onChange={onPageChange} sx={{marginLeft:'495px'}} />
    </Grid>
  )
}
