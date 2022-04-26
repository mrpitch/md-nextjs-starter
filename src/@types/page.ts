export interface IPage {
	content: string
	meta: IPageMeta
}

export interface IPageMeta {
	description: string
	page: string
	title: string
	tags: string[]
	date: string
}

export interface IMDXPage {
	//source: MDXRemoteSerializeResult<Record<string, unknown>>
	source: any
	meta: IPageMeta
}
