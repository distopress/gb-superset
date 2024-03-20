const SvgCardWallet = (props) => (
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
			d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2ZM7 7V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6V7M10 3v4M12 3v4"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
		/>
	</svg>
);
export default SvgCardWallet;
