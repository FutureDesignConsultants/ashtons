<?php
/**
 * The Template for displaying property archives, also referred to as 'Search Results'
 *
 * Override this template by copying it to yourtheme/propertyhive/archive-property.php
 *
 * @author      PropertyHive
 * @package     PropertyHive/Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

get_header( 'propertyhive' ); global $wpdb; ?>


<section class="property-filters bg-dark-grey text-white">
	<div class="wrap">
		<div id="ph-search">
			<h1>Proprty Listings</h1>
			<div id="ph-search-controls">
				<?php get_template_part('partials/property-search-controls'); ?>
			</div>


		</div>

	</div>
</section>


<section class="property-results bg-off-white">
	<div class="wrap">
		<div id="ph-search-results-wrap">
			<div class="ph-loading-overlay" aria-hidden="true">
				<div class="ph-loading-spinner"></div>
			</div>

			<?php do_action('propertyhive_result_count'); ?>

			<div class="ph-results-toggles">
				<div class="toggle-buttons">
					<div class="filter-by flex justify-between">
						<div class="all-buttons">
							<button type="button" id="btn-show-listings"
								class="button is-active flex align-center gap-8" aria-controls="ph-search-results"
								aria-pressed="true">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<rect x="0.5" y="0.5" width="6.81829" height="7.26101" rx="1.5"
										stroke="currentColor" />
									<rect x="9.95508" y="0.5" width="7.54558" height="7.26101" rx="1.5"
										stroke="currentColor" />
									<rect x="0.5" y="10.2393" width="6.81829" height="7.26101" rx="1.5"
										stroke="currentColor" />
									<rect x="9.95508" y="10.2393" width="7.54558" height="7.26101" rx="1.5"
										stroke="currentColor" />
								</svg>
								<span>Grid View</span>

							</button>

							<button type="button" id="btn-show-map" class="button flex align-center gap-8"
								aria-controls="custom-results-map" aria-pressed="false">
								<svg width="16" height="20" viewBox="0 0 16 20" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7.57143 0.5C3.66555 0.5 0.5 3.69943 0.5 7.6471C0.5 12.5856 7.57143 18.5 7.57143 18.5C7.57143 18.5 14.6429 12.5856 14.6429 7.6471C14.6429 3.70018 11.4773 0.5 7.57143 0.5Z"
										stroke="currentColor" stroke-miterlimit="10" />
									<path
										d="M3.61133 7.64711C3.61133 9.85717 5.38422 11.649 7.57088 11.649C9.75754 11.649 11.5304 9.85717 11.5304 7.64711C11.5304 5.43704 9.75754 3.64518 7.57088 3.64518C5.38422 3.64518 3.61133 5.43704 3.61133 7.64711Z"
										stroke="currentColor" stroke-miterlimit="10" />
								</svg>

								<span>Map View</span>
							</button>
						</div>
						<div class="sort">
							<p>Sort by</p>

							<select name="sort" id="sort-properties" form="ph-search-form">
								<option value="new">Newly listed</option>
								<option value="old">Oldest listed</option>
								<option value="price_high">Highest price</option>
								<option value="price_low">Lowest price</option>
							</select>
						</div>
					</div>


				</div>

				<div id="ph-search-results">

					<?php if ( have_posts() ) : ?>

					<ul class="ph-results-grid">

						<?php while ( have_posts() ) : the_post(); ?>
						<?php ph_get_template_part('content', 'property'); ?>
						<?php endwhile; ?>

					</ul>

					<?php else : ?>
					<?php ph_get_template('search/no-properties-found.php'); ?>
					<?php endif; ?>

				</div>

				<div id="custom-results-map"></div>


				<div id="ph-search-pagination">
					<?php do_action('propertyhive_after_search_results_loop'); // pagination hook ?>
				</div>
			</div>
		</div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
	const wrap = document.getElementById('ph-search-results-wrap');
	const btnListings = document.getElementById('btn-show-listings');
	const btnMap = document.getElementById('btn-show-map');

	if (!wrap || !btnListings || !btnMap) return;

	function setActiveButton(active) {
		const isMap = active === 'map';
		btnMap.classList.toggle('is-active', isMap);
		btnListings.classList.toggle('is-active', !isMap);
		btnMap.setAttribute('aria-pressed', isMap ? 'true' : 'false');
		btnListings.setAttribute('aria-pressed', !isMap ? 'true' : 'false');
	}

	// default
	wrap.classList.remove('is-map-view');
	setActiveButton('listings');

	btnListings.addEventListener('click', function() {
		wrap.classList.remove('is-map-view');
		setActiveButton('listings');
	});

	btnMap.addEventListener('click', function() {
		wrap.classList.add('is-map-view');
		setActiveButton('map');

		// map reflow
		setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
	});
});
</script>






<?php
        /**
         * propertyhive_after_main_content hook
         *
         * @hooked propertyhive_output_content_wrapper_end - 10 (outputs closing divs for the content)
         */
        do_action( 'propertyhive_after_main_content' );
    ?>

<?php get_footer( 'propertyhive' ); ?>