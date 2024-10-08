const SvgPineTree = (props) => (
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
			d="M12 2 7 6.643S10.042 7 12 7s5-.357 5-.357zM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3"
		/>
	</svg>
);
export default SvgPineTree;
