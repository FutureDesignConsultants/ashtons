<?php
/**
* Block template for Homepage Hero
*/

$block_classes = get_block_classes('homepage-hero');


?>

<section class="block homepage-hero bg-dark-grey <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">

		<h1>Ashtons Estate Agents</h1>

		<div class="flex align-center justify-center gap-16 toggle-wrap md:gap-32" role="tablist">

			<button type="button" class="toggle-btn is-active" data-toggle="buy" aria-pressed="true" data-anim="fade"
				data-duration="0.5" data-y="90">
				BUY
			</button>

			<button type="button" class="toggle-btn" data-toggle="rent" aria-pressed="false" data-anim="fade"
				data-delay="0.3" data-duration="0.5" data-y="90">
				RENT
			</button>

			<button type="button" class="toggle-btn" data-toggle="sell" aria-pressed="false" data-anim="fade"
				data-delay="0.6" data-duration="0.5" data-y="90">
				SELL
			</button>

		</div>

		<div class="toggled-content" data-anim="fade" data-delay="1.05" data-duration="0.5">

			<div class="toggle-panel is-active" data-panel="buy">
				<div class="hero-search" data-anim="fade" data-delay="0.9" data-duration="0.5">

					<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
						class="hero-search__form green">

						<div class="hero-search__field">
							<input type="text" class="location-search" name="address_keyword"
								placeholder="Where do you want to buy?" autocomplete="off" required>

							<ul class="location-suggestions"></ul>
						</div>

						<input type="hidden" name="department" value="residential-sales">
						<input type="hidden" name="radius" value="1">
						<input type="hidden" name="sort" value="new">

						<button type="submit" class="hero-search__submit orange" aria-label="Search properties">
							<svg width="28" height="25" viewBox="0 0 33 34" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
									stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
								<path d="M21.75 21.75L31.75 32.75" stroke="currentColor" stroke-width="1.5"
									stroke-miterlimit="10" />
							</svg>
						</button>


					</form>

				</div>
				<div class="additional-buttons" data-anim="fade" data-delay="0.9" data-duration="0.5">
					<a href=" <?php echo get_site_url();?>/mortgages" class="cta-button light-grey buy">
						<span class="cta-text">Get a mortgage</span>
					</a>
					<a href="<?php echo get_site_url();?>/about" class="cta-button light-grey buy">
						<span class="cta-text">About Ashtons</span>
					</a>
					<a href="<?php echo get_site_url();?>/find-a-branch" class="cta-button light-grey buy">
						<span class="cta-text">Our offices</span>
					</a>
				</div>



				<?php
					$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

					$offices = get_posts([
	'post_type'      => 'office',
	'posts_per_page' => -1,
	'post_status'    => 'publish',
]);

usort($offices, function ($a, $b) {
	return strcasecmp($a->post_title, $b->post_title);
});
				?>
				<div class="hero-office-filter latest">
					<label for="hero-office-filter-buy" class="sr-only">Latest Listings From</label>
					<select id="hero-office-filter-buy" name="office_id">
						<option value="0" <?php selected($selected_office_id, 0); ?>>
							All Our Offices
						</option>

						<?php if ($offices) : ?>
						<?php foreach ($offices as $office) : ?>
						<?php
	$title = get_the_title($office->ID);

	if (
		stripos($title, 'mortgageable') !== false ||
		stripos($title, 'lettings') !== false
	) {
		continue;
	}
	?>

						<option value="<?php echo esc_attr($office->ID); ?>"
							<?php selected($selected_office_id, $office->ID); ?>>
							<?php echo esc_html($title); ?>
						</option>
						<?php endforeach; ?>
						<?php else : ?>
						<option value="0">No branches found</option>
						<?php endif; ?>
					</select>
				</div>


				<div class="property-listing">
					<?php
						$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

						$property_meta_query = [
						[
							'key'     => '_department',
							'value'   => 'residential-sales',
							'compare' => '=',
						],
						[
							'key'     => '_on_market',
							'value'   => 'yes',
							'compare' => '=',
						],
						];

						if ($selected_office_id) {
						$property_meta_query[] = [
							'key'     => '_office_id',
							'value'   => $selected_office_id,
							'compare' => '=',
							'type'    => 'NUMERIC',
						];
						}

						$q = new WP_Query([
						'post_type'      => 'property',
						'post_status'    => 'publish',
						'posts_per_page' => 16,
						'orderby'        => 'date',
						'order'          => 'DESC',
						'no_found_rows'  => true,
						'meta_query'     => $property_meta_query,
						]);

