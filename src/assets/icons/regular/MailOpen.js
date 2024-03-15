const SvgMailOpen = (props) => (
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
			d="m7 12 5 3.5 5-3.5"
		/>
		<path
			stroke="currentColor"
			d="M2 20V9.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 22 9.132V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
		/>
	</svg>
);
export default SvgMailOpen;
