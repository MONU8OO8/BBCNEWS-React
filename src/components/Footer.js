import React from 'react'
import SocialFollow from './SocialFollow'

const footer = ()=> {
  return (
     <div className="container-fluid" style={{backgroundColor: '#4c4c4c', color: 'white'}}>
         <div className="row mt-3">
             <div className="col-lg-4 col-sm-4 mt-4 col-md-4 col-12 col-xs-4 mx-auto">
                   <h3 className="text-center">Explor the BBC</h3>
                   <ul className="col mt1">
                       <li className="llist">Sport</li>
                       <li className="llist">Game</li>
                       <li className="llist">Movie</li>
                       <li className="llist">Hollywood</li>
                   </ul>
             </div>
             <div className="col-lg-4 col-sm-4 mt-4 col-md-4 col-12 col-xs-4 mx-auto">
             <SocialFollow />
             </div>
             <div className="col-lg-4 col-sm-4 mt-4 col-md-4 col-12 col-xs-4 mx-auto">

             </div>
         </div>
     </div>
  )
}

export default footer