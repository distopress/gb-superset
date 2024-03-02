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

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */


define( 'GBSUPERSET_PLUGIN_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
function _test_block_init() {
	register_block_type( __DIR__ . '/build/blocks/super-block-controls' );
	register_block_type( __DIR__ . '/build/blocks/super-block-a' );

	wp_enqueue_style(
		'gb-superset/global',
		GBSUPERSET_PLUGIN_URL . 'build/gb-superset/controls-style.css',
		array(),
		"0.1.0"
	);
}
add_action( 'init', '_test_block_init' );
