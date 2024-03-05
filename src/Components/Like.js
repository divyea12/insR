import React from "react"
import '../styles/Like.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../Context/Auth'
function Like(props) {

    var { user } = useAuth();
    const localuser = JSON.parse(localStorage.getItem("user"));
    if (localuser) user = localuser;
    const { setUser } = useAuth();
    // const [reelLike,setReelLike] = useState();
    const [luser, setLuser] = useState([]);
    var reelLike = props.rlike; 
    const[like,setLike] = useState(reelLike);
    console.log(like+'  16');
    console.log(reelLike+"   17");  
    let reelId = props.rid;
    let ruser = props.ruser;    
    console.log("18 " , ruser);
    async function handleLike() {
        let res = await axios.post("https://inst-ulln.onrender.com/reels", { reelId: reelId, uid: user._id,rlike:reelLike+1 });
        console.log(res.data);
        user = res.data.user;
        // reelLike=reelLike+1;
        console.log(reelLike +"  25");
        localStorage.setItem("user", JSON.stringify(user));
        // setLike(reelLike+1);
        setLike(reelLike+1); 
        setLuser(user.likedReels);
        console.log(like+'  29');
        // console.log(luser); 
    }

    async function handleUnLike() {
        if(reelLike-1<0){
            reelLike = 1;
        }
        let res = await axios.post("https://inst-ulln.onrender.com/reels", { reelId: reelId, uid: user._id,rlike:reelLike-1 });
        console.log(res.data);
        user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        // reelLike--;
        setLike(reelLike-1);
        // setLike(reelLike-1);
        setLuser(user.likedReels);
        console.log(reelLike); 
    }

    useEffect(() => {
    }, [])
    return (
        <>
            {
                user.likedReels.indexOf(reelId)>=0?
                <button className="unlike" onClick={handleUnLike}>unlike     {like}</button>:
                <button className='like' onClick={handleLike}>like    {like}</button>
                // {   
                //     like == true ?
                //     <>
                //             <h6>Liked</h6>
                //         </> : <>
                //             <h6>Unliked</h6>
                //         </>
                // }
            }
        </>
    )
}
export default Like;