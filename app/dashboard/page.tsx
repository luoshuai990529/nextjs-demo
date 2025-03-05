async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return {
		message: 'Hello, Dashboard!',
	};
}

export default async function Home() {
	const { message } = await getData();
	return <div className=''>{message}</div>;
}
