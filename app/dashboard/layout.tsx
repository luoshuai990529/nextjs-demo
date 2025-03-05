'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }: any) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <div>--------------------------------------</div>
        <Link href="/dashboard/about">About</Link>
        <br/>
        <Link href="/dashboard/mine">Mine</Link>
        <div>--------------------------------------</div>
        </div>
      <h1>Dashborad Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}