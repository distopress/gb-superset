const SvgAsterisk = (props) => (
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
			d="M12 22V2M20.572 17.55 3.428 7.249M3.428 17.55 20.572 7.249"
		/>
	</svg>
);
export default SvgAsterisk;
