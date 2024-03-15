const SvgConsumable = (props) => (
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
			d="M22.003 3v4.497A.503.503 0 0 1 21.5 8v0a.52.52 0 0 1-.466-.3A10 10 0 0 0 12.003 2c-5.185 0-9.449 3.947-9.95 9"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17 10v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2M12 11V8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.05 21v-4.497c0-.278.226-.503.504-.503v0c.2 0 .38.119.466.3a10 10 0 0 0 9.03 5.7c5.186 0 9.45-3.947 9.952-9"
		/>
	</svg>
);
export default SvgConsumable;
