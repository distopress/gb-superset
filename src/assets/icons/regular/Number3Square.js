const SvgNumber3Square = (props) => (
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
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.5 10c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2-.62 2-2 2M9.5 14c0 1.105 1.12 2 2.5 2s2.5-.895 2.5-2-.62-2-2-2"
		/>
	</svg>
);
export default SvgNumber3Square;
