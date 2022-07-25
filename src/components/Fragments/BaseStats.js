import React,{useState,useEffect} from 'react'


const BaseStats= ({titulo2,estadisticas}) => {
    return(
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {titulo2}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {estadisticas}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default BaseStats