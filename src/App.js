import {useRef, useState} from 'react';
import "./App.css";


export default function App(){
  const [idea, setIdea] = useState("");
  const ideaTextRef = useRef();
  // array and not db/json file because it's only a prototype of the webapp
  const ideas = [" Travel Log App","Personal Project Management Tool","Public Blog App"," E-Commerce Website/Shopify Clone", "Bookstore Library & Stock keeping app", "Social Media App for local handicrafts", "Task Management Tool", "Workout Tracker App", "Realtime Chat App", "Hospital Management App"];
  function handleClick(){
    setIdea(ideas[Math.floor(Math.random() * ideas.length)])
    ideaTextRef.current.classList.remove("hide");
  }
  
  return(
    <div className="home-container">
      <h1 className="title">Generate MERN project idea</h1>
      <button onClick={handleClick}>Generate</button>
      <h2 ref={ideaTextRef} className="hide">{idea}</h2>
    </div>
  )
}