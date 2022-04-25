interface IYoutube {
	id: string
}
const YouTube = ({ id }: IYoutube) => {
	return (
		<div className="block">
			<iframe
				src={`https://www.youtube.com/embed/${id}`}
				allow="autoplay; encrypted-media"
				title="Embedded YouTube video"
			/>
		</div>
	)
}

export default YouTube
