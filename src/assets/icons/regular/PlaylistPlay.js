const SvgPlaylistPlay = (props) => (
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
			d="M22 17.5 18.5 20v-5zM2 5h18M2 11h18M2 17h12"
		/>
	</svg>
);
export default SvgPlaylistPlay;
