const SvgDropletCheck = (props) => (
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
			d="M13 21.57A8.132 8.132 0 0 1 6.25 7.75l5.326-5.326a.6.6 0 0 1 .848 0L17.75 7.75A8.13 8.13 0 0 1 19.74 16M16 20l2 2 4-4"
		/>
	</svg>
);
export default SvgDropletCheck;
