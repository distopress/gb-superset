const SvgPeerlist = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z"
		/>
	</svg>
);
export default SvgPeerlist;
