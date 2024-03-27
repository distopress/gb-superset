const SvgBrightnessWindow = (props) => (
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
			d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
		/>
		<path
			stroke="currentColor"
			d="m18 14 1.225 1.044 1.603.128.128 1.603L22 18l-1.044 1.225-.128 1.603-1.603.128L18 22l-1.225-1.044-1.603-.128-.128-1.603L14 18l1.044-1.225.128-1.603 1.603-.128z"
		/>
		<path
			fill="currentColor"
			d="M16.775 20.956 18 22v-8l-1.225 1.044-1.603.128-.128 1.603L14 18l1.044 1.225.128 1.603z"
		/>
	</svg>
);
export default SvgBrightnessWindow;
