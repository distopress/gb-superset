const SvgCursorPointer = (props) => (
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
			d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.305 1.813-2.88 5.895c-.571 1.168-2.296.957-2.569-.314L4.677 6.257A1.369 1.369 0 0 1 6.53 4.7z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgCursorPointer;
