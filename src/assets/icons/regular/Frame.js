const SvgFrame = (props) => (
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
			d="M4.998 2.001H2v2.998h2.998zM4.998 10.502H2V13.5h2.998zM20.498 5v5.503M3.5 5v5.503M20.498 13.502v5.502M3.5 13.502v5.502M4.999 20.502h5.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			strokeWidth={1.22}
			d="M4.999 3.503h5.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			d="M13.498 20.499h5.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			strokeWidth={1.22}
			d="M13.498 3.501h5.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={1.5}
			d="M4.998 19.001H2v2.998h2.998zM21.997 2.002H19V5h2.998zM13.497 2H10.5v2.998h2.998zM21.997 10.503H19V13.5h2.998zM21.997 19.002H19V22h2.998zM13.497 19H10.5v2.998h2.998z"
		/>
	</svg>
);
export default SvgFrame;
