const SvgSendDiagonal = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<g clipPath="url(#send-diagonal_svg__a)">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M1.846 7.151a.75.75 0 0 0-.228 1.376l6.517 3.915 6.22-4.355a.75.75 0 0 1 .86 1.229l-6.22 4.355 1.45 7.463a.75.75 0 0 0 1.372.256L22.792 3.94a.75.75 0 0 0-.793-1.133z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="send-diagonal_svg__a">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgSendDiagonal;
