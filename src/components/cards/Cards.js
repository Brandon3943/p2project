import React from 'react'

function Cards({ images }) {

   let displayImages = images.map(hand => {
      return <img src={hand} alt="cards" width="80px" className="winning-hands"/>
   })

  return (
    <div>  
      <div className="winning-table">       
        {displayImages}
      </div>
    </div>
  )
}

export default Cards