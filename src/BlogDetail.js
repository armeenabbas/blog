import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const BlogDetail = () => {
  const { id } = useParams() 
  return (
    
    <div>
      <Header />
      {/* // gfg */}
      blog detail - {id}
    </div>
  )
}

export default BlogDetail
