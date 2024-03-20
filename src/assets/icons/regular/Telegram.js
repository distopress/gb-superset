const SvgTelegram = (props) => (
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
			d="M21 5 2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5 9 13.5m0 0V19l3.249-3.277"
		/>
	</svg>
);
export default SvgTelegram;
