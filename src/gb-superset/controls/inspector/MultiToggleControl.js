import { 
  __experimentalToggleGroupControl as MultiToggleControl,
  __experimentalToggleGroupControlOption as MultiToggleControlOption, 
} from '@wordpress/components';

// rename it to MultiToggleControl
// do not use Group keyword to any control that are not grouped like our custom testGroupControl. otherwise it will be confusing.

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-toggle-group-control">
      <MultiToggleControl {...props}>
        { 
          props?.options?.map( option => 
            <MultiToggleControlOption 
              value={option.value}
              label={option.label} 
            />
          )
        }
      </MultiToggleControl>
    </ControlContainer>
  );
}