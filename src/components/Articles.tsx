import Link from 'next/link'
import type { IPostMeta } from '@/@types/index'

export default function Articles({ posts }: { posts: IPostMeta[] }) {
	return (
		<div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
			{posts.map((post) => (
				<div key={post.title}>
					<p className="text-sm text-gray-500">
						<time dateTime={post.date}>{post.date}</time>
					</p>
					<p className="mt-2 block text-xl font-semibold text-gray-900">
						{post.title}
					</p>
					<div className="flex flex-row justify-start space-x-4">
						{post.tags.map((tag) => (
							<Link key={tag} href={`/tags/${tag}`}>
								<a className="text-sm font-medium text-secondary-600">{tag}</a>
							</Link>
						))}
					</div>
					<p className="mt-3 block text-base text-gray-500">
						{post.description}
					</p>
					<div className="text-pr mt-3">
						<Link href={`/blog/${post.slug}`}>
							<a className="text-base font-semibold text-primary-600 hover:text-primary-500">
								Read full story
							</a>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
