const SvgFrameSimple = (props) => (
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
			d="M4.998 2H2v2.998h2.998zM4.998 3.501h14M3.499 4.998V19M20.497 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998zM21.996 2.002h-2.998V5h2.998zM21.996 19.002h-2.998V22h2.998z"
		/>
	</svg>
);
export default SvgFrameSimple;
