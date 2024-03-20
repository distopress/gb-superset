const SvgSwipeUpGesture = (props) => (
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
			d="M12 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 0V2m0 0 3 3m-3-3L9 5"
		/>
	</svg>
);
export default SvgSwipeUpGesture;
