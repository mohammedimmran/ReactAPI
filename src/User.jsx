import React, { useEffect, useState } from 'react'

function User() {

    const [users , setUsers]=useState([]);
    const getUsers =async ()=>{

        const response =await fetch("https://api.github.com/users");
        
        const users=await response.json();
        
        setUsers(users);
        console.log(users);
        

        
    }

    useEffect(()=>{
        getUsers();
    },[])
    return (
        <>
        <div className="container-fluid">
        <div className="alert alert-danger" role="alert">GitHub User Data through API</div>
        <div className="row">
        {
            users.map((element)=>{

                return(
                    <div className="col-4  p-1  ">
            <p>{element.login}</p>
            </div>
            
                )
            })
        }
            

        </div>
        </div>

        </>
    )
}

export default User
