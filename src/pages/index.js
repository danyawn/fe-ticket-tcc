import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const index = () => {
  const authContext = useAuth()
  const { token, user } = authContext
  console.log('token login', token);
  console.log('login', user);
  return (
    <div>
      Done Login
    </div>
  )
}

export default index