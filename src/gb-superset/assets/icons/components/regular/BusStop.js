const SvgBusStop = (props) => (
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
			d="m16 16.01.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6zM16 20H2.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H16M14 8H6m8-6H6a4 4 0 0 0-4 4v2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M3.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20M14.5 20v1.9a.6.6 0 0 0 .6.6h.9"
		/>
	</svg>
);
export default SvgBusStop;
