import { Button, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <h1>Add Blog</h1>
      <TextField sx={{width:400}} label="Blog Name" variant="outlined"  placeholder="Enter the blog name"  /><br /><br />
      <TextField sx={{width:400}}   label="Description"  variant="outlined" multiline  rows={4}  placeholder="Enter the blog description"  /><br /><br />
      <TextField sx={{width:400}}  label="Author Name"  variant="outlined"  placeholder="Enter the author's name"/><br /><br /><br />

      <Button variant="contained"   sx={{ width:400,background:'gray' }}>submit </Button>
      </div>
  )
}

export default Add
