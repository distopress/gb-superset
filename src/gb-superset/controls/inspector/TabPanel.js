import { TabPanel } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default ({ children, ...Props }) => {
  
  const Tabs = children?.map(child => {
    const Tab = child?.props?.content.toLowerCase();
    return {
      name: Tab || '', // required
			title: child?.props?.content || '', // required
			className: `tab-${Tab}`
    }
  });

  return (
    <ControlContainer {...Props} className="gb-superset-tab-panel">
      <TabPanel {...Props} tabs={Tabs} activeClass="active">
        {(tab) => (
          children?.map(child => {
            if (child?.props?.content.toLowerCase() === tab?.name) {
              return child;
            }
            return null;
          })
        )}
      </TabPanel>
    </ControlContainer>
  );
}