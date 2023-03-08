import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import BookCardUser from '../../components/bookCardUser'
import NavbarUser from '../../components/NavbarUser'
import { setBooks } from '../../store/bookSlice'

const UserProfile = () => {
  const books = useSelector((state)=>state.Book);
  console.log('books:',books);
 
  const dispatch = useDispatch();
  const getAllBooks = async()=>{
    await axios.get("http://localhost:5008/admin/list",{withCredentials:true})
    .then((response)=>{
      dispatch(setBooks(response.data.bookList))
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getAllBooks()
  },[])
  return (      

    <div>
      <NavbarUser/>
      <h1 style={{display:'flex',justifyContent: "center",marginTop:"50px",backgroundColor:'#eee',color:"rgb(134,142,153)"}}>LIST OF BOOKS</h1>
      <div style={{
        display: "flex",
        border: "1px solid black",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
        }}>
        {books.map((el,index)=>{
          return (
            <div key={index}>
              <BookCardUser element={el}/>
            </div>
          )
        })}       
      </div>
    </div>
  )
}

export default UserProfile