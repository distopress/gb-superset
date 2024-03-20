const SvgAlignRightBox = (props) => (
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
			d="m8.005 20.005.011-.01M4.005 20.005l.011-.01M4.005 16.005l.011-.01M4.005 12.005l.011-.01M4.005 8.005l.011-.01M4.005 4.005l.011-.01M8.005 4.005l.011-.01"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12.005 20.005h8v-16h-8z"
		/>
	</svg>
);
export default SvgAlignRightBox;
