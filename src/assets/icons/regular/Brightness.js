const SvgBrightness = (props) => (
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
			d="m12 7 1.53 1.304 2.006.16.16 2.005L17 12l-1.305 1.53-.16 2.006-2.004.16L12 17l-1.53-1.305-2.006-.16-.16-2.004L7 12l1.304-1.53.16-2.006 2.005-.16z"
		/>
		<path
			fill="currentColor"
			d="M10.47 15.696 12 17V7l-1.53 1.304-2.006.16-.16 2.005L7 12l1.304 1.53.16 2.006z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"
		/>
	</svg>
);
export default SvgBrightness;
