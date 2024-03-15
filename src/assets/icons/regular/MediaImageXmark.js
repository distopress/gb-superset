const SvgMediaImageXmark = (props) => (
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
			d="m3 16 7-3 4 1.818M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4M16.879 21.121 19 19m2.121-2.121L19 19m0 0-2.121-2.121M19 19l2.121 2.121"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"
		/>
	</svg>
);
export default SvgMediaImageXmark;