$count = $q->post_count;					?>
					<?php if ( $count > 0 ) : ?>
					<svg class="ribbon" viewBox="0 0 1920 406" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M-8 50C290.837 50 368.007 356 673.059 356C1184.76 356 1324.6 50 1665.38 50C1921.23 50 2059 240 2059 240"
							stroke="url(#ribbonGradient-buy)" stroke-width="100" />

						<defs>
							<linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203"
								gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
								<stop offset="0" stop-color="#C1D42F" />
								<stop offset="0.28" stop-color="#9FD76A" />
								<stop offset="0.538462" stop-color="#56C9B8" />
								<stop offset="0.78" stop-color="#96D78A" />
								<stop offset="1" stop-color="#C1D42F" />
							</linearGradient>

						</defs>
					</svg>
					<?php endif; ?>

					<?php if ($q->have_posts()) : ?>

					<!-- Swiper -->
					<div class="swiper property-swiper">
						<div class="swiper-wrapper">

							<?php while ($q->have_posts()) : $q->the_post();
						$property = new PH_Property(get_the_ID());

						$thumb = $property->get_main_photo_src('thumbnail');
						$img   = $property->get_main_photo_src('large');

						$price    = $property->get_formatted_price();
						$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
						if (!$bedrooms) {
							$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
						}
					?>
							<div class="swiper-slide">
								<a class="mega-card" href="<?php the_permalink(); ?>">
									<div class="mega-card__media">
										<?php if (!empty($img)) : ?>
										<img src="<?php echo esc_url($img); ?>"
											alt="<?php echo esc_attr(get_the_title()); ?>" loading="eager"
											decoding="async">
										<?php endif; ?>
									</div>

									<div class="mega-card__body text-dark-grey">
										<div class="flex gap-16">

											<?php if (!empty($price)) : ?>
											<span class="mega-card__price"><?php echo esc_html($price); ?></span>
											<?php endif; ?>

											<?php if ($bedrooms > 0) : ?>
											<div class="flex align-center gap-8">
												<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path d="M3.46231 13.1228V14.4582H2.12695V13.1228" stroke="#B8B9BD"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M16.8158 13.1228V14.4582H15.4805V13.1228" stroke="#B8B9BD"
														stroke-linecap="round" stroke-linejoin="round" />
													<path
														d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
												</svg>


												<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?>
													bed</span>
											</div>
											<?php endif; ?>

										</div>

										<div class="mega-card__title mar-top-8">
											<?php
											$title = get_the_title();
											$title = preg_replace('/,([^,]+,[^,]+)$/', '<br>$1', $title);
											echo wp_kses_post($title);
											?>
										</div>

										<?php if (!empty($thumb)) : ?>
										<span class="sr-only" data-thumb="<?php echo esc_url($thumb); ?>"></span>
										<?php endif; ?>
									</div>
								</a>
							</div>

							<?php endwhile; wp_reset_postdata(); ?>

						</div>

						<!-- Optional UI -->
						<div class="swiper-button-prev property-swiper__prev buy" aria-label="Previous">
							<!-- Prev SVG -->
							<svg width="75" height="75" viewBox="0 0 75 75" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
									fill="#2D2D35" fill-opacity="0.75" />
								<path d="M55.7695 37.8387L18.4512 37.8387" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M31.5586 51.3533L18.2635 37.8386L31.5586 24.324" stroke="#FAF8F4"
									stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>

						<div class="swiper-button-next property-swiper__next buy" aria-label="Next">
							<!-- Next SVG -->
							<svg width="75" height="75" viewBox="0 0 75 75" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
								<path d="M18.584 36.5146H55.9024" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>

					</div>

					<?php else : ?>
					<p class="mega-cards-empty">No new listings right now. <a
							href="<?php site_url(); ?>/property-search">See all listings</a></p>
					<?php endif; ?>
				</div>


			</div>

			<div class="toggle-panel" data-panel="rent" hidden>
				<div class="hero-search">

					<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
						class="hero-search__form orange">

						<div class="hero-search__field">
							<input type="text" class="location-search" name="address_keyword"
								placeholder="Where do you want to rent?" aria-label="Search properties" required>
							<ul class="location-suggestions"></ul>

						</div>



						<input type="hidden" name="department" value="residential-lettings">
						<input type="hidden" name="radius" value="1">
						<input type="hidden" name="sort" value="new">

						<button type="submit" class="hero-search__submit pink" aria-label="Search properties">
							<svg width="28" height="25" viewBox="0 0 33 34" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
									stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
								<path d="M21.75 21.75L31.75 32.75" stroke="currentColor" stroke-width="1.5"
									stroke-miterlimit="10" />
							</svg>
						</button>


					</form>

				</div>
				<div class="additional-buttons">
					<a href="<?php echo get_site_url();?>/tenants-guide" class="cta-button light-grey rent">
						<span class="cta-text rent">Tenants guide</span>
					</a>
					<a href="<?php echo get_site_url();?>/tenant-fees" class="cta-button light-grey rent">
						<span class="cta-text">Tenant fees</span>
					</a>
					<a href="<?php echo get_site_url();?>/landlord-services" class="cta-button light-grey rent">
						<span class="cta-text">Landlord services</span>
					</a>
				</div>

				<?php
					$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

					$offices = get_posts([
	'post_type'      => 'office',
	'posts_per_page' => -1,
	'post_status'    => 'publish',
	'orderby'        => 'title',
	'order'          => 'ASC',
]);
				?>
				<div class="hero-office-filter latest">
					<p>Latest Listings</p>
					<!-- <label for="hero-office-filter-rent" class="sr-only">Select office</label>
					<select id="hero-office-filter-rent" name="office_id">
						<option value="0" <?php selected($selected_office_id, 0); ?>>
						All Our Offices
						</option>

						<?php if ($offices) : ?>
						<?php foreach ($offices as $office) : ?>
							<option value="<?php echo esc_attr($office->ID); ?>"
							<?php selected($selected_office_id, $office->ID); ?>>
							<?php echo esc_html(get_the_title($office->ID)); ?>
							</option>
						<?php endforeach; ?>
						<?php else : ?>
						<option value="0">No branches found</option>
						<?php endif; ?>
					</select> -->
				</div>
				<div class="property-listing">
					<svg class="ribbon" viewBox="0 0 1920 406" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M-8 50C290.837 50 368.007 356 673.059 356C1184.76 356 1324.6 50 1665.38 50C1921.23 50 2059 240 2059 240"
							stroke="url(#ribbonGradient-rent)" stroke-width="100" />

						<defs>
							<linearGradient id="ribbonGradient-rent" x1="-8" y1="203" x2="2059" y2="203"
								gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
								<stop stop-color="#FF8D28" offset="0" />
								<stop stop-color="#FFEB54" offset="0.538462" />
								<stop stop-color="#FF8D28" offset="1" />
							</linearGradient>

						</defs>
					</svg>

					<?php
