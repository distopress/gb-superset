const SvgTrain = (props) => (
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
			d="M9.609 7h4.782A2.61 2.61 0 0 1 17 9.609a.39.39 0 0 1-.391.391H7.39A.39.39 0 0 1 7 9.609 2.61 2.61 0 0 1 9.609 7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 3h6a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6M16 15.01l.01-.011M8 15.01l.01-.011"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="m10.5 19-2 2.5M13.5 19l2 2.5M16.5 19l2 2.5M7.5 19l-2 2.5"
		/>
	</svg>
);
export default SvgTrain;
