const SvgMastodon = (props) => (
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
			d="M7 13.5V9c0-3 5-3 5 0v3M17 13.5V9c0-3-5-3-5 0v3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 17c7.5 1 13 0 13-4V9c0-5.5-4-6.5-6-6.5H9c-3 0-6.067 1-5.863 6.5.074 1.987.036 4.385.363 7 1 8 10.5 5.5 12 5v-1.5S7.5 21 8 17"
		/>
	</svg>
);
export default SvgMastodon;
