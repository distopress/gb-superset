const SvgBookmarkCircle = (props) => (
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
			fillRule="evenodd"
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1 6A2.75 2.75 0 0 0 8.25 10v6a.75.75 0 0 0 1.166.624l1.89-1.26c.42-.28.968-.28 1.387 0l1.891 1.26A.75.75 0 0 0 15.75 16v-6A2.75 2.75 0 0 0 13 7.25z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgBookmarkCircle;
