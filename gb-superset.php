<?php
/**
 * Plugin Name:       Gutenberg Superset
 * Description:       Example block scaffolded with Gutenberg Superset.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gb-superset
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}





function debug(...$data) {
	$log_file = defined('WP_DEBUG_LOG_PATH') ? WP_DEBUG_LOG_PATH : __DIR__ . '../../../debug.log';

	$output = '';
	foreach ($data as $key => $value) {
		if(is_numeric($key)){
			$output .= print_r($value, true);
		}
		else{
			$output .= "$key: " . print_r($value, true);
		}
	}
	$flag = isset($data['reset']) && $data['reset'] === true ? 0 : FILE_APPEND;

	file_put_contents($log_file, $output . "\n", $flag);
}


// add_filter('render_block_data', function(array $parsed_block, array $source_block, ?\WP_Block $parent_block ){
// 	debug(render_block_data: $source_block);
// 	return $parsed_block;
// }, 10, 3 );




/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */


define( 'GBSUPERSET_PLUGIN_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
function __block_init() {
	register_block_type( __DIR__ . '/build/blocks/block-emran-1' );
	register_block_type( __DIR__ . '/build/blocks/block-sagor-1' );
	register_block_type( __DIR__ . '/build/blocks/block-salekin-1' );

	wp_enqueue_style(
		'gb-superset/global',
		GBSUPERSET_PLUGIN_URL . 'build/gb-superset/controls-style.css',
		array(),
		"0.1.0"
	);
}
add_action( 'init', '__block_init' );


/**
 * Registers a stylesheet.
 */
function __register_plugin_styles() {

	wp_register_style(
		'gb-superset-controls',
		GBSUPERSET_PLUGIN_URL . 'build/blocks/block-emran-1/style-index.css',
		array(),
		"0.1.0"
	);

}
// Register style sheet.
add_action( 'wp_enqueue_scripts', '__register_plugin_styles' );