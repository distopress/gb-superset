import { ControlContainer } from '@gb-superset/supports/control';
import IconControl from './IconControl';

export default (props) => {

	return (
		<ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-icon-picker-control">
			<IconControl {...props} />
		</ControlContainer>
	);
}
