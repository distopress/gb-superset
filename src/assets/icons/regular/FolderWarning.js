const SvgFolderWarning = (props) => (
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
			d="M18 3v4M18 11.01l.01-.011M22 7v12.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V11"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14 7h-1.278a.6.6 0 0 1-.39-.144L9.169 4.144A.6.6 0 0 0 8.778 4H2.6a.6.6 0 0 0-.6.6V11h12"
		/>
	</svg>
);
export default SvgFolderWarning;
