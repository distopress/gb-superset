const SvgType = (props) => (
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
			d="M7 16.249a.6.6 0 0 0-.176-.425l-3.648-3.648A.6.6 0 0 1 3 11.75V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.752a.6.6 0 0 1-.176.424l-3.648 3.648a.6.6 0 0 0-.176.425V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m9.5 11.5.5-1.1m4.5 1.1-.5-1.1m0 0L12 6l-2 4.4m4 0h-4"
		/>
	</svg>
);
export default SvgType;
