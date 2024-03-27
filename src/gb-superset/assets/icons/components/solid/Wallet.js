const SvgWallet = (props) => (
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
			fill="currentColor"
			fillRule="evenodd"
			d="M5 6.25A2.75 2.75 0 0 0 2.25 9v9A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25zm11.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
			clipRule="evenodd"
		/>
		<path fill="currentColor" d="M16.485 3.069A2 2 0 0 1 19 5H9z" />
	</svg>
);
export default SvgWallet;
