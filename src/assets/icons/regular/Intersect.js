const SvgIntersect = (props) => (
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
			d="M21 13.5v3M13.5 21h3M16.5 9H9.6a.6.6 0 0 0-.6.6v6.9M10.5 21h-.9a.6.6 0 0 1-.6-.6v-.9M21 19.5v.9a.6.6 0 0 1-.6.6h-.9M19.5 9h.9a.6.6 0 0 1 .6.6v.9M3 10.5v-3M7.5 3h3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M7.5 15h6.9a.6.6 0 0 0 .6-.6V7.5M4.5 15h-.9a.6.6 0 0 1-.6-.6v-.9M3 4.5v-.9a.6.6 0 0 1 .6-.6h.9M13.5 3h.9a.6.6 0 0 1 .6.6v.9"
		/>
	</svg>
);
export default SvgIntersect;
