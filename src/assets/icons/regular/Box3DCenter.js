const SvgBox3DCenter = (props) => (
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
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m20.5 16.722-8.209-4.56a.6.6 0 0 0-.582 0L3.5 16.722M3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 3v9M12 19.5V22"
		/>
	</svg>
);
export default SvgBox3DCenter;
