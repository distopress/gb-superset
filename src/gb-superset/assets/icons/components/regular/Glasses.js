const SvgGlasses = (props) => (
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
			d="M2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0V6M22 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0V6M14 14h-4"
		/>
	</svg>
);
export default SvgGlasses;
