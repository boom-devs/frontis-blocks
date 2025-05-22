<?php
require_once 'class-lesson-walker-nav-menu.php';
/*
Template Name: Custom Template
*/
get_header();

$books_args = array(
	'post_type' => 'books',
	'posts_per_page' => -1,
);
$books_posts = get_posts($books_args);
$page_id = get_queried_object_id();
$current_post = get_post($page_id);
$parent_post_ids = get_post_ancestors(get_the_ID());
$get_books_meta_value = get_post_meta($page_id, 'related_book', true);
$menu_name = get_post($get_books_meta_value);
$memberships = get_post_meta($get_books_meta_value, 'book_memberships', true);
$authorized = false;

$menu_name = get_post($get_books_meta_value);

function truncate($text, $chars = 30) {
	if (strlen($text) <= $chars) {
		return $text;
	}
	$text = $text . " ";
	$text = substr($text, 0, $chars);
	$text = substr($text, 0, strrpos($text, ' '));
	return $text . "...";
}


function render_lesson_table_of_contents($book_id, $args = []) {
	global $wpdb;

	// Default arguments
	$defaults = [
		'container_class' => 'table_of_content',
		'header_title' => 'Table of Contents',
		'post_type' => 'lessons',
		'meta_key' => 'related_book',
		'menu_classes' => ['menu'],
	];

	$args = wp_parse_args($args, $defaults);

	// Sanitize book ID
	$book_id = absint($book_id);
	if (!$book_id) {
		return '<p>' . esc_html__('Invalid book ID.', 'text-domain') . '</p>';
	}

	// Prepare and execute query
	$query = $wpdb->prepare(
		"SELECT p.ID, p.post_title, p.post_parent, p.menu_order
        FROM {$wpdb->posts} p
        INNER JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id
        WHERE p.post_type = %s
        AND p.post_status = 'publish'
        AND pm.meta_key = %s
        AND pm.meta_value = %d
        ORDER BY p.menu_order",
		$args['post_type'],
		$args['meta_key'],
		$book_id
	);

	$results = $wpdb->get_results($query, ARRAY_A);

	if (empty($results)) {
		return '<p>' . esc_html__('No published lessons found.', 'text-domain') . '</p>';
	}

	// Build menu items
	$menu_items = array_map(function($row) {
		return [
			'ID' => $row['ID'],
			'title' => $row['post_title'],
			'url' => get_permalink($row['ID']),
			'parent' => $row['post_parent'],
			'classes' => ['menu-item', 'test', 'collapsed']
		];
	}, $results);

	// Build and render menu
	$menu = build_menu_hierarchy($menu_items);

	ob_start();
	render_menu_items($menu);
	return ob_get_clean();
}

/**
 * Build hierarchical menu structure
 *
 * @param array $items Menu items
 * @param int $parent_id Parent ID to build hierarchy
 * @return array Hierarchical menu structure
 */
function build_menu_hierarchy($items, $parent_id = 0) {
	$menu = [];

	foreach ($items as $item) {
		if ($item['parent'] == $parent_id) {
			$children = build_menu_hierarchy($items, $item['ID']);
			if ($children) {
				$item['children'] = $children;
				$item['classes'][] = 'menu-item-has-children';
			}
			$menu[] = $item;
		}
	}

	return $menu;
}

/**
 * Render menu items recursively
 *
 * @param array $items Menu items to render
 * @param int $depth Current menu depth
 */
function render_menu_items($items, $depth = 0) {
	if (empty($items)) {
		return;
	}

	$classes = [
		'sub-menu',
		($depth % 2 ? 'menu-odd' : 'menu-even'),
		'menu-depth-' . $depth
	];

	if ($depth >= 1) {
		$classes[] = 'sub-sub-menu';
	}

	?>
	<ul class="<?php echo esc_attr(implode(' ', $classes)); ?>">
		<?php foreach ($items as $item) :
			$item_classes = array_merge($item['classes'], [
				'menu-item-' . $item['ID'],
				'menu-item-depth-' . $depth
			]);
			?>
			<li id="nav-menu-item-<?php echo esc_attr($item['ID']); ?>" class="<?php echo esc_attr(implode(' ', $item_classes)); ?>">
				<?php if (!empty($item['children'])) : ?>
					<span class="toggle_btn">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8 4 8 8-8 8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </span>
				<?php endif; ?>

				<a href="<?php echo esc_url($item['url']); ?>"
				   class="<?php echo $depth == 0 ? 'menu-link main-menu-link' : 'menu-link sub-menu-link'; ?>"
				   style="<?php echo (get_the_ID() == $item['ID']) ? 'color: #97c93f;' : ''; ?>"
				   id="<?php echo esc_attr(sanitize_title($item['title']) . '-' . $item['ID']); ?>"
				   title="<?php echo esc_attr($item['title']); ?>">
					<?php echo esc_html($item['title']); ?>
				</a>

				<?php if (!empty($item['children'])) : ?>
					<?php render_menu_items($item['children'], $depth + 1); ?>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ul>
	<?php
}

