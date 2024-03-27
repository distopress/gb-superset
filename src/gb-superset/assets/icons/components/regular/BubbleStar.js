const SvgBubbleStar = (props) => (
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
			d="m17.306 4.113.909-1.927a.312.312 0 0 1 .57 0l.91 1.927 2.032.311c.261.04.365.376.177.568l-1.471 1.5.347 2.118c.044.272-.229.48-.462.351l-1.818-1-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118-1.47-1.5c-.19-.192-.085-.528.176-.568z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"
		/>
	</svg>
);
export default SvgBubbleStar;
