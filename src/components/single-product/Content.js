import React, { Component } from 'react';
import Comments from './Comments';
import Gallery from './Gallery';
import Related_movie from './Related_movie';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../userAuthorization/firebase';

import { db } from '../userAuthorization/firebase'
import { collection, addDoc, Timestamp, query, onSnapshot, where, getDocs, orderBy } from 'firebase/firestore'

function Content(props) {
    const [createComment, setCreateComment] = useState(false);
    const [comments, setComments] = useState([])
    const [commentId, setCommentId] = useState(null)
    const [authState,setAuthState]=useState(false);
    const [username,setUsername]=useState('')
    // let comment_id = ""
    let { id, movie_id } = useParams();
    
   const addComment = async (body)=>{
       if(!authState)return
       console.log(props.movieInfo);
       if(!props.movieInfo)return;

    
    const doc = { body: body, username: username, movie_id: props.movieInfo.id, created: Timestamp.now() }
    console.log(doc);
    try {
         addDoc(collection(db, 'comments'),doc).then(() =>{
            setCreateComment(true)
        })
     
    } catch (err) {
        console.log(err)
    }
   }
            useEffect(()=>{
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      setAuthState(true);
                      
                      setUsername(  user.displayName );
                    } else {
                      setAuthState(false)
                    }
                  });
            
                if (id) {
                    fetchComments(id)
                    
                } else if (movie_id) {
                    fetchComments(movie_id)

                }

            },[])
    
 


    const handleSubmit = async (e) => {
       
    }
    const fetchComments = (id)=>{
        const q = query(collection(db, 'comments') ,where('movie_id', "==", Number(id)) );

        onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
                console.log("empty");
            }
            console.log(querySnapshot);
              let  results=[]
            querySnapshot.docs.forEach((doc) => {
                setComments()
                console.log('doc',doc.data());
                results.push({ ...doc.data(), id: doc.id })
            })
            console.log("results",results);
            function compare( a, b ) {
                if ( a.created < b.created ){
                  return -1;
                }
                if ( a.created > b.created ){
                  return 1;
                }
                return 0;
              }
              
            
              
            setComments(results.sort( compare ))
            setCreateComment(false)
        })
    }

    

    console.log('comments',comments);




    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 col-xl-8">
                    {/* <!-- content tabs --> */}
                    <div className="tab-content" id="myTabContent">
                        {props.commentsState && <Comments  addComment={addComment} handleSubmit={handleSubmit}  comments={comments} />}
                       
                       
                    </div>
                    {/* <!-- end content tabs --> */}
                </div>
                {/* <!-- sidebar --> */}
                <Related_movie />
                {/* <!-- end sidebar --> */}
            </div>
        </div>
    );

}

export default Content
