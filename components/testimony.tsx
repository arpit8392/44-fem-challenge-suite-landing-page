import Image from 'next/image'

const Testimony = () => {
	return (
		<section className='bg-darkBlue text-creamWhite rounded-2xl px-4 py-16 flex flex-col items-center gap-10 lg:flex-row lg:py-0 lg:px-32 lg:justify-center'>
			<div className='-mt-60 md:bg-blur-pattern lg:-mt-10'>
				<Image
					src={'/assets/image-jeremy-small.png'}
					alt='Image of CEO writing with pen on his mobile'
					width={252}
					height={402}
					className='md:hidden'
				/>
				<Image
					src={'/assets/image-jeremy-small@2x.png'}
					alt='Image of CEO writing with pen on his mobile'
					width={252}
					height={402}
					className='hidden md:block lg:hidden'
				/>
				<Image
					src={'/assets/image-jeremy-large@2x.png'}
					alt='Image of CEO writing with pen on his mobile'
					width={395}
					height={632}
					className='hidden lg:block'
				/>
			</div>

			<div>
				<Image
					src='/assets/pattern-curved-line-2.svg'
					alt=''
					width={66}
					height={54}
				/>
			</div>

			<div className='space-y-10 text-center lg:text-left lg:ml-14'>
				<p className='text-[40px] tracking-tight lg:text-5xl lg:tracking-[-0.5px]'>
					It just <span className='font-bold'>works.</span>
				</p>
				<p className='text-cream text-lg/8 tracking-[0.09px] font-light lg:text-xl/9 lg:tracking-[0.1px] lg:max-w-md'>
					“I really like how it is an all-in-one solution that handle many of
					the tasks that you would normally need separate tools to do the same
					job. This thing is a miracle worker.”
				</p>
				<div>
					<p className='tracking-[-0.18px] font-bold text-lg/8 uppercase'>
						Jeremy Robinson
					</p>
					<p className='text-cream tracking-[2.5px]'>CMO, FYLO</p>
				</div>
			</div>
		</section>
	)
}
export default Testimony
