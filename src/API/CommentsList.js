import React from 'react'
import { useSelector } from 'react-redux'

const CommentsList = () => {
    const Comments=useSelector((state)=>state.Comments);
    console.log(Comments);
    const data=Comments.data;
    
  return (
    <div>CommentsList:

       
        { Comments.isLoading ? <h1>Loading...</h1> :
            data && data.map((item,index)=>{
                return(
                    <ol type='A' start='5'>
                    <li > {item.name}</li>
                    <li> {item.email}</li>
                    <li> {item.body}</li>
                    </ol>

                )
            })
        }
    </div>
  )
}

export default CommentsList