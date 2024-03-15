const SvgAlignLeftBox = (props) => (
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
			d="m16.005 3.995-.011.01M20.005 3.995l-.011.01M20.005 7.995l-.011.01M20.005 11.995l-.011.01M20.005 15.995l-.011.01M20.005 19.995l-.011.01M16.005 19.995l-.011.01"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12.005 3.995h-8v16h8z"
		/>
	</svg>
);
export default SvgAlignLeftBox;
