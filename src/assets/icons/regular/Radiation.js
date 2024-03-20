const SvgRadiation = (props) => (
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
			d="M17 20.662a9.96 9.96 0 0 1-5 1.337 9.95 9.95 0 0 1-5-1.337L10 16s1 .4 2 .4 2-.4 2-.4zM16.998 3.339A9.95 9.95 0 0 1 20.656 7a9.95 9.95 0 0 1 1.342 5l-5.537-.268s-.154-1.066-.654-1.932-1.346-1.532-1.346-1.532zM1.998 12A9.95 9.95 0 0 1 3.34 7a9.95 9.95 0 0 1 3.658-3.66l2.537 4.928S8.69 8.934 8.19 9.8s-.654 1.932-.654 1.932zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
		/>
	</svg>
);
export default SvgRadiation;
