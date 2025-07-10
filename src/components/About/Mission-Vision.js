import React from 'react'

const MissionVision = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:py-12 py-4 px-4 lg:px-24 grid-flow-row' >
        <div className='bg-gray-200 px-8 py-8 rounded-lg'>
            <h3 className='lg:text-[2.5rem] font-[QuicksandMedium]'>Mission</h3>
            <p>To provide fully serviced, design-forward homes for modern travelers and residents, merging the ease of a hotel with the soul of a home</p>
        </div>
        <div className='bg-gray-200 px-8 py-8 rounded-lg'>
        <h3 className='lg:text-[2.5rem] font-[QuicksandMedium]'>Vision        </h3>
        <p>To make flexible, comfortable living accessible—anywhere, anytime.        </p>
        </div>
    </div>
  )
}

export default MissionVision