const SvgPlaylist = (props) => (
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
			d="M2 11h14M2 17h11M2 5h18"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M20 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0v-7.9a.6.6 0 0 1 .6-.6H22"
		/>
	</svg>
);
export default SvgPlaylist;
