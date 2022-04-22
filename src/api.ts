import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { IPage, IPageMeta } from '@/@types/index'

const POST_PATH = path.join(process.cwd(), 'src/content/posts')

export const getSlugs = (): string[] => {
	const paths = sync(`${POST_PATH}/*.mdx`)

	return paths.map((path) => {
		const parts = path.split('/')
		const fileName = parts[parts.length - 1]
		const [slug, _ext] = fileName.split('.')
		return slug
	})
}

export const getAllPosts = () => {
	const pages = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1
			if (a.meta.date < b.meta.date) return -1
			return 0
		})
		.reverse()
	return pages
}

export const getPostFromSlug = (slug: string): IPage => {
	const postPath = path.join(POST_PATH, `${slug}.mdx`)
	const source = fs.readFileSync(postPath)
	const { content, data } = matter(source)

	return {
		content,
		meta: {
			slug,
			description: data.description ?? '',
			title: data.title ?? slug,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
		},
	}
}