$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

$rent_meta_query = [
  [
    'key'     => '_department',
    'value'   => 'residential-lettings',
    'compare' => '=',
  ],
  [
    'key'     => '_on_market',
    'value'   => 'yes',
    'compare' => '=',
  ],
];

// if ($selected_office_id) {
//   $rent_meta_query[] = [
//     'key'     => '_office_id',
//     'value'   => $selected_office_id,
//     'compare' => '=',
//     'type'    => 'NUMERIC',
//   ];
// }

$rent_query = new WP_Query([
  'post_type'      => 'property',
  'post_status'    => 'publish',
  'posts_per_page' => 16,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'no_found_rows'  => true,
  'meta_query'     => $rent_meta_query,
]);
?>
					<?php if ($rent_query->have_posts()) : ?>
					<!-- Swiper -->
					<div class="swiper property-swiper">
						<div class="swiper-wrapper">

							<?php while ($rent_query->have_posts()) : $rent_query->the_post();
					$property = new PH_Property(get_the_ID());

					$thumb = $property->get_main_photo_src('thumbnail');
					$img   = $property->get_main_photo_src('large');

					$price    = $property->get_formatted_price();
					$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
					if (!$bedrooms) {
						$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
					}
				?>
							<div class="swiper-slide">
								<a class="mega-card" href="<?php the_permalink(); ?>">
									<div class="mega-card__media rent">
										<?php if (!empty($img)) : ?>
										<img src="<?php echo esc_url($img); ?>"
											alt="<?php echo esc_attr(get_the_title()); ?>" loading="eager"
											decoding="async">
										<?php endif; ?>
									</div>

									<div class="mega-card__body text-dark-grey">
										<div class="flex gap-16">
											<?php if (!empty($price)) : ?>
											<span class="mega-card__price"><?php echo esc_html($price); ?></span>
											<?php endif; ?>

											<?php if ($bedrooms > 0) : ?>
											<div class="flex align-center gap-8">
												<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path d="M3.46231 13.1228V14.4582H2.12695V13.1228" stroke="#B8B9BD"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M16.8158 13.1228V14.4582H15.4805V13.1228" stroke="#B8B9BD"
														stroke-linecap="round" stroke-linejoin="round" />
													<path
														d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
														stroke="#B8B9BD" stroke-linecap="round"
														stroke-linejoin="round" />
												</svg>
												<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?>
													bed</span>
											</div>
											<?php endif; ?>
										</div>

										<div class="mega-card__title mar-top-8">
											<?php $title = get_the_title();
