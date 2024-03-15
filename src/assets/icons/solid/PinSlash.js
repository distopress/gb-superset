const SvgPinSlash = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M9.5 14.5 3 21"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m5 9.485 9.193 9.193 1.697-1.698-.102-.98-8.112-8.11-.979-.102zM15.157 2.672l5.85 5.85-4.308 3.653L11.485 7z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m3 3 18 18"
		/>
	</svg>
);
export default SvgPinSlash;
