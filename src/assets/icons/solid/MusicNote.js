const SvgMusicNote = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			d="M10 21H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3V4l5-1v4l-5 1v11a2 2 0 0 1-2 2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M12 16v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V8m0 0V4l5-1v4z"
		/>
	</svg>
);
export default SvgMusicNote;