$title = preg_replace('/,([^,]+,[^,]+)$/', '<br>$1', $title);
echo wp_kses_post($title);
 ?>
										</div>

										<?php if (!empty($thumb)) : ?>
										<span class="sr-only" data-thumb="<?php echo esc_url($thumb); ?>"></span>
										<?php endif; ?>
									</div>
								</a>
							</div>
							<?php endwhile; wp_reset_postdata(); ?>

						</div>
						<div class="swiper-button-prev property-swiper__prev rent" aria-label="Previous">
							<!-- Prev SVG -->
							<svg width="75" height="75" viewBox="0 0 75 75" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
									fill="#2D2D35" fill-opacity="0.75" />
								<path d="M55.7695 37.8387L18.4512 37.8387" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M31.5586 51.3533L18.2635 37.8386L31.5586 24.324" stroke="#FAF8F4"
									stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>

						<div class="swiper-button-next property-swiper__next rent" aria-label="Next">
							<!-- Next SVG -->
							<svg width="75" height="75" viewBox="0 0 75 75" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
								<path d="M18.584 36.5146H55.9024" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>

					</div>

				</div>

				<?php else : ?>
				<p class="mega-cards-empty">No new listings right now.</p>
				<?php endif; ?>
			</div>

		</div>

		<div class="toggle-panel" data-panel="sell" hidden>
			<div class="hero-search">

				<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
					class="hero-search__form pink">

					<div class="hero-search__field">
						<input type="text" class="location-search" name="address_keyword"
							placeholder="Enter postcode for a FREE valuation" aria-label="Search properties" required>
						<ul class="location-suggestions"></ul>

					</div>



					<input type="hidden" name="sold" value="1">
					<input type="hidden" name="radius" value="1">
					<input type="hidden" name="sort" value="new">

					<button type="submit" class="hero-search__submit " aria-label="Search properties">
						<svg width="28" height="25" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
								stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
							<path d="M21.75 21.75L31.75 32.75" stroke="currentColor" stroke-width="1.5"
								stroke-miterlimit="10" />
						</svg>
					</button>


				</form>

			</div>
			<div class="additional-buttons">
				<a href="<?php echo get_site_url();?>/why-sell-with-ashtons" class="cta-button light-grey sell">
					<span class="cta-text">Why sell with Ashtons</span>
				</a>
			</div>

			<?php
					$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

					$offices = get_posts([
					'post_type'      => 'office',
					'posts_per_page' => -1,
					'post_status'    => 'publish',
					'orderby'        => 'menu_order',
					'order'          => 'ASC',
					]);
				?>
			<div class="hero-office-filter latest">
				<p>Latest Listings</p>
				<!-- <label for="hero-office-filter-sell" class="sr-only">Select office</label>
					<select id="hero-office-filter-sell" name="office_id">
						<option value="0" <?php selected($selected_office_id, 0); ?>>
						All Our Offices
						</option>

						<?php if ($offices) : ?>
						<?php foreach ($offices as $office) : ?>
							<option value="<?php echo esc_attr($office->ID); ?>"
							<?php selected($selected_office_id, $office->ID); ?>>
							<?php echo esc_html(get_the_title($office->ID)); ?>
							</option>
						<?php endforeach; ?>
						<?php else : ?>
						<option value="0">No branches found</option>
						<?php endif; ?>
					</select> -->
			</div>
			<div class="property-listing">


				<svg class="ribbon" viewBox="0 0 1920 406" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M-8 50C290.837 50 368.007 356 673.059 356C1184.76 356 1324.6 50 1665.38 50C1921.23 50 2059 240 2059 240"
						stroke="url(#ribbonGradient-sell)" stroke-width="100" />

					<defs>
						<linearGradient id="ribbonGradient-sell" x1="-8" y1="203" x2="2059" y2="203"
							gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
							<stop stop-color="#FF2E69" offset="0" />
							<stop stop-color="#6461F1" offset="0.538462" />
							<stop stop-color="#FF2E69" offset="1" />
						</linearGradient>

					</defs>
				</svg>



				<?php
