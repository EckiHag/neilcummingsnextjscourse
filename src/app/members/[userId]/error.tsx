"use client" // Error boundaries must be Client Components

// import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  //   useEffect(() => {
  //     // Log the error to an error reporting service
  //     console.error(error)
  //   }, [error])

  // Hier soll noch das Ergebnis als Card in Form gebracht werden.
  // eine error.tsx exitiert nicht bei github im Commit eofS4, warum nicht weiß man nicht

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
