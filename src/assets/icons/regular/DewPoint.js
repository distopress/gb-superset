const SvgDewPoint = (props) => (
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
			d="M5 12a5 5 0 1 0 6 0M5 12V3h6v9M11 3h2M11 6h2M11 9h2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V9"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			d="M19 3s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C16.01 5.992 19 3 19 3"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgDewPoint;
