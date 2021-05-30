import React from 'react'
import Profil from '../profil/Profil'

const ProfilList=({ Person, hendleShow,handleClick}) =>{
    return (
        <div>
            {Person.map((el)=>
            <Profil 
              todo={el}
              hendleShow={hendleShow}
              handleClick={handleClick}/>)}
        </div>
    )
}
export default ProfilList
