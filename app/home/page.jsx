import React from 'react'
import { auth } from '../auth'

const page = async() => {
    const session = await auth()
 
  if (!session.user) return null
 
  return (
    <div>
      <img src={session.user.img} alt="User Avatar" />
    </div>
  )
}

export default page