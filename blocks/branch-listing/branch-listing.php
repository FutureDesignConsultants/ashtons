<?php
/**
* Block template for Branch Listing
*/

$block_classes = get_block_classes('branch-listing');

$current_page = isset($_GET['pg']) ? max(1, intval($_GET['pg'])) : 1;
$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

$args = array(
	'post_type'      => 'branches',
	'posts_per_page' => -1,
	'orderby'        => 'date',
	'order'          => 'DESC',
	'paged'          => $current_page,
);

if ($selected_office_id) {
    $args['meta_query'] = [
        [
            'key'     => 'office',
            'value'   => '(^|")' . $selected_office_id . '("|\b)',
            'compare' => 'REGEXP',
        ]
    ];
}

$branches = new WP_Query($args);
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
	'total'     => $branches->max_num_pages,
	'current'   => $current_page,
	'type'      => 'array',
	'end_size'  => 1,
	'mid_size'  => 2,
	'prev_text' => '',
	'next_text' => '',
));

?>

<section class="block branch-listing <?php echo esc_attr($block_classes); ?> bg-off-white">
	<div class="wrap">
		<div class="results-wrap">

			<div class="filter-by flex justify-between">
				<div class="all-buttons">
					<button type="button" id="btn-show-listings" class="button is-active flex align-center gap-8"
						aria-controls="ph-search-results" aria-pressed="true" data-view="grid">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.5" y="0.5" width="6.81829" height="7.26101" rx="1.5" stroke="currentColor">
							</rect>
							<rect x="9.95508" y="0.5" width="7.54558" height="7.26101" rx="1.5" stroke="currentColor">
							</rect>
							<rect x="0.5" y="10.2393" width="6.81829" height="7.26101" rx="1.5" stroke="currentColor">
							</rect>
							<rect x="9.95508" y="10.2393" width="7.54558" height="7.26101" rx="1.5"
								stroke="currentColor"></rect>
						</svg>
						<span>Grid View</span>
					</button>
					<button type="button" id="btn-show-map" class="button flex align-center gap-8"
						aria-controls="custom-results-map" aria-pressed="false" data-view="map">
						<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.57143 0.5C3.66555 0.5 0.5 3.69943 0.5 7.6471C0.5 12.5856 7.57143 18.5 7.57143 18.5C7.57143 18.5 14.6429 12.5856 14.6429 7.6471C14.6429 3.70018 11.4773 0.5 7.57143 0.5Z"
								stroke="currentColor" stroke-miterlimit="10"></path>
							<path
								d="M3.61133 7.64711C3.61133 9.85717 5.38422 11.649 7.57088 11.649C9.75754 11.649 11.5304 9.85717 11.5304 7.64711C11.5304 5.43704 9.75754 3.64518 7.57088 3.64518C5.38422 3.64518 3.61133 5.43704 3.61133 7.64711Z"
								stroke="currentColor" stroke-miterlimit="10"></path>
						</svg>
						<span>Map View</span>
					</button>
				</div>
			</div>

			<?php if ($branches->have_posts()) : ?>
			<div class="inner-wrap grid grid-cols-12 gap-16">
				<?php while ($branches->have_posts()) : $branches->the_post(); ?>
				<?php
				$thumbnailImg = get_field('thumbnail', get_the_ID());
                $titleOverride = get_field('title_override', get_the_ID());
                $address = get_field('address', get_the_ID());
                $email = get_field('email', get_the_ID());
				$telephoneGeneric = get_field('telephone_generic', get_the_ID());
                $telephoneSales = get_field('telephone', get_the_ID());
				$lettingsTelephone = get_field('lettings_telephone', get_the_ID());
				$lat = get_field('latitude', get_the_ID());
				$lng = get_field('longitude', get_the_ID());

				$lat = is_numeric($lat) ? $lat : null;
				$lng = is_numeric($lng) ? $lng : null;

                $office = get_field('office', get_the_ID());

				$office_id = 0;

				if (is_array($office) && !empty($office)) {
					$office_id = (int) $office[0];
				} elseif (is_numeric($office)) {
					$office_id = (int) $office;
				}
				?>

				<div class="card">
					<a href="<?php the_permalink(); ?>" data-index="<?php echo $count; ?>"
						data-lat="<?php echo esc_attr($lat ?? ''); ?>" data-lng="<?php echo esc_attr($lng ?? ''); ?>"
						data-image="<?php echo esc_url($thumbnailImg['url']); ?>"
						data-office-id="<?php echo esc_attr($office_id); ?>">
						<div class="thumb-wrap">
							<img src="<?php echo esc_url($thumbnailImg['url']); ?>"
								alt="<?php echo esc_attr($thumbnailImg['alt']); ?>" />
							<div class="title flex justify-between gap-8 align-center">
								<h2 class="card__title"><?php echo $titleOverride ? $titleOverride : get_the_title(); ?>
								</h2>

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/svg/next-grey.svg"
									alt="arrow - right" />
							</div>
						</div>
					</a>
					<div class="content">
						<p class="mar-btm-16"><?php echo $address; ?></p>

						<div class="contact">
							<a href="malto:<?php echo $email; ?>"><span>E:</span> <?php echo $email; ?></a>
							<?php if ($telephoneGeneric) : ?>
							<a href="tel:<?php echo $telephoneGeneric; ?>"><span>T:</span>
								<?php echo $telephoneGeneric; ?></a>
							<?php endif; ?>
							<?php if ($telephoneSales) : ?>
							<a href="tel:<?php echo $telephoneSales; ?>"><span>Sales:</span>
								<?php echo $telephoneSales; ?></a>
							<?php endif; ?>
							<?php if ($lettingsTelephone) : ?>
							<a href="tel:<?php echo $lettingsTelephone; ?>"><span>Lettings:</span>
								<?php echo $lettingsTelephone; ?></a>
							<?php endif; ?>
						</div>
					</div>
				</div>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
			<!-- <div class="pagination-wrap">
				<div class="page-numbers flex items-center gap-4">

					<div class="prev">
						<?php
						if ($current_page > 1) {
							echo '<a class="page-numbers" href="' . esc_url(add_query_arg('pg', $current_page - 1, $base_url)) . '">' . $prev . '</a>';
						} else {
							echo '<span class="page-numbers disabled">' . $prev . '</span>';
						}
						?>
					</div>

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

					<div class="next">
						<?php
						if ($current_page < $branches->max_num_pages) {
							echo '<a class="page-numbers" href="' . esc_url(add_query_arg('pg', $current_page + 1, $base_url)) . '">' . $next . '</a>';
						} else {
							echo '<span class="page-numbers disabled">' . $next . '</span>';
						}
						?>
					</div>

				</div>
			</div> -->
			<?php endif; ?>

			<div id="branch-listing-map"></div>
		</div>
	</div>
</section>