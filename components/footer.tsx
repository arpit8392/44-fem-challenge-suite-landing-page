import Logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai'

const Footer = () => {
	return (
		<footer className='flex flex-col items-center md:flex-row md:justify-between gap-8 pt-14 pb-20 md:px-10 lg:px-40 md:py-20 lg:pt-24'>
			<Link href={'/'}>
				<Image src={Logo} alt='Suite' />
			</Link>
			<p className='text-sm text-grey tracking-wide'>Copyright - Suite</p>
			<ul className='flex items-center gap-7'>
				<li>
					<Link prefetch={false} href='https://facebook.com'>
						<span className='sr-only'>Facebook Link</span>
						<AiFillFacebook className='h-5 w-5 fill-darkBlue hover:fill-darkBlue/50' />
					</Link>
				</li>
				<li>
					<Link prefetch={false} href='https://twitter.com'>
						<span className='sr-only'>Twitter Link</span>
						<AiOutlineTwitter className='h-4 w-5 fill-darkBlue hover:fill-darkBlue/50' />
					</Link>
				</li>
				<li>
					<Link prefetch={false} href='https://instagram.com'>
						<span className='sr-only'>Instagram Link</span>
						<AiOutlineInstagram className='h-5 w-5 fill-darkBlue hover:fill-darkBlue/50' />
					</Link>
				</li>
			</ul>
		</footer>
	)
}
export default Footer
