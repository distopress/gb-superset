const SvgAtSignCircle = (props) => (
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
			d="M16.278 17.541A7 7 0 1 1 19 12c0 4.278-5 3.722-5 1V8.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14 12v-.5a2.5 2.5 0 0 0-5 0v.5M14 12v.5a2.5 2.5 0 0 1-5 0V12"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
		/>
	</svg>
);
export default SvgAtSignCircle;
