import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPageFromSlug, getPageSlugs } from '@/src/api'

import { Features, Feature } from '@/components/Features'
import Intro from '@/components/Intro'
import { IMDXPage } from '@/src/@types'

export default function Page({ page }: { page: IMDXPage }) {
	return (
		<>
			<Head>
				<title>{page.meta.title}</title>
			</Head>
			<MDXRemote {...page.source} components={{ Intro, Features, Feature }} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { page } = params as { page: string }
	const { content, meta } = getPageFromSlug(page)
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				rehypeHighlight,
			],
		},
	})

	return { props: { page: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getPageSlugs().map((page) => ({ params: { page } }))

	return {
		paths,
		fallback: false,
	}
}
