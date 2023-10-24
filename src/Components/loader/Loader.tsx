// import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../../Lotties/loader.json";

const Loader = () => {
    
  return (
    <div className='lottie-loader m-auto'>
      <Lottie 
	    // options={defaultOptions}
        animationData={animationData}
        height={200}
        width={200}
      />
      <h2 className='text-center' >

      Loading some awesome data...
      </h2>
    </div>
  )
}

export default Loader
