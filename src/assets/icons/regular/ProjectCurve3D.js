const SvgProjectCurve3D = (props) => (
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
			d="M12 21c-4.97 0-9-1.79-9-4s4.03-4 9-4 9 1.79 9 4-4.03 4-9 4M12 2a3 3 0 0 1 3 3v1H9V5a3 3 0 0 1 3-3M3.5 15.5l4-7M20.5 15.5l-4-7"
		/>
	</svg>
);
export default SvgProjectCurve3D;
