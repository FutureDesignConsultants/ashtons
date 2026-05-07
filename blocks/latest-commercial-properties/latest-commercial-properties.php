<?php
/**
 * Block template for Latest Commercial Properties
 */

$block_classes = get_block_classes('latest-commercial-properties');

$q_args = [
	'post_type'      => 'property',
	'post_status'    => 'publish',
	'posts_per_page' => 12,
	'orderby'        => 'date',
	'order'          => 'DESC',
	'no_found_rows'  => true,
	'meta_query'     => [
		'relation' => 'AND',
		[
			'key'     => '_on_market',
			'value'   => 'yes',
			'compare' => '=',
		],
		[
			'key'     => '_department',
			'value'   => 'commercial',
			'compare' => '=',
		],
	],
];

$q = new WP_Query($q_args);
?>





<section class="block latest-commercial-properties <?php echo esc_attr($block_classes); ?>">
	<svg class="ribbon" viewBox="0 0 1920 315" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M-86.475 49.9306C211.949 65.6372 277.49 245.917 582.121 261.95C1093.11 288.844 1244.28 77.3184 1584.59 95.2299C1840.09 108.677 1970.51 251.821 1970.51 251.821"
			stroke="url(#ribbonGradient-buy)" stroke-width="100" />
		<defs>
			<linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0 0)">
				<stop stop-color="#FCF3B4" />
				<stop offset="0.538462" stop-color="#FFEB54" />
				<stop offset="1" stop-color="#FCF3B4" />
			</linearGradient>
		</defs>
	</svg>
	<div class="wrap">

		<?php if (!empty($q) && $q->have_posts()) : ?>

		<div class="property-similar">

			<div class="property-similar__top">
				<h2>LATEST COMMERCIAL PROPERTIES</h2>

				<div class="property-similar__nav">
					<button type="button" class="swiper-button-prev property-swiper__prev buy" aria-label="Previous">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)"
								stroke="#2D2D35" />
							<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#2D2D35" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#2D2D35" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>

					<button type="button" class="swiper-button-next property-swiper__next buy" aria-label="Next">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="36.6768" stroke="#2D2D35" />
							<path d="M18.584 36.5146H55.9024" stroke="#2D2D35" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#2D2D35" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>

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
								<img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title()); ?>"
									loading="lazy" decoding="async">
								<?php endif; ?>
							</div>

							<div class="mega-card__body text-dark-grey">
								<div class="flex gap-16">

									<?php if (!empty($price)) : ?>
									<span class="mega-card__price"><?php echo wp_kses_post($price); ?></span>
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

										<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?> bed</span>
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
			</div>
		</div>

		<?php else : ?>
		<p class="mega-cards-empty">No similar properties found.</p>
		<?php endif; ?>
	</div>
</section>