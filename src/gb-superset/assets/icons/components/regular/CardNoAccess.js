const SvgCardNoAccess = (props) => (
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
			d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M22 9H6m16 0v4M21 16.05A3.5 3.5 0 1 0 16 20.95M21 16.05A3.5 3.5 0 0 1 16 20.95M21 16.05l-5 4.9"
		/>
	</svg>
);
export default SvgCardNoAccess;
