import Head from 'next/head'

import { IPostMeta } from '@/@types/index'
import { getAllPosts } from '@/src/api'

import Articles from '@/components/Articles'

export default function Home({ posts }: { posts: IPostMeta[] }) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<h1>Articles</h1>
			<Articles posts={posts} />
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts()
		.slice(0, 9)
		.map((post) => post.meta)

	return { props: { posts } }
}
