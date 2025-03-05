'use client'

import { useState } from 'react'

export default function Template({ children }: any) {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Dashborad Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      {children}
    </>
  )
}