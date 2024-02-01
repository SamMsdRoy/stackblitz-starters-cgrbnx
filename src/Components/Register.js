import React,{useState} from 'react';



export default function Register() {
  const[uname,setUname]=useState("")
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  
  return (
    <div className="card col-lg-6 col-md-8 col-sm-10" >
     <form className="card-body d-block justify-contents-center align-items-center"> 
     <h4 className="text-center g-5">Registration Form</h4>
     <div className="form-group mt-5">
     <label >Name</label>
       <input className="form-control " type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
     </div>
      <div className="form-group mt-4">
      <label >Email</label>
       <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
       <div className="form-group mt-4">
       <label >Password</label>
       <input type="text" className="form-control" value={pass} onChange={(e)=>setPass(e.target.value)}/>
       </div>
       <div class="form-group form-check mt-4">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="d-grid gap-2 mt-2">
  <button class="btn btn-primary" type="button">Button</button>
</div>
     </form>
    </div>
  );
}
