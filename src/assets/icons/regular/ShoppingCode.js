const SvgShoppingCode = (props) => (
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
			d="M6 5v2M10 5v6M18 5v1M6 10v6M6 18.5v.5M10 18.5v.5M14 18.5v.5M18 18.5v.5M10 14v2M14 13v3M14 5v5M18 9v7"
		/>
	</svg>
);
export default SvgShoppingCode;
