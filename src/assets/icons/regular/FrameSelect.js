const SvgFrameSelect = (props) => (
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
			d="M4.998 2H2v2.998h2.998zM4.999 3.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998zM21.997 2.002H19V5h2.998zM21.997 19.002H19V22h2.998z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			d="m10.997 15.002-3-7 7 3-2.998.999zM11.999 12.002l2.998 3z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgFrameSelect;
