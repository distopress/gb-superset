const SvgEuroSquare = (props) => (
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
			d="M16 7.503A4.75 4.75 0 0 0 13.87 7C11.18 7 9 9.239 9 12s2.18 5 4.87 5c.764 0 1.487-.18 2.13-.503M8 11h6M8 13h6"
		/>
	</svg>
);
export default SvgEuroSquare;
