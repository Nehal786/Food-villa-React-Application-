import { useState } from "react";


const Registration = () => {

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(name,email,password);
    }





    return (
        <div className="registration-container">
        <div className="registration-form">
            
            <form onSubmit={handleSubmit}>
                
                <label className="sign-up"> Register</label>
                <br/>
                <label className="form"> Name </label>
                <input className="name" type="text" placeholder="Enter your Name" value= {name} onChange={(e)=>{
                    setName(e.target.value)

                }}/>
                <br/>
                <label className="label-email"> Email </label>

                <input type="email" className="email" placeholder="Enter your Email" value ={email} onChange={(e)=> {
                    setEmail(e.target.value)

                }} />
                <br/>
                <label className="label-password"> Password </label>
                <input type="password" className="password" placeholder="Enter your Password" value={password} onChange={(e)=> {
                    setPassword(e.target.value);
                }}/>
                <br/>
                <button className="buttn"  type="submit" >Submit</button>
            </form>

        </div>
        </div>
    )
}

export default Registration