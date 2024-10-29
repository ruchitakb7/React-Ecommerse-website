import React ,{Fragment}from "react"
import { Container,Image } from "react-bootstrap"
import pic from "../../assets/Band Members.png"
import Footer from "../UI/Footer"


const About=()=>{
    return(
        <Fragment>

           <Container className="d-flex flex-column align-items-center mt-4" >
           <h2 className="text-center" style={{fontFamily: 'algerian, sans-serif'}}>About</h2>
           <div className="d-flex justify-content-around align-items-center" style={{ width: "800px",marginTop:"40px"}}> 
              <img src={pic} alt="" style={{ width: "200px", height: "200px",marginRight:"30px", borderRadius:"50px"}}></img>
              <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.

The Generics
</p>
           </div>
        </Container>
        <Footer></Footer>
        </Fragment>
        
    )
}
export  default About