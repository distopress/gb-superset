import { useSelect } from '@wordpress/data'

export default () => {
	let dispatchType = 'core/edit-post';
	// if(window.gutenkit.screen === 'site-editor.php') {
	// 	dispatchType = 'core/edit-site';
	// }

	const { deviceType } = useSelect(
		select => {
			return {
				deviceType: select( dispatchType )?.__experimentalGetPreviewDeviceType() || 'Desktop',
			}
		},
		[]
	)

	return (deviceType || '').toLowerCase();
}