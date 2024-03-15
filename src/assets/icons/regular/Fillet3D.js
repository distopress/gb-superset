const SvgFillet3D = (props) => (
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
			d="M2 20v-4C2 8.268 8.268 2 16 2h4M20.839 20.84h-3.536m3.536 0v-3.536m0 3.535L18 18"
		/>
		<path
			stroke="currentColor"
			strokeDasharray="2 3"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m9 9 7 7"
		/>
	</svg>
);
export default SvgFillet3D;