$selected_office_id = isset($_GET['office_id']) ? absint($_GET['office_id']) : 0;

$sell_meta_query = [
  [
    'key'     => '_department',
    'value'   => 'residential-sales',
    'compare' => '=',
  ],
];

// if ($selected_office_id) {
//   $sell_meta_query[] = [
//     'key'     => '_office_id',
//     'value'   => $selected_office_id,
//     'compare' => '=',
//     'type'    => 'NUMERIC',
//   ];
// }

$sell_query = new WP_Query([
  'post_type'      => 'property',
  'post_status'    => 'publish',
  'posts_per_page' => 16,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'no_found_rows'  => true,
  'meta_query'     => $sell_meta_query,
  'tax_query'      => [
    [
      'taxonomy' => 'availability',
      'field'    => 'term_id',
      'terms'    => [12], // Sold STC
    ],
  ],
]);
?>


				<?php if ($sell_query->have_posts()) : ?>
				<div class="swiper property-swiper">
					<div class="swiper-wrapper">

						<?php while ($sell_query->have_posts()) : $sell_query->the_post();
					$property = new PH_Property(get_the_ID());

					$thumb = $property->get_main_photo_src('thumbnail');
					$img   = $property->get_main_photo_src('large');

					$price    = $property->get_formatted_price();
					$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
					if (!$bedrooms) {
						$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
					}
				?>
						<div class="swiper-slide">
							<a class="mega-card" href="<?php the_permalink(); ?>">
								<div class="mega-card__media sell">


									<span class="mega-card__tag sell">
										Just sold
									</span>


									<?php if (!empty($img)) : ?>
									<img src="<?php echo esc_url($img); ?>"
										alt="<?php echo esc_attr(get_the_title()); ?>" loading="eager" decoding="async"">
									<?php endif; ?>

								</div>


								<div class=" mega-card__body text-dark-grey">
									<div class="flex gap-16">

										<?php if (!empty($price)) : ?>
										<span class="mega-card__price"><?php echo esc_html($price); ?></span>
										<?php endif; ?>

										<?php if ($bedrooms > 0) : ?>
										<div class="flex align-center gap-8">
											<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
													stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
												<path d="M3.46231 13.1228V14.4582H2.12695V13.1228" stroke="#B8B9BD"
													stroke-linecap="round" stroke-linejoin="round" />
												<path d="M16.8158 13.1228V14.4582H15.4805V13.1228" stroke="#B8B9BD"
													stroke-linecap="round" stroke-linejoin="round" />
												<path
													d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
													stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
												<path
													d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
													stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
												<path
													d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
													stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											</svg>

											<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?>
												bed</span>
										</div>
										<?php endif; ?>

									</div>

									<div class="mega-card__title mar-top-8"><?php $title = get_the_title();
