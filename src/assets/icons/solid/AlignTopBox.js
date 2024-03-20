const SvgAlignTopBox = (props) => (
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
			d="m4 16 .01-.01M4 20l.01-.01M8 20l.01-.01M12 20l.01-.01M16 20l.01-.01M20 20l.01-.01M20 16l.01-.01"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M4 12V4h16v8z"
		/>
	</svg>
);
export default SvgAlignTopBox;
