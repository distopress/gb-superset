const SvgAppNotification = (props) => (
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
			d="M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
			clipRule="evenodd"
		/>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M14.527 2.25a5.25 5.25 0 0 0 7.223 7.223V15A6.75 6.75 0 0 1 15 21.75H9A6.75 6.75 0 0 1 2.25 15V9A6.75 6.75 0 0 1 9 2.25z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgAppNotification;
