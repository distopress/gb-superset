const SvgHandCash = (props) => (
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
			d="m2 11 2.807-3.157A4 4 0 0 1 7.797 6.5H8M2 19.5h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"
		/>
		<path
			stroke="currentColor"
			d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 10.01l.01-.011M10.5 10.01l.01-.011"
		/>
	</svg>
);
export default SvgHandCash;
