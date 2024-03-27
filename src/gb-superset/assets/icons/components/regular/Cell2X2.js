const SvgCell2X2 = (props) => (
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
			d="M21 3.6V12h-9V3h8.4a.6.6 0 0 1 .6.6ZM21 20.4V12h-9v9h8.4a.6.6 0 0 0 .6-.6ZM3 12V3.6a.6.6 0 0 1 .6-.6H12v9zM3 12v8.4a.6.6 0 0 0 .6.6H12v-9z"
		/>
	</svg>
);
export default SvgCell2X2;
