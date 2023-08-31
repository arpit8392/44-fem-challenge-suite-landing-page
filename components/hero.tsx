import Image from 'next/image'
import Link from 'next/link'

const metrics = [
	{
		title: 'Companies',
		value: '2K+',
	},
	{
		title: 'Languages',
		value: '8',
	},
	{
		title: 'Leads',
		value: '1.2M',
	},
]

const Hero = () => {
	return (
		<div className='grid grid-cols-1 gap-14 mt-8 mb-56 md:mb-72 lg:mb-56 lg:grid-cols-6 lg:gap-0'>
			<div className='flex flex-col gap-14 relative lg:col-span-5'>
				<div className='space-y-8 z-50 md:mt-24'>
					<p className='text-darkBlue text-[38px]/[44px] tracking-[-0.528px] md:text-[56px]/[64px] lg:text-[72px]/[78px] lg:tracking-[-1px] '>
						A{' '}
						<span className='font-bold relative before:absolute before:content-curved-pattern-1 before:-z-10 before:-top-10 lg:before:-top-20 before:right-0'>
							super solution
						</span>{' '}
						<br /> for your <span className='font-bold'>business.</span>
					</p>
					<p className='text-base/7 tracking-[0.09px] text-grey md:max-w-xs lg:max-w-sm'>
						Our marketing and sales automations help you scale your outreach to
						get more leads for your company.
					</p>
					<Link
						href={'#'}
						className='block w-fit px-8 py-4 text-lg font-bold bg-darkBlue text-creamWhite tracking-[-0.18px] rounded-md hover:bg-gradient-primary'>
						Request Beta Access
					</Link>
				</div>
				<div className='-z-20 md:absolute md:right-0 lg:right-auto lg:left-1/2 h-full'>
					<Image
						priority
						src='/assets/image-hero-landscape.png'
						alt='Hero Image'
						width={343}
						height={240}
						className='w-full block md:hidden'
					/>
					<Image
						priority
						src='/assets/image-hero-portrait.png'
						alt='Hero Image'
						width={350}
						height={600}
						className='hidden md:block lg:hidden'
					/>
					<Image
						priority
						src='/assets/image-hero-portrait@2x.png'
						alt='Hero Image'
						width={350}
						height={600}
						className='hidden lg:block'
					/>
				</div>
			</div>

			<ul className='flex flex-col items-center text-center gap-8 md:flex-row md:justify-evenly lg:col-auto lg:flex-col lg:text-left lg:items-start lg:gap-16 md:mt-40 lg:mt-28 lg:-ml-20'>
				{metrics.map((metric) => (
					<li key={metric.title}>
						<p className='text-5xl/[56px] font-bold text-darkBlue'>
							{metric.value}
						</p>
						<p className='text-grey uppercase tracking-[2.5px]'>
							{metric.title}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Hero
