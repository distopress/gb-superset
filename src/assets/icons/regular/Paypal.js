const SvgPaypal = (props) => (
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
			d="M3 17.5 6 3h7c6 0 6 9 0 9H8.7l-1.2 5.5z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m6.8 21 3-14.5h7c6 0 6 9 0 9h-4.3L11.3 21z"
		/>
	</svg>
);
export default SvgPaypal;
