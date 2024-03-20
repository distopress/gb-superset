const SvgSquareCursor = (props) => (
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
			strokeWidth={1.5}
			d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			d="M20.879 16.918c.494.304.463 1.043-.045 1.1l-2.567.292-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"
		/>
	</svg>
);
export default SvgSquareCursor;
