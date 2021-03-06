import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getPostSlugs } from '@/src/api'

import { Features, Feature } from '@/components/Features'
import Intro from '@/components/Intro'
import { IMDXPost } from '@/src/@types'

export default function PostPage({ post }: { post: IMDXPost }) {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<MDXRemote {...post.source} components={{ Intro, Features, Feature }} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string }
	const { content, meta } = getPostFromSlug(slug)
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				rehypeHighlight,
			],
		},
	})

	return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getPostSlugs().map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
