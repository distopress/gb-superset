import { 
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
} from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({options, props}) => {

  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-toggle-group-control">
      <ToggleGroupControl {...props}>
        { 
          options?.map( option => 
            <ToggleGroupControlOption 
              value={option.replace(/\s+/g, '-').toLowerCase()}
              label={option} 
            />
          )
        }
      </ToggleGroupControl>
    </ControlContainer>
  );
}