import { Card, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [blog, setblog] = useState([])
    //There was a delay to show cards when loading home page .
    //So i used useEffect to solve the problem.
    useEffect(()=>{
            // Fetch data when the component mounts

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
        setblog(res.data.slice(0, 30))
        //set a limitted amount of data
    })

    },[]);
    

  return (
    <div>
      <h1>Blog Dashboard</h1>
      <Grid container spacing={2}>
              {blog.map((b) => {
                  return (
                      
              <Grid item xs={12} md={4} sm={6}>
             
          <Card sx={{ 
              maxWidth: 345, 
              minHeight: 300, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              background:'gray',
              color:'white' 
            }}>
             
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {b.id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                      {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {b.body}
                  </Typography>
              </CardContent>
              
          </Card>
     </Grid>
                  )
              })}
          </Grid>
    </div>
  )
}

export default Home
