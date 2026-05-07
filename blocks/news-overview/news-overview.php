<?php
/**
 * Block template for News Overview
 */

$block_classes = get_block_classes('news-overview');

$current_page = isset($_GET['pg']) ? max(1, intval($_GET['pg'])) : 1;

$args = array(
	'post_type'      => 'blog-posts',
	'posts_per_page' => 9,
	'orderby'        => 'date',
	'order'          => 'DESC',
	'paged'          => $current_page,
);

$blogPosts = new WP_Query($args);
$count = 0;

// Current URL without existing pg param
$base_url = remove_query_arg('pg');

$prev = '
<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
	<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)" stroke="#2D2D35"/>
	<path d="M55.7715 37.8389L18.4531 37.8389" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M31.5605 51.3535L18.2654 37.8388L31.5605 24.3242" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>';

$next = '
<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
	<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35"/>
	<path d="M18.582 36.5146H55.9004" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M42.793 23L56.0881 36.5147L42.793 50.0294" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>';

$pagination_links = paginate_links(array(
	'base'      => add_query_arg('pg', '%#%', $base_url),
	'format'    => '',
	'total'     => $blogPosts->max_num_pages,
	'current'   => $current_page,
	'type'      => 'array',
	'end_size'  => 1,
	'mid_size'  => 2,
	'prev_text' => '',
	'next_text' => '',
));
?>

<section class="block news-overview <?php echo esc_attr($block_classes); ?> bg-off-white pad-top-64">
	<div class="wrap">
		<div class="news-wrap">
			<?php if ($blogPosts->have_posts()) : ?>
			<div
				class="inner-wrap grid grid-cols-12 gap-16 <?php echo ($current_page === 1) ? 'first-page-grid' : 'regular-grid'; ?>">
				<?php while ($blogPosts->have_posts()) : $blogPosts->the_post(); ?>
				<?php
				$count++;
				$thumbnailImg = get_field('thumbnail_image', get_the_ID());
				?>

				<?php if ($current_page === 1 && $count == 1): ?>
				<!-- First large post on page 1 -->
				<a href="<?php the_permalink(); ?>" class="first-card-link">
					<div class="thumb-wrap first-image">
						<img src="<?php echo esc_url($thumbnailImg['url']); ?>"
							alt="<?php echo esc_attr($thumbnailImg['alt']); ?>" />
					</div>
					<div class="content first-content">
						<p><?php echo get_the_date('d.m.y'); ?></p>
						<h2 class="pad-top-8 pad-btm-16"><?php the_title(); ?></h2>
						<div>
							<p><?php echo wp_trim_words(get_the_content(), 30, '...'); ?></p>
						</div>
					</div>
				</a>
				<?php else: ?>
				<!-- Normal cards -->
				<a href="<?php the_permalink(); ?>" class="card" data-index="<?php echo $count; ?>">
					<div class="thumb-wrap">
						<img src="<?php echo esc_url($thumbnailImg['url']); ?>"
							alt="<?php echo esc_attr($thumbnailImg['alt']); ?>" />
					</div>
					<div class="content">
						<p><?php echo get_the_date('d.m.y'); ?></p>
						<h2 class="pad-top-8 pad-btm-16"><?php the_title(); ?></h2>
						<div>
							<div>
								<p><?php echo wp_trim_words(wp_strip_all_tags(get_the_content()), 30, '...'); ?></p>
							</div>
						</div>
					</div>
				</a>
				<?php endif; ?>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>

			<div class="pagination-wrap">
				<div class="page-numbers flex items-center gap-4">

					<!-- Prev Button -->
					<div class="prev">
						<?php
						if ($current_page > 1) {
							echo '<a class="page-numbers" href="' . esc_url(add_query_arg('pg', $current_page - 1, $base_url)) . '">' . $prev . '</a>';
						} else {
							echo '<span class="page-numbers disabled">' . $prev . '</span>';
						}
						?>
					</div>

					<!-- Numeric Pagination -->
					<ul class="flex gap-24 pad-0">
						<?php
						if (!empty($pagination_links)) {
							foreach ($pagination_links as $link) {
								if (strpos($link, 'prev') !== false || strpos($link, 'next') !== false) continue;
								echo '<li>' . $link . '</li>';
							}
						}
						?>
					</ul>

					<!-- Next Button -->
					<div class="next">
						<?php
						if ($current_page < $blogPosts->max_num_pages) {
							echo '<a class="page-numbers" href="' . esc_url(add_query_arg('pg', $current_page + 1, $base_url)) . '">' . $next . '</a>';
						} else {
							echo '<span class="page-numbers disabled">' . $next . '</span>';
						}
						?>
					</div>

				</div>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>