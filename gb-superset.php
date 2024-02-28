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
function _test_block_init() {
	register_block_type( __DIR__ . '/build/blocks/super-block-control' );
	register_block_type( __DIR__ . '/build/blocks/super-block-a' );
}
add_action( 'init', '_test_block_init' );

if(isset($_GET['test'])) {
	// get wp page id 2
	$page = get_post( 2 );
	// get wp page id 2 content
	$content = $page->post_content;
	// get wp page id 2 title
	echo $page->post_content;
	die;
}