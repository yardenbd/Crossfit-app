

import image from './images/myImg.png'
export default function Main() {
    return (
     
        <div className="site-blocks-cover inner-page" style={{backgroundImage:`url(${image})`}} >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 text-center" >
          <h1 >Crossfits Program</h1>
          <br></br>

          <span className="caption d-block text-white">Find The Healthy Way</span>
        </div>
      </div>
    </div>  
   
    )
}

