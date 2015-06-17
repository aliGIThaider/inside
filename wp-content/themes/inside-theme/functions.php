<?
/***
 *  downloadable styles and scripts
 **/
function load_style_script () {
	wp_enqueue_script('jquery-1.11.2.min' , get_template_directory_uri() . '/js/jquery-1.11.2.min.js');
	wp_enqueue_script('swiper.jquery.min' , get_template_directory_uri() . '/js/swiper.jquery.min.js');
	wp_enqueue_script('main' , get_template_directory_uri() . '/js/main.js');
	wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css');
	wp_enqueue_style('swiper', get_template_directory_uri() . '/css/swiper.css');
    wp_enqueue_style('animate', get_template_directory_uri() . '/css/animate.css');
    wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css');
}
/***
 * load styles and scripts
 **/
add_action('wp_enqueue_scripts', 'load_style_script');


/***
 * slider
 **/
add_action('init', 'slider');
function slider() {
	add_theme_support( 'post-thumbnails' );
	register_post_type('slider', array(
		'public' => true,
		'supports' => array('title'),
		'labels' => array(
			'name' => 'Slider',
			'all_items' => 'All slides',
			'singular_name' => 'slide',
			'add_new' => 'Add slide',
			'add_new_item' => 'Add new slide',
			'not_found' => 'Slides not founs.'
		),
		'menu_icon' => 'dashicons-format-gallery',
		'menu_position' => 21
	));
}

/***
 * competenzen
 **/
add_action('init', 'kompetenzen');
function kompetenzen() {
	register_post_type('kompetenzen', array(
		'public' => true,
		'supports' => array('title', 'editor', 'thumbnail'),
		'labels' => array(
			'name' => 'Competenzen blocks',
			'all_items' => 'All competenzen blocks',
			'singular_name' => 'competenzen block',
			'add_new' => 'Add competenzen blocks',
			'add_new_item' => 'Add new сompetenzen blocks',
			'not_found' => 'Competenzen blocks not found.'
		),
		'menu_icon' => 'dashicons-format-aside',
		'menu_position' => 21
	));
}

/***
 * concept blocks
 **/
add_action('init', 'concept');
function concept() {
	register_post_type('concept', array(
		'public' => true,
		'supports' => array('title', 'editor'),
		'labels' => array(
			'name' => 'Konzept blocks',
			'all_items' => 'All konzepts',
			'singular_name' => 'konzept',
			'add_new' => 'Add konzept block',
			'add_new_item' => 'Add new konzept block',
			'not_found' => 'Konzept blocks not found.'
		),
		'menu_icon' => 'dashicons-hammer',
		'menu_position' => 21
	));
}


/***
 * crewman
 **/
add_action('init', 'crewman');
function crewman() {
	register_post_type('crewman', array(
		'public' => true,
		'supports' => array('title', 'thumbnail'),
		'labels' => array(
			'name' => 'Crewmans',
			'all_items' => 'All crewmans',
			'singular_name' => 'crewman',
			'add_new' => 'Add crewmans',
			'add_new_item' => 'Add new crewman',
			'not_found' => 'Crewmans not found.'
		),
		'menu_icon' => 'dashicons-businessman',
		'menu_position' => 22
	));
}


?>