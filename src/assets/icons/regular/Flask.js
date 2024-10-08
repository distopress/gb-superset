const SvgFlask = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="currentColor" strokeLinejoin="round" d="M18.5 15h-13" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16 4H8M9 4.5v5.76a2 2 0 0 1-.481 1.302L3.48 17.438A2 2 0 0 0 3 18.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-.26a2 2 0 0 0-.482-1.302l-5.036-5.876A2 2 0 0 1 15 10.26V4.5M12 9.01l.01-.011M11 2.01l.01-.011"
		/>
	</svg>
);
export default SvgFlask;
