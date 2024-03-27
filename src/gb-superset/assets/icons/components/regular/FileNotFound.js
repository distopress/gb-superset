const SvgFileNotFound = (props) => (
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
			d="M12 8v4M12 16.01l.01-.011M9 3H4v3M4 11v2M20 11v2M15 3h5v3M9 21H4v-3M15 21h5v-3"
		/>
	</svg>
);
export default SvgFileNotFound;
