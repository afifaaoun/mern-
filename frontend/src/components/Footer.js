import React, { useEffect } from 'react'
import axios from 'axios';
import BlogCard from './BlogCard';
import { useDispatch, useSelector } from 'react-redux'
import { setBlogs } from '../store/blogSlice';

const Footer = () => {
  const blogs = useSelector((state)=> state.Blog);
  console.log(blogs);
  const dispatch = useDispatch();
  const getAllBlogs = async()=>{
    await axios.get("http://localhost:5008/blogs/",{withCredentials:true})
    .then((response)=>{
      dispatch(setBlogs(response.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getAllBlogs()
  },[])
  return (
    <>
      <h1 style={{display:'flex',justifyContent: "center",marginTop:"50px",backgroundColor:'#eee',color:"rgb(134,142,153)"}}> BLOGS</h1>
      <div style={{display:'flex',flexWrap: "wrap", justifyContent: "space-around",alignItems: "center",marginTop:"50px"}}>
        {blogs.map((el,index)=>{
          return (
            <div key={index}>
              <BlogCard element={el}/>
            </div>
          )
        })} 
      </div>
    </>
  )
}

export default Footer