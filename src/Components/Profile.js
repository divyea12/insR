import React,{useEffect} from "react"
import '../styles/Profile.css'
import {Link,useNavigate} from "react-router-dom"


function Profile() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        if(!user){
            window.alert("Login first");
            navigate("/login");
        }
    },[])
    return (
        <>
        {
            user?<>
                 <div className="profile">
                <div className="cont">
                </div>
                <div className='creds'>
                    <div className="profname"><h6>name:  {user.name}</h6></div>
                    <div className="profemail"><h6>Email:  {user.email}</h6></div>
                    <div className='profposts'><h6>posts:  {user.img.length}</h6></div>
                    <div className='profrole'><h6>role:  {user.role}</h6></div>
                    <div className='proflikedreels'><h6>likedReels:  {user.likedReels.length}</h6></div>
                </div>
            </div>
            <Link to='/feed' className='RedirtoFeed'>Feed</Link>
            </>:<>HI</>
        }
        </>
    )
}
export default Profile;