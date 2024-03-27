const SvgBank = (props) => (
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
			d="M3 9.5 12 4l9 5.5M5 20h14M10 9h4M6 17v-5M10 17v-5M14 17v-5M18 17v-5"
		/>
	</svg>
);
export default SvgBank;
