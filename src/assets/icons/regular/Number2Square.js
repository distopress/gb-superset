const SvgNumber2Square = (props) => (
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
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.5 10.8v-.4c0-1.325 1.033-2.4 2.308-2.4s2.307 1.075 2.307 2.4c0 .457-.122.884-.336 1.248C12.73 13.44 9.5 16 9.5 16h5"
		/>
	</svg>
);
export default SvgNumber2Square;
