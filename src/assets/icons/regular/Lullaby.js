const SvgLullaby = (props) => (
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
			d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.49 9.49 0 0 0 3 11.507"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M19 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H21"
		/>
	</svg>
);
export default SvgLullaby;
