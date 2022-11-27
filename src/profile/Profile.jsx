import React from 'react'

const Profile = (props) => {
  return (
    <div> 
       {props.children}
      <h1>{props.name} {props.lastName}</h1>
      <p>{props.mybio}</p>
      <p>{props.myprofession}</p>
      
    </div>
  )
}

export default Profile