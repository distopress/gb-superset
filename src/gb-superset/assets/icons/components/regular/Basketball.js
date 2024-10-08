const SvgBasketball = (props) => (
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
			d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81 1.74 6.976.641 13.212 3.808 17.736s9.404 5.623 13.928 2.456M17.736 20.192 6.264 3.809"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349"
		/>
	</svg>
);
export default SvgBasketball;
