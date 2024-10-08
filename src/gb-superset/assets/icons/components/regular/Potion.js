const SvgPotion = (props) => (
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
			d="M10 4h4v2.568c0 .258.17.487.412.579C22.938 10.37 20.908 22 15 22H9c-5.907 0-7.937-11.63.588-14.853a.63.63 0 0 0 .412-.58z"
		/>
		<path stroke="currentColor" d="M6 10h12" />
		<path stroke="currentColor" strokeLinecap="round" d="M9 2h6" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.667 13 10 16h4l-1.667 3"
		/>
	</svg>
);
export default SvgPotion;
