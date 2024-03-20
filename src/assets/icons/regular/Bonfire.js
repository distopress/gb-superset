const SvgBonfire = (props) => (
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
			d="M9 14c0 1.61 1.377 2 3.076 2 2.89 0 3.845-1.667 1.922-5-2.691 3-3.076-1.667-2.691-3C10.153 10 9 11.879 9 14"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 16c3.156 0 5-2.098 5-5.687S12 3 12 3s-5 3.723-5 7.313S8.844 16 12 16"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="m4.273 21.07 15.454-4.14M4.273 16.93 12 19M19.727 21.07l-3.863-1.035"
		/>
	</svg>
);
export default SvgBonfire;
