import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Suite Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${epilogue.className} bg-creamWhite`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
