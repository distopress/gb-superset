const SvgPngFormat = (props) => (
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
			d="M4.5 15v-3m0 0V9h3v3zM10.5 15V9l3 6V9M19.5 9h-3v6h3v-2.4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"
		/>
	</svg>
);
export default SvgPngFormat;
