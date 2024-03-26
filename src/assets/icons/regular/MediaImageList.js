const SvgMediaImageList = (props) => (
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
			d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18 4H4.6a.6.6 0 0 0-.6.6V18M7 16.8l5.444-1.8L21 18M16.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
		/>
	</svg>
);
export default SvgMediaImageList;
