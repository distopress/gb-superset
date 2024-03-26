const SvgCompress = (props) => (
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
			d="M18 12H6M12 22v-6m0 0 3 3m-3-3-3 3M12 2v6m0 0 3-3m-3 3L9 5"
		/>
	</svg>
);
export default SvgCompress;
