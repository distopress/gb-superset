const SvgKeyframePlus = (props) => (
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
			d="M19 1.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V8a.75.75 0 0 1-1.5 0V5.75H16a.75.75 0 0 1 0-1.5h2.25V2a.75.75 0 0 1 .75-.75"
			clipRule="evenodd"
		/>
		<path
			fill="currentColor"
			d="M7.945 5.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"
		/>
	</svg>
);
export default SvgKeyframePlus;
