const SvgUpload = (props) => (
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
			d="M6 20h12M12 16V4m0 0 3.5 3.5M12 4 8.5 7.5"
		/>
	</svg>
);
export default SvgUpload;
