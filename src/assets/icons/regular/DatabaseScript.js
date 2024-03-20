const SvgDatabaseScript = (props) => (
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
			d="M22 14V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"
		/>
	</svg>
);
export default SvgDatabaseScript;
