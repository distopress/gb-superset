const SvgAppleWallet = (props) => (
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
			d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"
		/>
		<path
			stroke="currentColor"
			d="M3 15h6.4c.331 0 .605.278.75.576.206.423.694.924 1.85.924s1.644-.5 1.85-.924c.145-.298.419-.576.75-.576H21M3 7h18M3 11h18"
		/>
	</svg>
);
export default SvgAppleWallet;
