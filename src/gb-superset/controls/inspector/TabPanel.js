import { TabPanel } from '@wordpress/components';

export default (props) => {
  
  const Tabs = props?.children?.map(child => {

    const Tab = child?.props?.content.toLowerCase();

    return {
      name: Tab || '', // required
			title: child?.props?.content || '', // required
			className: `tab-${Tab}`
    }
  });

  return (
    <TabPanel {...props} tabs={Tabs} activeClass="active" className="gb-superset-tab-panel">
      {(tab) => (
        props?.children?.map(child => {

          if (child?.props?.content.toLowerCase() === tab?.name) {
            return child;
          }
          
          return null;
        })
      )}
    </TabPanel>
  );
}