const SvgTextBox = (props) => (
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
			d="M12 8v8m0-8H8m4 0h4"
		/>
		<path
			stroke="currentColor"
			strokeLinejoin="round"
			d="M21 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.5m18-3V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5.5M19.5 13.5v-3h3v3zM1.5 13.5v-3h3v3z"
		/>
	</svg>
);
export default SvgTextBox;
