const SvgVoiceLockCircle = (props) => (
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
			d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .381-.028.755M12 6v12M9 9v6M18 11v2M6 11v2M15 7v10"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.167 18.5h.233a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6h-3.8a.6.6 0 0 1-.6-.6v-2.3a.6.6 0 0 1 .6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334"
		/>
	</svg>
);
export default SvgVoiceLockCircle;
