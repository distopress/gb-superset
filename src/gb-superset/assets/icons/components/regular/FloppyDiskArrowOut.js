const SvgFloppyDiskArrowOut = (props) => (
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
			d="M3 6.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 3h8v5.4a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6zM18 21v-7.4a.6.6 0 0 0-.6-.6H15M6 21v-3.5M12 12H1m0 0 3-3m-3 3 3 3"
		/>
	</svg>
);
export default SvgFloppyDiskArrowOut;
