import Link from 'next/link'
import React from 'react'

export default function 
() {
  return (
    <div className="rounded-2xl bg-neutral-300 p-4 m-2">
        <h2 className="text-lg font-bold">Categories</h2>
        <ul>
            <li><Link href="/posts/Technology" className="hover:underline">Technology</Link></li>
            <li><Link href="/posts/Health" className="hover:underline">Health</Link></li>
            <li><Link href="/posts/Travel" className="hover:underline">Travel</Link></li>
        </ul>
    </div>
  )
}
