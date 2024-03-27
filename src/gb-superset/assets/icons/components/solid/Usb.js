const SvgUsb = (props) => (
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
			d="M12.5 2v15M12.5 14l5.5-2V8.5M12.5 16 7 14.5v-3"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M16.5 5.5v3h3v-3z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m10.5 4 2-2 2 2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
	</svg>
);
export default SvgUsb;
