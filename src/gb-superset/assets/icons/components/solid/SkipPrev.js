const SvgSkipPrev = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M6 7v10"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M17.028 5.267a.6.6 0 0 1 .972.471v12.524a.6.6 0 0 1-.972.47l-7.931-6.261a.6.6 0 0 1 0-.942z"
		/>
	</svg>
);
export default SvgSkipPrev;
