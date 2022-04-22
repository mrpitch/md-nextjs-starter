export interface IPage {
	content: string
	meta: IPageMeta
}

export interface IPageMeta {
	description: string
	slug: string
	title: string
	tags: string[]
	date: string
}
