import { 
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
} from '@wordpress/components';

// rename it to MultiToggleControl
// do not use Group keyword to any control that are not grouped like our custom testGroupControl. otherwise it will be confusing.

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-toggle-group-control">
      <ToggleGroupControl {...props}>
        { 
          props?.options?.map( option => 
            <ToggleGroupControlOption 
              value={option.value}
              label={option.label} 
            />
          )
        }
      </ToggleGroupControl>
    </ControlContainer>
  );
}