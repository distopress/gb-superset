const SvgHexagonDice = (props) => (
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
			d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17 15H7l5-8z"
		/>
		<path
			stroke="currentColor"
			strokeLinejoin="round"
			d="M2.5 6.5 12 7M2.5 6.5 7 15M21.5 6.5 17 15M21.5 6.5 12 7V1M21.5 17.5 17 15M2.5 17.5 7 15M7 15l5 8 5-8"
		/>
	</svg>
);
export default SvgHexagonDice;
