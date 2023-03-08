
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({element}) => {
const navigate = useNavigate()

  return (
 
      <MDBCard style={{ maxWidth: '540px' ,display:'flex',cursor:'pointer',marginBottom:'30px' }} onClick={()=>navigate(`/blogs/${element._id}`)}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={`/Public/blogs/${element.images}`} alt='...'  style={{ maxWidth:"400px"}}/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody style={{marginLeft:'190px'}}>
            <MDBCardTitle>{element.title}</MDBCardTitle>
            {/* <MDBCardText>{element.description}</MDBCardText> */}
            <MDBCardText>{element.category}</MDBCardText>
            <MDBCardText><VisibilityIcon/>{element.numViews}</MDBCardText>
            <ThumbUpOffAltIcon/>
           <ThumbDownOffAltIcon/>
            <MDBCardText>{element.author}</MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      </MDBCard>
  
  )
}

export default BlogCard