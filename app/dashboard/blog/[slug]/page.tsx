// app/blog/[slug]/page.js
export default function Page({ params }: any) {
	return <div>My Post: {params.slug}</div>;
}
