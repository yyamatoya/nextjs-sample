'use client'

import { useState, useEffect } from 'react'

export default function TimerCount() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCount((prev) => prev + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button
        type="button"
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
