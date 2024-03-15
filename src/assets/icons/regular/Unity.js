const SvgUnity = (props) => (
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
			d="M4 13h9.5M4 13l4 4.5M4 13l4-4.5m5.5 4.5 5-9m-5 9 5 7m0-16-6 1m6-1L20 9.5M18.5 20l1.5-5.5M18.5 20l-6-.5"
		/>
	</svg>
);
export default SvgUnity;
