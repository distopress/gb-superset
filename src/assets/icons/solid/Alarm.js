const SvgAlarm = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m0 10.5a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v4.25H17a.75.75 0 0 1 0 1.5zM4.4 3.95a.75.75 0 0 0 1.05.15l2-1.5a.75.75 0 1 0-.9-1.2l-2 1.5a.75.75 0 0 0-.15 1.05M19.6 3.95a.75.75 0 0 1-1.05.15l-2-1.5a.75.75 0 1 1 .9-1.2l2 1.5a.75.75 0 0 1 .15 1.05"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgAlarm;