?>
	<header class="custom_page_header page-header default-page-header wpex-supports-mods has-aside wpex-relative wpex-mb-40 wpex-surface-2 wpex-py-20 wpex-border-t wpex-border-b wpex-border-solid wpex-border-surface-3 wpex-text-2">
		<div class="page-header-inner container wpex-md-flex wpex-md-flex-wrap wpex-md-items-center wpex-md-justify-between">
			<div class="page-header-content wpex-md-mr-15">
            <span class="page-header-title wpex-block wpex-m-0 wpex-inherit-font-family wpex-not-italic wpex-tracking-normal wpex-leading-normal wpex-font-normal wpex-text-2xl wpex-text-1">
	            <span>
                    <?php
					echo get_the_title($get_books_meta_value);
					?>
                </span>
            </span>
			</div>
			<div class="page-header-aside wpex-md-text-right">
				<nav class="site-breadcrumbs position-page_header_aside wpex-text-4 wpex-text-sm" aria-label="You are here:">
                    <span class="breadcrumb-trail wpex-clr">
                        <span>
                           <?php echo '<a href="' .site_url(). '">Home </a> � <span>'.ucfirst(get_the_title($get_books_meta_value)).'</span>'; ?>
                        </span>
                    </span>
				</nav>
			</div>
		</div>
	</header>

	<div id="content-wrap" class="container wpex-clr">
		<div id="primary" class="content-area wpex-clr">
			<div id="content" class="site-content wpex-clr">
				<article id="single-blocks" class="single-page-article wpex-clr">
					<div class="single-page-content single-content entry wpex-clr">
						<section class="wpb-content-wrapper">
							<div class="table_of_content">
								<div class="toc_header">
									<h3 class="toc-header">Table of contents</h3>
									<span class="reset_collapse_btn">Collapse all</span>
								</div>
								<div class="inner_table_of_content" id="boxscroll">
									<div class="tree_wrapper">
										<div class="menu-azure-container">
											<?php
											// Call the function to display the menu
											//display_posts_as_tree('lessons', 0, $get_books_meta_value);
											echo render_lesson_table_of_contents($get_books_meta_value);
											?>
										</div>
									</div>
								</div>
							</div>
							<div class="book_content">
								<?php
								foreach ($books_posts as $book_post) {
									if ($book_post->ID == $get_books_meta_value) {
										echo '<div class="book"><p>' . $book_post->post_content . '</p></div>';
									}
								}
								?>
							</div>
						</section>
					</div>
				</article>
			</div>
		</div>
	</div>
<?php

if(class_exists('MeprUtils')) {
	$user = MeprUtils::get_currentuserinfo();

	$check_user_has_access = false;
	if($user !== false && isset($user->ID)) {
		//Returns an array of Membership ID's that the current user is active on
		//Can also use 'products' or 'transactions' as the argument type
		$active_prodcuts = $user->active_product_subscriptions('ids');

		if(!empty($active_prodcuts)) {
			foreach($active_prodcuts as $membership_id) {
				// Do something
				$get_membership_ai_chatbot_access = get_post_meta($membership_id, 'allow_access_to_ai_chatbot', true);
				if($get_membership_ai_chatbot_access !== '') {
					$check_user_has_access = true;
				}
			}
		}
	}

	if($check_user_has_access || current_user_can( 'manage_options' ) || is_super_admin()) {
		echo do_shortcode('[ai-agent-chatbox]');
	}
}
?>

<?php get_footer();

///**
// * Custom walker class.
// */
//class WPDocs_Walker_Nav_Menu extends Walker_Nav_Menu {
//    public $original_menu_name;
//    public function __construct($menu_name) {
//      $this->original_menu_name = $menu_name->post_title;
//    }
//
//    /**
//     * Starts the list before the elements are added.
//     *
//     * Adds classes to the unordered list sub-menus.
//     *
//     * @param string $output Passed by reference. Used to append additional content.
//     * @param int    $depth  Depth of menu item. Used for padding.
//     * @param array  $args   An array of arguments. @see wp_nav_menu()
//     */
//    function start_lvl( &$output, $depth = 0, $args = array() ) {
//        // Depth-dependent classes.
//        $indent = ( $depth > 0  ? str_repeat( "\t", $depth ) : '' ); // code indent
//        $display_depth = ( $depth + 1); // because it counts the first submenu as 0
//        $classes = array(
//            'sub-menu',
//            ( $display_depth % 2  ? 'menu-odd' : 'menu-even' ),
//            ( $display_depth >=2 ? 'sub-sub-menu' : '' ),
//            'menu-depth-' . $display_depth
//        );
//        $class_names = implode( ' ', $classes );
//
//        // Build HTML for output.
//        $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
//    }
//
//    /**
//     * Start the element output.
//     *
//     * Adds main/sub-classes to the list items and links.
//     *
//     * @param string $output Passed by reference. Used to append additional content.
//     * @param object $item   Menu item data object.
//     * @param int    $depth  Depth of menu item. Used for padding.
//     * @param array  $args   An array of arguments. @see wp_nav_menu()
//     * @param int    $id     Current item ID.
//     */
//    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
//        global $wp_query;
//        $indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent
//
//        // Depth-dependent classes.
//        $depth_classes = array(
//            ( $depth == 0 ? 'main-menu-item' : 'sub-menu-item' ),
//            ( $depth >=2 ? 'sub-sub-menu-item' : '' ),
//            ( $depth % 2 ? 'menu-item-odd' : 'menu-item-even' ),
//            'menu-item-depth-' . $depth
//        );
//        $depth_class_names = esc_attr( implode( ' ', $depth_classes ) );
//
//        // Passed classes.
//        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
//        $class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );
//
//        // Build HTML.
//        $output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';
//
//        // Link attributes.
//        $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
//        $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
//        $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
//        $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
//        $attributes .= ' class="menu-link ' . ( $depth > 0 ? 'sub-menu-link' : 'main-menu-link' ) . '"';
//
//        // Build HTML output and pass through the proper filter.
//
//
//        $item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
//            $args->before,
//            $attributes,
//            $args->link_before,
//            apply_filters( 'the_title', str_replace($this->original_menu_name. ' - ', "", $item->title) , $item->ID ),
//            $args->link_after,
//            $args->after
//        );
//        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
//    }
//}

?>
