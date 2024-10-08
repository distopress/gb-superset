const SvgDesignNib = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<g
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			clipPath="url(#design-nib_svg__a)"
		>
			<path d="m17.674 11.408-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364" />
			<path
				fill="currentColor"
				d="m18.403 3.182 2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61"
			/>
			<path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.121-2.121" />
		</g>
		<defs>
			<clipPath id="design-nib_svg__a">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgDesignNib;
