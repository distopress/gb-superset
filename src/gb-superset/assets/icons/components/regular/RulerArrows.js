const SvgRulerArrows = (props) => (
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
			d="M15.4 22H8.6a.6.6 0 0 1-.6-.6V2.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6M16 17h-3M16 7h-3M13 12h10m0 0-2 2m2-2-2-2M1 12l2-2m-2 2 2 2m-2-2h7"
		/>
	</svg>
);
export default SvgRulerArrows;
