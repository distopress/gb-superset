const SvgLensPlus = (props) => (
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
			d="M2.992 6h3m3 0h-3m0 0V3m0 3v3M2.112 13.5C2.835 18.311 6.987 22 12 22c5.523 0 10-4.477 10-10 0-5.013-3.689-9.165-8.5-9.888"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17.197 9q-.15-.259-.323-.5M17.811 13.5a6.01 6.01 0 0 1-4.311 4.311"
		/>
	</svg>
);
export default SvgLensPlus;
