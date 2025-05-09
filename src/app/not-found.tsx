import React from 'react'

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl">404 Not Found</p>
        <p className="text-red-500">The page you are looking for does not exist.</p>
    </div>
  )
}
