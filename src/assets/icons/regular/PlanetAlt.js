const SvgPlanetAlt = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<circle cx={12} cy={12} r={8} stroke="currentColor" />
		<path
			stroke="currentColor"
			d="M19.812 12.99c1.813 1.51 2.755 2.864 2.362 3.651-.731 1.467-5.805.42-11.333-2.336S1.423 8.126 2.154 6.66c.392-.786 2.033-.85 4.322-.315"
		/>
	</svg>
);
export default SvgPlanetAlt;
