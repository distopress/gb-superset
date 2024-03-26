const SvgUserCrown = (props) => (
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
			d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5 20v-1a7 7 0 0 1 10-6.326M21 22l1-6-3.5 1.8L17 16l-1.5 1.8L12 16l1 6z"
		/>
	</svg>
);
export default SvgUserCrown;
