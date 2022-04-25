import {
	CloudUploadIcon,
	CogIcon,
	LockClosedIcon,
	RefreshIcon,
	ServerIcon,
	ShieldCheckIcon,
} from '@heroicons/react/outline'

interface IIcons {
	icon: string
}

export const Icon = ({ icon }: IIcons) => {
	switch (icon) {
		case 'CloudUploadIcon':
			return (
				<CloudUploadIcon className="h-6 w-6 text-white" aria-hidden="true" />
			)
		case 'CogIcon':
			return <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />
			break
		case 'LockClosedIcon':
			return (
				<LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
			)
			break
		case 'RefreshIcon':
			return <RefreshIcon className="h-6 w-6 text-white" aria-hidden="true" />
			break
		case 'ServerIcon':
			return <ServerIcon className="h-6 w-6 text-white" aria-hidden="true" />
			break
		default:
			return (
				<ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
			)
	}
}
