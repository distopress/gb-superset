const SvgAlignBottomBox = (props) => (
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
			d="m4 8 .01.01M4 4l.01.01M8 4l.01.01M12 4l.01.01M16 4l.01.01M20 4l.01.01M20 8l.01.01"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M4 12v8h16v-8z"
		/>
	</svg>
);
export default SvgAlignBottomBox;
