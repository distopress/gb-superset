const SvgAlarm = (props) => (
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
			d="M17 13h-5V8M5 3.5 7 2M19 3.5 17 2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
		/>
	</svg>
);
export default SvgAlarm;
