import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Plagiarism Monitor — Stop Content Theft',
  description: 'Continuously scans the internet for unauthorized use of your content, sends DMCA takedown notices, and tracks content theft analytics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13752054-3198-494d-943d-a962e0b67b6c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
