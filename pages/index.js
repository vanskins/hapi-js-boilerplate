import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href='/about' as='/about'>
        <a>about</a>
      </Link>
    </li>
  </ul>
)
