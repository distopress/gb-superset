const SvgEthereumCircle = (props) => (
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
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.61 3.314a.75.75 0 0 0-1.22 0l-5 7a.75.75 0 0 0 0 .872l5 7a.75.75 0 0 0 1.22 0l5-7a.75.75 0 0 0 0-.872zM12 17.71l-3.287-4.603 3.14.628q.147.03.294 0l3.14-.628zm.75-5.625 2.966-.593L12.75 7.34zm-1.5 0V7.34l-2.966 4.152z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgEthereumCircle;
