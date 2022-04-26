import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { IPage, IPost } from '@/@types/index'

const POST_PATH = path.join(process.cwd(), 'src/content/posts')
const PAGE_PATH = path.join(process.cwd(), 'src/content')

export const getPageSlugs = (): string[] => {
	const paths = sync(`${PAGE_PATH}/*.mdx`)

	return paths.map((path) => {
		const parts = path.split('/')
		const fileName = parts[parts.length - 1]
		const [page, _ext] = fileName.split('.')

		return page
	})
}

export const getPageFromSlug = (page: string): IPage => {
	const pagePath = path.join(PAGE_PATH, `${page}.mdx`)
	const source = fs.readFileSync(pagePath)
	const { content, data } = matter(source)

	return {
		content,
		meta: {
			page,
			description: data.description ?? '',
			title: data.title ?? page,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
		},
	}
}

export const getPostSlugs = (): string[] => {
	const paths = sync(`${POST_PATH}/*.mdx`)

	return paths.map((path) => {
		const parts = path.split('/')
		const fileName = parts[parts.length - 1]
		const [slug, _ext] = fileName.split('.')
		return slug
	})
}

export const getAllPosts = () => {
	const posts = getPostSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1
			if (a.meta.date < b.meta.date) return -1
			return 0
		})
		.reverse()
	return posts
}

export const getPostFromSlug = (slug: string): IPost => {
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
