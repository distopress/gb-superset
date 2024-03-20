const SvgAlbumOpen = (props) => (
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
			d="M15 2.2c4.564.927 8 4.962 8 9.8s-3.436 8.873-8 9.8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 9c1.141.284 2 1.519 2 3s-.859 2.716-2 3M1 2h10v20H1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M4 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V7.6a.6.6 0 0 1 .6-.6H7"
		/>
	</svg>
);
export default SvgAlbumOpen;
