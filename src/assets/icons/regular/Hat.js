const SvgHat = (props) => (
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
			d="M7 17v-2a7 7 0 1 1 14 0v2zm0 0H2M14 6.01l.01-.011"
		/>
	</svg>
);
export default SvgHat;
