const SvgShuffle = (props) => (
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
			d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m20 5 2 2-2 2M22 18c-3 0-8.5 0-10.5-5.5S5 7 2 7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m20 20 2-2-2-2"
		/>
	</svg>
);
export default SvgShuffle;
