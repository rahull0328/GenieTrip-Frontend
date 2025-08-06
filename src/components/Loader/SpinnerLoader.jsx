import React from 'react'

const SpinnerLoader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-900"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className=""
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray="60"
          strokeDashoffset="40"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SpinnerLoader
