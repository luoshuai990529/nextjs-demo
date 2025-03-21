
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Nav({ navLinks }: { navLinks: any[]}) {
    const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <div className='text-purple-600'>
       <button className='mr-4' onClick={() => updateSorting('asc')}>Sort Ascending</button>
       <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </div>
  )
  }
  