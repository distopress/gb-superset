const SvgArrowArchery = (props) => (
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
			d="m8.611 15.89 12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828zm12.02-12.02h-2.828m2.829 0v2.828"
		/>
	</svg>
);
export default SvgArrowArchery;
