import { useEffect, useState }from 'react'
import Register from './pages/register.tsx'
import Login from './pages/login.tsx'
import { Route, Routes } from 'react-router-dom'
const app = () => {
  return (
<>
<Routes>

<Route  path='/' element={<Register/>}>
</Route>
<Route path='/login' element={<Login/>}/>

</Routes>
</>
  )
}

export default app