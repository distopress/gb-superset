const SvgMetro = (props) => (
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
			d="m14 16.01.01-.011M10 16.01l.01-.011M22 12v3a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-3C2 6.477 6.477 2 12 2s10 4.477 10 10"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18 12v3a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-3a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="m10.5 20-2 2.5M13.5 20l2 2.5M16.5 20l2 2.5M7.5 20l-2 2.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.786 10h.428C13.2 10 14 10.8 14 11.786a.214.214 0 0 1-.214.214h-3.572a.214.214 0 0 1-.214-.214C10 10.8 10.8 10 11.786 10"
		/>
	</svg>
);
export default SvgMetro;
