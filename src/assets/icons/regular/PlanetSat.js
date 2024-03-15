const SvgPlanetSat = (props) => (
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
			d="M17.5 6.348c2.297-.538 3.945-.476 4.338.312.73 1.466-3.158 4.89-8.686 7.645-5.529 2.757-10.603 3.802-11.334 2.336-.392-.786.544-2.134 2.349-3.64"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m9.5 10.51.01-.011"
		/>
	</svg>
);
export default SvgPlanetSat;
