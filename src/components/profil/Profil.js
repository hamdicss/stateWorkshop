  
import React from 'react'
import Counter from '../counter/Counter'
import "./Profil.css"
const Profil = ({ todo, hendleShow ,handleClick}) => { 
        return (
  <div>{(todo.isShow) ?     
    <div>
        <img className="im" src={todo.photo} alt=""  />
          <div className="tout">
            <div className="part1">
               <h1 style={{color: "#33334d"}}> {todo.fullName} </h1> 
               <br />
               <h3 style={{color: "#666699"}}> {todo.profession}</h3>
               <br />
               <h4 style={{color: "#666699"}}> {todo.lieu}</h4>

            </div>
            <div className="part2">
               <h3 style={{color: "#666699"}}> {todo.enis} </h3>
               <br /> 
               <h3 style={{color: "#666699"}}> {todo.job}</h3>
               <br />
                <Counter /> 
            </div>
          </div>
    </div> : null
     }
       <button className='button' onClick={() => hendleShow(todo.id)+handleClick()}></button>
           
  </div>

        )
    
}

export default Profil
