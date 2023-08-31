import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Testimony from '@/components/testimony'

export default function Home() {
	return (
		<main>
			<section className='px-4 md:px-10 lg:px-40'>
				<Hero />
			</section>
			<section className='relative'>
				<div className='absolute h-[420px] md:h-[640px] lg:h-[464px] w-full bg-cream bottom-0 -z-50' />
				<div className='md:px-10 lg:px-40'>
					<Testimony />
				</div>
				<Footer />
			</section>
		</main>
	)
}
