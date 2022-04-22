import { MDXRemoteSerializeResult } from 'next-mdx-remote'

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

export interface IMDXPost {
	//source: MDXRemoteSerializeResult<Record<string, unknown>>
	source: any
	meta: IPostMeta
}
