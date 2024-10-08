const SvgPercentageCircle = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.5 13a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 8.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m8.22-1.03a.75.75 0 1 1 1.06 1.06l-8 8a.75.75 0 0 1-1.06-1.06z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgPercentageCircle;
