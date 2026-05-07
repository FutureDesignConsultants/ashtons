<?php

// Shows What addresses we can filter between using _address_three - Need to find a cleaner and more precise way to filter
// global $wpdb;

// $rows = $wpdb->get_results("
//   SELECT DISTINCT meta_value
//   FROM wp_postmeta
//   WHERE meta_key = '_address_three'
// ");

// var_dump($rows);

// list of available locations using _address_three as the filterable key
// "Warrington", "St. Helens", "Widnes", "Prescot",  "Leigh", "Middlewich", "Wigan", "Runcorn", "Newton-Le-Willows", "Knutsford", "Liverpool", "Lymm", "St Helens", "Greater Manchester", "Bolton", "Frodsham", "Manchester"


$area_map = [
	'Great Sankey' => 'warrington',
	'Stockton Heath' => 'warrington',
	'Ashton-In-Makerfield' => 'wigan',
	'Cronton' => 'prescot'
];

$area_name = get_the_title();
$search_area = $area_map[$area_name] ?? $area_name;

$buy_ids  = array();
$rent_ids = array();
$sold_ids = array();

$buy_q  = null;
$rent_q = null;
$sold_q = null;

if ( $area_name ) {

	$base_meta_query = array(
		array(
			'key'     => '_address_three',
			'value'   => $search_area,
			'compare' => 'LIKE',
		),
	);

	// Get all residential sales in this area, including sold/STC
	$all_sales_q = new WP_Query(array(
		'post_type'        => 'property',
		'post_status'      => 'publish',
		'posts_per_page'   => -1,
		'orderby'          => 'date',
		'order'            => 'DESC',
		'no_found_rows'    => true,
		'meta_query'       => array(
			'relation' => 'AND',
			...$base_meta_query,
			array(
				'key'     => '_department',
				'value'   => 'residential-sales',
				'compare' => '=',
			),
		),
		'include_sold_stc' => 1,
	));

	if ( $all_sales_q->have_posts() ) {
		while ( $all_sales_q->have_posts() ) {
			$all_sales_q->the_post();

			$post_id = get_the_ID();
			$post_classes = get_post_class('', $post_id);

			$is_sold = in_array('availability-sold-stc', $post_classes, true)
				|| in_array('availability-sold', $post_classes, true);

			if ( $is_sold ) {
				$sold_ids[] = $post_id;
			} else {
				$buy_ids[] = $post_id;
			}
		}
		wp_reset_postdata();
	}

	// Build Buy query from IDs
	if ( ! empty( $buy_ids ) ) {
		$buy_q = new WP_Query(array(
			'post_type'      => 'property',
			'post_status'    => 'publish',
			'posts_per_page' => 16,
			'post__in'       => $buy_ids,
			'orderby'        => 'post__in',
			'no_found_rows'  => true,
		));
	}

	// Build Sold query from IDs
	if ( ! empty( $sold_ids ) ) {
		$sold_q = new WP_Query(array(
			'post_type'      => 'property',
			'post_status'    => 'publish',
			'posts_per_page' => 16,
			'post__in'       => $sold_ids,
			'orderby'        => 'post__in',
			'no_found_rows'  => true,
		));
	}

	// Rent stays separate
	$rent_q = new WP_Query(array(
		'post_type'      => 'property',
		'post_status'    => 'publish',
		'posts_per_page' => 16,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'no_found_rows'  => true,
		'meta_query'     => array(
			'relation' => 'AND',
			...$base_meta_query,
			array(
				'key'     => '_department',
				'value'   => 'residential-lettings',
				'compare' => '=',
			),
			array(
				'key'     => '_on_market',
				'value'   => 'yes',
				'compare' => '=',
			),
		),
	));
}

$has_buy  = $buy_q && $buy_q->have_posts();
$has_rent = $rent_q && $rent_q->have_posts();
$has_sold = $sold_q && $sold_q->have_posts();
?>



