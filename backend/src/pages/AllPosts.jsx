import React, { useEffect, useState } from "react";
import {Container,PostCard} from '../component'
import appwriteService from '../appwrite/config'

function AllPost(){

    const [post,setpost]=useState([])
    useEffect(()=>{},[])
    appwriteService.getposts([]),then((post)=>{
        if(post){
            setpost(post.documents)
        }
    })
    return(
        <div className="">
            <Container>
                {post.map((post)=>(
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post}/>

                    </div>
                ))}
            </Container>
        </div>
    )
}
export default AllPost