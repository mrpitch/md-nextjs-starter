import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs } from '@/src/api'

import YouTubePlayer from '@/components/YouTubePlayer'
import { IPostMeta } from '@/@types/index'

interface MDXPost {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
	meta: IPostMeta
}

export default function PostPage({ post }: { post: MDXPost }) {
	return (
		<>
			<Head>
				<title>{post.meta.title}</title>
			</Head>
			<h1>{post.meta.title}</h1>
			{/* <MDXRemote {...post.source} components={{ YouTubePlayer, Image }} /> */}
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
	const paths = getSlugs().map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
