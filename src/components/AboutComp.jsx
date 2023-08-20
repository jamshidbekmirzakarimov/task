import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const AboutComp = () => {
  return (
    <>
      <div className='w-[100%] max-w-[1100px] mx-auto mb-10'>
        
        <Link to="/about">
          <Button className={"bg-green-500 rounded-md py-[10px] px-[15px] text-base text-white"}>
            About
          </Button>
        </Link>

      </div>
    </>
  )
}

export default AboutComp