const SvgKeyframePosition = (props) => (
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
			fill="currentColor"
			fillRule="evenodd"
			d="M12 16.25a.75.75 0 0 1 .75.75v2.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h8.25V17a.75.75 0 0 1 .75-.75"
			clipRule="evenodd"
		/>
		<path
			fill="currentColor"
			d="M10.963 3.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"
		/>
	</svg>
);
export default SvgKeyframePosition;
