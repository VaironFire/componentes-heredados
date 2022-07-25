import React,{useState,useEffect} from 'react'
import Charmander from '../assets/images/pokemon1_charmander.jpg'
import Snorlax from '../assets/images/pokemon2_snorlax.jpg'
import Mewtwo from '../assets/images/pokemon3_mewtwo.jpg'
import PokemonFragment from "./Fragments/PokemonFragment"
import BaseStats from "./Fragments/BaseStats"
const Pokemon = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="La llama que arde en la punta de su cola es un indicio de sus emociones. La llama oscila cuando CHARMANDER está feliz y arde cuando está enfadado."
                            imagen={Charmander}
                            titulo="Charmander"
                            tipo="Tipo: Fuego"
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Muy perezoso. Solo come y duerme. A medida que aumenta su volumen rotundo, se vuelve cada vez más perezoso."
                            imagen={Snorlax}
                            titulo="Snorlax"
                            tipo="Tipo: Normal"
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Un POKEMON que fue creado por manipulación genética. Sin embargo, a pesar de que el poder científico de los humanos hizo su cuerpo, no pudieron darle un corazón cálido."
                            imagen={Mewtwo}
                            titulo="Mewtwo"
                            tipo="Tipo: Psiquico"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <BaseStats
                            titulo2="Estadisticas Base de Charmander"
                            estadisticas="HP 39 Ataque 52 Defensa 43 esp.Ata 60 esp.Def 50 Velocidad 65	"
                        />
                    </div>
                    <div className="col-2">
                        <BaseStats
                            titulo2="Estadisticas Base de Snorlax"
                            estadisticas="HP 160 Ataque 110 Defensa 65 esp.Ata 65 esp.Def 110 Velocidad 30	"
                        />
                    </div>
                    <div className="col-2">
                        <BaseStats
                            titulo2="Estadisticas Base de Mewtwo"
                            estadisticas="HP 106 Ataque 110 Defensa 90 esp.Ata 154 esp.Def 90 Velocidad 130"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon