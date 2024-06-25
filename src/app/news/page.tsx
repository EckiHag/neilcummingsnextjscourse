import Link from "next/link"
import React from "react"

export default function NewsPage() {
  return (
    <div>
      <h3 className="text-3xl">This will be the Breaking News page</h3>
      <Link href="/">Go back home</Link>
    </div>
  )
}
