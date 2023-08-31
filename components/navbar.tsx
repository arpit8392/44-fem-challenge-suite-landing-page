import Logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header className='px-4 py-6 md:p-10 lg:px-40 lg:py-14'>
			<nav className='flex items-center justify-between'>
				<Link href={'/'}>
					<Image src={Logo} alt='Suite' />
				</Link>
				<Link
					href={'#'}
					className='px-4 py-3 md:px-6 border rounded-md border-darkBlue text-darkBlue text-sm font-bold hover:bg-darkBlue hover:text-creamWhite tracking-tight md:text-base bg-transparent'>
					Request Beta Access
				</Link>
			</nav>
		</header>
	)
}
export default Navbar
