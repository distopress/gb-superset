const SvgDepth = (props) => (
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
			d="M2 20h20M5 4h14M3 16.01l.01-.011M21.01 16.01l-.01-.011M4 12.01l.01-.011M20.01 12.01l-.01-.011M5 8.01l.01-.011M19.01 8.01 19 7.999M12 7v10m0-10-1.5 1.5M12 7l1.5 1.5M12 17l-3-3m3 3 3-3"
		/>
	</svg>
);
export default SvgDepth;
