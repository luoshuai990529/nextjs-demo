// /dashboard/about/page.js
import { use } from 'react';

async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return {
		message: 'Hello, About!',
	};
}

export default function About() {
	const { message } = use(getData());
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <div>{message}</div>
		</div>
	);
}
