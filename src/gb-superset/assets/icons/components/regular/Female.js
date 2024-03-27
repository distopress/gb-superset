const SvgFemale = (props) => (
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
			d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v4m0 2v-2m0 0h-2m2 0h2"
		/>
	</svg>
);
export default SvgFemale;
