const SvgIndustry = (props) => (
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
			d="M18 10c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2M18 21h3v-9h-3v4.5m0 4.5v-4.5m0 4.5H3v-4l3.5-3 4 2.5 4-2.5 3.5 2.5M21 10c0-6-4-6-4-6s4 .5 4-2"
		/>
	</svg>
);
export default SvgIndustry;
