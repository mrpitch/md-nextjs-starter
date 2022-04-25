interface IIntro {
	headline: string
	subline: string
	tagline: string
}

const Intro = ({ headline, subline, tagline }: IIntro) => {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="text-center">
				<h2 className="text-base font-semibold uppercase tracking-wide text-primary-600">
					{tagline}
				</h2>
				<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
					{headline}
				</p>
				<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
					{subline}
				</p>
			</div>
		</div>
	)
}

export default Intro
