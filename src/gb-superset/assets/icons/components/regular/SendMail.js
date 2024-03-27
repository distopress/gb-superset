const SvgSendMail = (props) => (
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
			d="m9 9 4.5 3L18 9M3 13.5h2M1 10.5h4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M5 7.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5"
		/>
	</svg>
);
export default SvgSendMail;
