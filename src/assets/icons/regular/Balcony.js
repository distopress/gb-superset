const SvgBalcony = (props) => (
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
			d="M4 13v8M8 13v8M16 13v8M12 13v8M20 13v8M2 21h20M2 13h20M18 10V3.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V10"
		/>
	</svg>
);
export default SvgBalcony;