$title = preg_replace('/,([^,]+,[^,]+)$/', '<br>$1', $title);
echo wp_kses_post($title);
?>
									</div>

									<?php if (!empty($thumb)) : ?>
									<span class="sr-only" data-thumb="<?php echo esc_url($thumb); ?>"></span>
									<?php endif; ?>
								</div>
							</a>
						</div>
						<?php endwhile; wp_reset_postdata(); ?>

					</div>

					<div class="swiper-button-prev property-swiper__prev sell" aria-label="Previous">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
								fill="#2D2D35" fill-opacity="0.75" />
							<path d="M55.7695 37.8387L18.4512 37.8387" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M31.5586 51.3533L18.2635 37.8386L31.5586 24.324" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>

					<div class="swiper-button-next property-swiper__next sell" aria-label="Next">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
							<path d="M18.584 36.5146H55.9024" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>

				</div>

				<?php else : ?>
				<p class="mega-cards-empty">No new listings right now.</p>
				<?php endif; ?>
			</div>

		</div>

	</div>

	</div>

	<div class="ph-loading-overlay" aria-hidden="true">
		<div class="ph-loading-spinner" role="status" aria-label="Loading"></div>
	</div>
</section>


<script>
(() => {

	let propertySwiper = null;
	const hero = document.querySelector(".homepage-hero");
	if (!hero) return;

	// Collect all dropdowns
	let officeSelects = [
		document.getElementById("hero-office-filter-buy"),
		//document.getElementById("hero-office-filter-rent"),
		//document.getElementById("hero-office-filter-sell"),
	].filter(Boolean);

	if (!officeSelects.length) return;

	let controller = null;

	const setLoading = (state) => {
		hero.classList.toggle("is-loading", state);
		hero.setAttribute("aria-busy", state ? "true" : "false");
	};

	const buildUrl = (officeId) => {
		const url = new URL(window.location.href);

		if (!officeId || officeId === "0") {
			url.searchParams.delete("office_id");
		} else {
			url.searchParams.set("office_id", officeId);
		}

		return url.toString();
	};

	/* -----------------------------
	SYNC ALL DROPDOWNS
	------------------------------*/
	const syncSelects = (value) => {
		officeSelects.forEach((select) => {
			if (select.value !== value) select.value = value;
		});
	};

	/* -----------------------------
	SWAP PANELS
	------------------------------*/
	const swapPanels = (html) => {

		if (propertySwiper) {
			propertySwiper.destroy(true, true);
			propertySwiper = null;
		}
		const parsed = new DOMParser().parseFromString(html, "text/html");

		["buy", "rent", "sell"].forEach((name) => {
			const newPanel = parsed.querySelector(`.toggle-panel[data-panel="${name}"]`);
			const currentPanel = hero.querySelector(`.toggle-panel[data-panel="${name}"]`);

			if (newPanel && currentPanel) {
				currentPanel.innerHTML = newPanel.innerHTML;
			}
		});
	};

	/* -----------------------------
	SWIPER INIT
	------------------------------*/
	const reinit = () => {
		hero.querySelectorAll(".property-listing").forEach(el => {
			el.classList.add("is-ready");
		});

		if (typeof window.initMegaCardSwipers === "function") {
			window.initMegaCardSwipers(hero);
		}
	};

	/* -----------------------------
	REBUILD DOM
	------------------------------*/
	const rebindAfterSwap = (officeId) => {
		// 1. re-grab hero (safe refresh reference scope)
		const heroNew = document.querySelector(".homepage-hero");

		// 2. re-collect selects (VERY IMPORTANT)
		const selects = heroNew.querySelectorAll('select[name="office_id"]');

		selects.forEach((select) => {
			select.value = officeId;
		});

		// 3. resync global list
		officeSelects.length = 0;
		heroNew.querySelectorAll('select[name="office_id"]').forEach(s => {
			officeSelects.push(s);
		});

		// 4. rebind listeners safely (avoid duplicates)
		officeSelects.forEach((select) => {
			if (select.dataset.bound) return;

			select.dataset.bound = "1";

			select.addEventListener("change", () => {
				syncSelects(select.value);
				fetchHero(select.value);
			});
		});

		const activePanel = hero.querySelector(".toggle-panel.is-active");

		requestAnimationFrame(() => {
			if (window.initHeroSwiper && activePanel) {
				activePanel.querySelectorAll(".property-swiper").forEach(el => {
					window.initHeroSwiper(el);
				});
			}
		});
		// 5. re-init swiper + UI
		reinit();
	};

	/* -----------------------------
	FETCH CORE
	------------------------------*/
	const fetchHero = async (officeId) => {
		const nextUrl = buildUrl(officeId);

		if (controller) controller.abort();
		controller = new AbortController();

		setLoading(true);

		try {
			const res = await fetch(nextUrl, {
				signal: controller.signal,
				headers: {
					"X-Requested-With": "fetch"
				}
			});

			const html = await res.text();

			swapPanels(html);

			requestAnimationFrame(() => {
				const heroSearch = hero.querySelector(".hero-search");
				const buttons = hero.querySelectorAll(".additional-buttons");

				if (heroSearch) {
					heroSearch.style.opacity = 1;
					heroSearch.classList.add("is-visible", "animated");
				}

				buttons.forEach(btn => {
					btn.style.opacity = 1;
					btn.classList.add("is-visible", "animated");
				});

				// re-run your animation system if it exists
				if (typeof window.initHeroAnimations === "function") {
					window.initHeroAnimations(hero);
				}
			});

			window.history.pushState({}, "", nextUrl);

			// 🔥 IMPORTANT: re-bind EVERYTHING after DOM swap
			rebindAfterSwap(officeId);

		} catch (e) {
			if (e.name !== "AbortError") console.error(e);
		} finally {
			setLoading(false);
		}
	};

	/* -----------------------------
	EVENT: SINGLE LISTENER FOR ALL
	------------------------------*/
	officeSelects.forEach((select) => {
		select.addEventListener("change", () => {
			const value = select.value;

			// sync all dropdowns instantly
			syncSelects(value);

			// fetch once
			fetchHero(value);
		});
	});

	/* -----------------------------
	BACK BUTTON
	------------------------------*/
	window.addEventListener("popstate", () => {
		const url = new URL(window.location.href);
		const officeId = url.searchParams.get("office_id") || "0";

		syncSelects(officeId);
		fetchHero(officeId);
	});

})();

