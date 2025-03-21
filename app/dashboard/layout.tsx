'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: any) {
  const [count, setCount] = useState(0)
   const pathname = usePathname()
  
  return (
    <>
      <div>
        currentRouterPath={pathname}
        <div>-------------------Router-------------------</div>
        <Link href="/dashboard/about" className='text-xl'>About</Link>
        <br/>
        <Link href="/dashboard/mine" className='text-xl'>Mine</Link>
        <br/>
        <Link href="/dashboard/nav" className='text-xl'>Nav</Link>
        <div>-------------------Router----------------</div>
      </div>
      <div>-------------------Dashboard Layout Content-------------------</div>
      <h1>Dashborad Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
      <div>-------------------Dashboard Layout Content-------------------</div>
      </>
  )
}