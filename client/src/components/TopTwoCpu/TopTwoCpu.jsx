import React from 'react'
import "./TopTwoCpu.css"
import { Link } from 'react-router-dom'
import VsCpu from '../../images/vs/VS-CPU.svg'

function TopTwoCpu() {
  return (
    <div className='top-two-cpu'>
      <Link>
      <img src={VsCpu} alt="VsCpu" /></Link>
    </div>
  )
}

export default TopTwoCpu