const SvgRhombusArrowRight = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<g
			stroke="currentColor"
			strokeLinejoin="round"
			clipPath="url(#rhombus-arrow-right_svg__a)"
		>
			<path
				strokeLinecap="round"
				d="M16 11h-6c-1 0-2 1-2 2v1m8-3-2-2m2 2-2 2"
			/>
			<path d="M1.424 11.576 11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848Z" />
		</g>
		<defs>
			<clipPath id="rhombus-arrow-right_svg__a">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgRhombusArrowRight;
