const SvgAirConditioner = (props) => (
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
			d="M22 3.6V11H2V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6M18 7h1M2 11l.79 2.584A2 2 0 0 0 4.702 15H6M22 11l-.79 2.584A2 2 0 0 1 19.298 15H18M9.5 14.5s0 7-3.5 7M14.5 14.5s0 7 3.5 7M12 14.5v7"
		/>
	</svg>
);
export default SvgAirConditioner;
