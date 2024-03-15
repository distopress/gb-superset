const SvgDataTransferWarning = (props) => (
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
			d="M7 4v1M7 9v1M17 12V4m0 0 3 3m-3-3-3 3M20 16v2M20 22.01l.01-.011M7 14v6m0 0 3-3m-3 3-3-3"
		/>
	</svg>
);
export default SvgDataTransferWarning;
