const SvgGamepad = (props) => (
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
			d="M17.5 17.5c2.5 3.5 6.449.915 5.5-2.5-1.425-5.129-2.2-7.984-2.603-9.492A2.03 2.03 0 0 0 18.438 4H5.562c-.918 0-1.718.625-1.941 1.515C2.78 8.863 2.033 11.802 1.144 15c-.948 3.415 3 6 5.5 2.5M18 8.5l.011.01M16.49 7l.011.01M16.49 10l.011.01M15 8.5l.011.01M7 7v3M5.5 8.5h3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
	</svg>
);
export default SvgGamepad;
