import { ReactNode } from 'react'
import { Icon } from '@/components/Icons'

interface IFeatures {
	children: ReactNode
}

interface IFeature {
	title: string
	description: string
	icon: string
	cta: {
		label: string
		href: string
	}
}

export const Features = ({ children }: IFeatures) => {
	return (
		<div className="relative mt-12 text-center">
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{children}
			</div>
		</div>
	)
}

export const Feature = ({ title, description, cta, icon }: IFeature) => {
	return (
		<div key={title} className="pt-6">
			<div className="flow-root rounded-lg bg-gray-100 px-6 pb-8">
				<div className="-mt-6">
					<div>
						<span className="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg">
							<Icon icon={icon} />
						</span>
					</div>
					<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
						{title}
					</h3>
					<p
						className="mt-5 text-base text-gray-500"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
					{cta.href && (
						<a
							href={cta.href}
							target="_blank"
							rel="noreferrer"
							className="text-l border-1 mt-4  block border-primary-300 bg-gray-100 px-4 py-2 text-center font-medium  leading-6 text-primary-500 hover:bg-gray-200 hover:text-primary-600"
						>
							{cta.label}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
