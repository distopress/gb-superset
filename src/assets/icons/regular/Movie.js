const SvgMovie = (props) => (
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
			d="m7 8.01.01-.011M17 8.01l.01-.011M7 12.01l.01-.011M17 12.01l.01-.011M7 16.01l.01-.011M17 16.01l.01-.011M7 2H3.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H7M7 2v2m0-2h10m0 0h3.4a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H17m0-20v2m0 18v-2m0 2H7m0 0v-2"
		/>
	</svg>
);
export default SvgMovie;
