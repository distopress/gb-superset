const SvgPcFirewall = (props) => (
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
			d="M7 22h10"
		/>
		<path
			stroke="currentColor"
			d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m12.485 6.121 3.06.765a.59.59 0 0 1 .449.586C15.818 14 12 15 12 15s-3.818-1-3.994-7.528a.59.59 0 0 1 .448-.586l3.06-.765a2 2 0 0 1 .971 0"
		/>
	</svg>
);
export default SvgPcFirewall;
