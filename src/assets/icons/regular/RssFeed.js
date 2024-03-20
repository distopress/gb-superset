const SvgRssFeed = (props) => (
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
			d="M12 19c0-4.2-2.8-7-7-7M19 19c0-8.4-5.6-14-14-14M5 19.01l.01-.011"
		/>
	</svg>
);
export default SvgRssFeed;
