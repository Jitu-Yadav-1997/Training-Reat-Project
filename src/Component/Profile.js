import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Profile() {
  return (
        <Card sx={{ maxWidth: 345, marginLeft: '35%', marginTop: '20%'}}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/318/180"
              alt="green iguana"
            /> */}
            <Avatar alt="Remy Sharp" src="https://picsum.photos/318/180" sx={{width:'150px', height:'150px', marginLeft:'100px', marginTop:'10px'}} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                User Profile pic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Please connect me at <a>http://facebook.com/jitu/home</a>.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  )
}
