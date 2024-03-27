const SvgAlbum = (props) => (
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
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M12 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V7.6a.6.6 0 0 1 .6-.6H15"
		/>
	</svg>
);
export default SvgAlbum;
