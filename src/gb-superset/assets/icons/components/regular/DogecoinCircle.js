const SvgDogecoinCircle = (props) => (
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
			d="M10 16.402V7.598c0-.331.268-.599.6-.604 2.49-.035 5.9-.072 5.9 5.006s-3.41 5.042-5.9 5.006a.606.606 0 0 1-.6-.604Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 12h4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
		/>
	</svg>
);
export default SvgDogecoinCircle;
