import React,{useState,useEffect} from 'react'

const PokemonFragment= ({imagen,titulo,textoDescripcion,tipo}) => {
    return(
        <>
            <div className="card" style={{width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textoDescripcion}</p>
                    <p className="card-text">{tipo}</p>
                </div>
            </div>
        </>

    )

}
export default PokemonFragment