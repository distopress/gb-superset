const SvgTestTube = (props) => (
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
			d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426 1.967-1.065-6.554-4.588-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"
		/>
	</svg>
);
export default SvgTestTube;
