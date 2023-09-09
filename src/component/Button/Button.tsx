import Link from "next/link";
export default function Button({ url, children, style }) {
	return (
		<Link href={url}>
			<button
				className={`border py-2 px-3 rounded text-white bg-black mt-5 ${style}`}
			>
				{children}
			</button>
		</Link>
	);
}
