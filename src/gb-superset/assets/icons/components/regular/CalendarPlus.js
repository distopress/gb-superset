const SvgCalendarPlus = (props) => (
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
			d="M13 21H5a2 2 0 0 1-2-2v-9h18v3m-6-9V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2M7 2v4M21 10V6a2 2 0 0 0-2-2h-.5M14.992 18h3M21 18h-3.008m0 0v-3m0 3v3"
		/>
	</svg>
);
export default SvgCalendarPlus;
