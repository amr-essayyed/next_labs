import Link from 'next/link'
import React from 'react'

export default function 
() {
  return (
    <nav className="bg-neutral-800 text-white">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">My Blog</div>
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </div>
    </nav>
  )
}
