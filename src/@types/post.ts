export interface IPost {
	content: string
	meta: IPostMeta
}

export interface IPostMeta {
	description: string
	slug: string
	title: string
	tags: string[]
	date: string
}
