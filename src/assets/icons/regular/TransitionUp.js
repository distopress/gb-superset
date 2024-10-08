const SvgTransitionUp = (props) => (
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
			d="M18 22H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 8V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2M12 14V6m0 0L9 9m3-3 3 3"
		/>
	</svg>
);
export default SvgTransitionUp;