<?php if ( $has_buy || $has_rent || $has_sold ) : ?>
<section class="property-similar area-guide-properties is-buy" data-area-guide-properties>
	<div class="property-similar__top">
		<div class="property-similar__heading flex align-center justify-between gap-24">
			<h2>Local Properties</h2>

			<div class="property-similar__toggles flex gap-8" role="tablist" aria-label="Property type">
				<?php if ( $has_buy ) : ?>
				<button type="button" class="toggle-btn is-active" data-toggle="buy" role="tab" aria-selected="true">
					To Buy
				</button>
				<?php endif; ?>

				<?php if ( $has_rent ) : ?>
				<button type="button" class="toggle-btn <?php echo ! $has_buy ? 'is-active' : ''; ?>" data-toggle="rent"
					role="tab" aria-selected="<?php echo ! $has_buy ? 'true' : 'false'; ?>">
					To Rent
				</button>
				<?php endif; ?>

				<?php if ( $has_sold ) : ?>
				<button type="button" class="toggle-btn <?php echo ! $has_buy && ! $has_rent ? 'is-active' : ''; ?>"
					data-toggle="sold" role="tab"
					aria-selected="<?php echo ! $has_buy && ! $has_rent ? 'true' : 'false'; ?>">
					Sold
				</button>
				<?php endif; ?>
			</div>
		</div>

		<div class="property-similar__nav">
			<button type="button" class="swiper-button-prev property-swiper__prev" aria-label="Previous">
				<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)"
						stroke="#2D2D35" />
					<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#2D2D35" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#2D2D35" stroke-width="2"
						stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>

			<button type="button" class="swiper-button-next property-swiper__next" aria-label="Next">
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

	<div class="property-similar__panels">

		<?php
		$panels = array(
			'buy'  => $buy_q,
			'rent' => $rent_q,
			'sold' => $sold_q,
		);

		$first_active = $has_buy ? 'buy' : ( $has_rent ? 'rent' : 'sold' );

		foreach ( $panels as $key => $query ) :
			if ( ! $query || ! $query->have_posts() ) {
				continue;
			}
		?>
		<div class="toggle-panel <?php echo $key === $first_active ? 'is-active' : ''; ?>"
			data-panel="<?php echo esc_attr( $key ); ?>" <?php echo $key === $first_active ? '' : 'hidden'; ?>>
			<div class="swiper property-swiper" data-area-property-swiper>
				<div class="swiper-wrapper">
					<?php while ( $query->have_posts() ) : $query->the_post();
							$property = new PH_Property( get_the_ID() );

							$thumb    = $property->get_main_photo_src('thumbnail');
							$img      = $property->get_main_photo_src('large');
							$price    = $property->get_formatted_price();
							$bedrooms = (int) get_post_meta( get_the_ID(), '_bedrooms', true );

							if ( ! $bedrooms ) {
								$bedrooms = (int) get_post_meta( get_the_ID(), 'bedrooms', true );
							}
						?>
					<div class="swiper-slide">
						<a class="mega-card" href="<?php the_permalink(); ?>">
							<div class="mega-card__media">
								<?php if ( $key === 'sold' ) : ?>
								<span class="mega-card__tag mega-card__tag--sold">Just sold</span>
								<?php endif; ?>
								<?php if ( ! empty( $img ) ) : ?>
								<img src="<?php echo esc_url( $img ); ?>"
									alt="<?php echo esc_attr( get_the_title() ); ?>" loading="lazy" decoding="async">
								<?php endif; ?>
							</div>

							<div class="mega-card__body text-dark-grey">
								<div class="flex gap-16">
									<?php if ( ! empty( $price ) ) : ?>
									<span class="mega-card__price"><?php echo esc_html( $price ); ?></span>
									<?php endif; ?>

									<?php if ( $bedrooms > 0 ) : ?>
									<div class="flex align-center gap-8">
										<!-- bed icon -->
										<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M3.46231 13.123V14.4584H2.12695V13.123" stroke="#B8B9BD"
												stroke-linecap="round" stroke-linejoin="round" />
											<path d="M16.8158 13.123V14.4584H15.4805V13.123" stroke="#B8B9BD"
												stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M16.489 7.84277H2.5354C1.4112 7.84277 0.5 8.77155 0.5 9.91742V11.848H18.5234V9.91742C18.5234 8.77155 17.6122 7.84277 16.488 7.84277H16.489Z"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M15.5784 7.36877V5.512C15.5784 4.92189 15.1486 4.44434 14.6173 4.44434H11.2755C10.7443 4.44434 10.3145 4.92189 10.3145 5.512V7.36877"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M8.85552 7.36877V5.512C8.85552 4.92189 8.4137 4.44434 7.86773 4.44434H4.4331C3.88713 4.44434 3.44531 4.92189 3.44531 5.512V7.36877"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
										<span class="mega-card__beds"><?php echo esc_html( $bedrooms ); ?> bed</span>

									</div>
									<?php endif; ?>
								</div>

								<div class="mega-card__title mar-top-8">
									<?php
											$title = get_the_title();
											$title = preg_replace('/,([^,]+,[^,]+)$/', '<br>$1', $title);
											echo wp_kses_post( $title );
											?>
								</div>

								<?php if ( ! empty( $thumb ) ) : ?>
								<span class="sr-only" data-thumb="<?php echo esc_url( $thumb ); ?>"></span>
								<?php endif; ?>
							</div>
						</a>
					</div>
					<?php endwhile; wp_reset_postdata(); ?>
				</div>
			</div>
		</div>
		<?php endforeach; ?>

	</div>
</section>
<?php endif; ?>

<script>
document.addEventListener("click", (e) => {
	const btn = e.target.closest(".toggle-btn");
	if (!btn) return;

	const wrapper = btn.closest("[data-area-guide-properties]");
	if (!wrapper) return;

	const type = btn.dataset.toggle;

	// toggle button states
	wrapper.querySelectorAll(".toggle-btn").forEach((b) => {
		b.classList.remove("is-active");
		b.setAttribute("aria-selected", "false");
	});

	btn.classList.add("is-active");
	btn.setAttribute("aria-selected", "true");

	// toggle panels
	wrapper.querySelectorAll(".toggle-panel").forEach((panel) => {
		const match = panel.dataset.panel === type;
		panel.classList.toggle("is-active", match);
		panel.hidden = !match;
	});

	// set CSS state on wrapper
	wrapper.classList.remove("is-buy", "is-rent", "is-sold");
	wrapper.classList.add(`is-${type}`);
});
</script>