(() => {
	const fields = document.querySelectorAll('.hero-search__field');

	if (!fields.length) return;

	const allowedTypes = ['city', 'town', 'village', 'hamlet', 'suburb', 'locality'];

	fields.forEach((field) => {
		const input = field.querySelector('.location-search');
		const suggestions = field.querySelector('.location-suggestions');

		if (!input || !suggestions) return;

		let timeout;

		const clearSuggestions = () => {
			suggestions.innerHTML = '';
			suggestions.classList.remove('is-visible');
		};

		const showSuggestions = () => {
			suggestions.classList.toggle('is-visible', suggestions.children.length > 0);
		};

		input.addEventListener('input', () => {
			clearTimeout(timeout);

			const query = input.value.trim();

			if (query.length < 2) {
				clearSuggestions();
				return;
			}

			timeout = setTimeout(async () => {
				try {
					const url =
						`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}` +
						`&limit=8` +
						`&lang=en` +
						`&countrycode=GB` +
						`&bbox=-3.7,53.0,-1.9,55.0`;

					const res = await fetch(url);
					const data = await res.json();

					suggestions.innerHTML = '';

					data.features
						.filter(place =>
							place.properties &&
							place.properties.countrycode === 'GB' &&
							allowedTypes.includes(place.properties.osm_value)
						)
						.forEach(place => {
							const name = place.properties.name;
							if (!name) return;

							const district =
								place.properties.city ||
								place.properties.district ||
								'';

							const full =
								district && district !== name ?
								`${name}, ${district}` :
								name;

							const li = document.createElement('li');
							li.textContent = full;

							li.addEventListener('click', () => {
								input.value = name;
								clearSuggestions();
							});

							suggestions.appendChild(li);
						});

					showSuggestions();
				} catch (err) {
					console.error('Autocomplete error:', err);
					clearSuggestions();
				}
			}, 250);
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.hero-search__field')) {
			document.querySelectorAll('.location-suggestions').forEach((list) => {
				list.innerHTML = '';
				list.classList.remove('is-visible');
			});
		}
	});
})();
</script>