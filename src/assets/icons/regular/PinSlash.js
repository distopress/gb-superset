const SvgPinSlash = (props) => (
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
			d="M9.5 14.5 3 21M7.676 7.89l-.979-.102L5 9.485l9.193 9.193 1.697-1.697-.102-.981m-4.303-9 3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18"
		/>
	</svg>
);
export default SvgPinSlash;
