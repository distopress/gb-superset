const SvgReports = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<rect width={5} height={18} x={16} y={3} fill="currentColor" rx={2} />
		<rect width={5} height={12} x={9.5} y={9} fill="currentColor" rx={2} />
		<rect width={5} height={5} x={3} y={16} fill="currentColor" rx={2} />
	</svg>
);
export default SvgReports;
