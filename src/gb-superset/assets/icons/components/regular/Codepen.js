const SvgCodepen = (props) => (
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
			d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15 3 9l9-6 9 6z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m12 21-9-6 9-6 9 6z"
		/>
	</svg>
);
export default SvgCodepen;
