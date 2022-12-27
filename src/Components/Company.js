import React from "react";
import c1 from '../Images/c1.png'
import c2 from '../Images/c2.png'
import c3 from '../Images/c3.png'
import c4 from '../Images/c4.png'
import c5 from '../Images/c5.png'

const Company=()=>{

    return(

       // <!-- ------------Company-Logos----------- -->

        <section className="company">
    
            <div className="logos">
                <img src={c1} alt=""/>
                <img src={c2} alt=""/>
                <img src={c3} alt=""/>
                <img src={c4} alt=""/>
                <img src={c5} alt=""/>
    
            </div>
    
        </section>

    )
}

export default Company