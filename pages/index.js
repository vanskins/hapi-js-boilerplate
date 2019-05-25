import React from 'react'
import Link from 'next/link'

export default () => (
  <html>
    <head>
      <title>Test</title>
    </head>
    <body>
      <h1>Hello world</h1>
      <Link href='/about' as='/about'><a>About</a></Link>
    </body>
  </html>
)
