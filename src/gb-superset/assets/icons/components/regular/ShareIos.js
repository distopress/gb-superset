const SvgShareIos = (props) => (
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
			d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6M12 15V3m0 0L8.5 6.5M12 3l3.5 3.5"
		/>
	</svg>
);
export default SvgShareIos;
