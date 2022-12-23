import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [userName,setUserName] = useState('')
  useEffect(()=>{
    getNames()
  },[])
  const getNames = async() =>{
    const response = await axios.get('/')
     console.log(response)
  }
  return (
    <div className="App">
     <h1>Hello welcome to my Frontend</h1>
       
    </div>
  );
}

export default App;
