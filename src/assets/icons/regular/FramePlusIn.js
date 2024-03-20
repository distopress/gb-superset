const SvgFramePlusIn = (props) => (
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
			strokeMiterlimit={1.5}
			d="M4.998 2H2v2.998h2.998zM4.999 3.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998zM21.997 2.001H19v2.998h2.998zM21.997 19.001H19v2.998h2.998z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 12h3m3 0h-3m0 0V9m0 3v3"
		/>
	</svg>
);
export default SvgFramePlusIn;
