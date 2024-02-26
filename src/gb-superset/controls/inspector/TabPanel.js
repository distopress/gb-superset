import { TabPanel } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  const { tabs, children, ...Props } = props;

  const Tabs = tabs.map(tab => {
    const Tab = tab.replace(/\s/g, '').toLowerCase();
    return {
      name: Tab || '', // required
			title: tab || '', // required
			className: `tab-${Tab}`
    }
  });

  return (
    <ControlContainer {...Props} className="gb-superset-tab-panel">
      <TabPanel {...Props} tabs={Tabs} activeClass="active">
        {(tab) => (
          React.Children.map(children, child => {
            if (child.props.content.toLowerCase() === tab?.name) {
              return child;
            }
            return null;
          })
        )}
      </TabPanel>
    </ControlContainer>
  );
}