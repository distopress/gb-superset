const SvgTree = (props) => (
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
			d="M12 22v-8m0-4v4m0 0 4-2M17 7A5 5 0 0 0 7 7M12 18H7.5a5.5 5.5 0 1 1 0-11H9M12 18h4.5A5.5 5.5 0 0 0 17 7.022"
		/>
	</svg>
);
export default SvgTree;
