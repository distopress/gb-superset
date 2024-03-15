const SvgDataTransferCheck = (props) => (
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
			d="m14 19 3 3 5-5M17 14V4m0 0 3 3m-3-3-3 3M7 4v16m0 0 3-3m-3 3-3-3"
		/>
	</svg>
);
export default SvgDataTransferCheck;
