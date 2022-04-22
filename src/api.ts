import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { IPage, IPageMeta } from '@/@types/index'

const CONTENT_PATH = path.join(process.cwd(), 'src/content')

export const getSlugs = (): string[] => {
	const paths = sync(`${CONTENT_PATH}/*.mdx`)

	return paths.map((path) => {
		const parts = path.split('/')
		const fileName = parts[parts.length - 1]
		const [slug, _ext] = fileName.split('.')
		return slug
	})
}

export const getAllPages = () => {
	const pages = getSlugs()
		.map((slug) => getPageFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1
			if (a.meta.date < b.meta.date) return -1
			return 0
		})
		.reverse()
	return pages
}

export const getPageFromSlug = (slug: string): IPage => {
	const pagePath = path.join(CONTENT_PATH, `${slug}.mdx`)
	const source = fs.readFileSync(pagePath)
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
