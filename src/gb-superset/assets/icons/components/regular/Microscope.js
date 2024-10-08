const SvgMicroscope = (props) => (
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
			d="M19 22H7m-2 0h2m0 0v-3M19 16h-9M16 2h-4M12 7c-3 0-5 1-5 4v2M16 4.6v6.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M7 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
		/>
	</svg>
);
export default SvgMicroscope;
