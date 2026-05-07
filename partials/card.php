<?php
if ( ! defined( 'ABSPATH' ) ) exit;

global $property;
if ( ! $property ) return;

$post_id   = get_the_ID();
$permalink = get_permalink( $post_id );
$title     = get_the_title( $post_id );

// --------------------
// Coordinates (for map)
// --------------------
$lat = get_post_meta($post_id, '_latitude', true);
$lng = get_post_meta($post_id, '_longitude', true);

// --------------------
// Price
// --------------------
$price = '';
if ( is_object($property) && method_exists($property, 'get_formatted_price') ) {
  $price = $property->get_formatted_price();
} else {
  $price = get_post_meta($post_id, '_price', true);
}

// --------------------
// Beds
// --------------------
$beds = $property->bedrooms ?? get_post_meta($post_id, '_bedrooms', true);

// --------------------
// Address
// --------------------
$addr_1    = get_post_meta($post_id, '_address_name_number', true);
$addr_2    = get_post_meta($post_id, '_address_street', true);
$addr_city = get_post_meta($post_id, '_address_town', true);
$addr_pc   = get_post_meta($post_id, '_address_postcode', true);

$address_parts = array_filter([
  trim($addr_1 . ' ' . $addr_2),
  $addr_city,
  $addr_pc,
]);
$address = implode(', ', $address_parts);

// --------------------
// Availability tag + state
// --------------------
$post_classes = get_post_class('', $post_id);

$is_sold = in_array('availability-sold-stc', $post_classes, true)
  || in_array('availability-sold', $post_classes, true);

$is_let_agreed = in_array('availability-let-agreed', $post_classes, true)
  || in_array('availability-let-agreed-stc', $post_classes, true)
  || in_array('availability-let_agreed', $post_classes, true);

if ($is_sold) {
  $state_class = 'sell';
  $tag_text = 'Just sold';
} elseif ($is_let_agreed) {
  $state_class = 'rent';
  $tag_text = 'Let agreed';
} else {
  $state_class = 'buy';
  $tag_text = '';
}

// --------------------
// Photos
// --------------------
$photos_raw = get_post_meta($post_id, '_photo_urls', true);
$photos     = maybe_unserialize($photos_raw);

$image_urls = [];
if ( is_array($photos) ) {
  foreach ( $photos as $item ) {
    if ( is_array($item) && ! empty($item['url']) ) {
      $image_urls[] = $item['url'];
    }
  }
}
$popup_img = !empty($image_urls) ? $image_urls[0] : '';

$image_urls = array_values(array_unique(array_filter($image_urls)));
?>

<article class="mega-card" data-card-href="<?php echo esc_url($permalink); ?>"
	data-property-id="<?php echo esc_attr($post_id); ?>" <?php if ($lat !== '') : ?>
	data-lat="<?php echo esc_attr($lat); ?>" <?php endif; ?> <?php if ($lng !== '') : ?>
	data-lng="<?php echo esc_attr($lng); ?>" <?php endif; ?> <?php if ($price) : ?>
	data-price="<?php echo esc_attr( wp_strip_all_tags($price) ); ?>" <?php endif; ?> <?php if ((int)$beds > 0) : ?>
	data-beds="<?php echo esc_attr((int)$beds); ?>" <?php endif; ?> <?php if ($address) : ?>
	data-address="<?php echo esc_attr($address); ?>" <?php endif; ?> <?php if ($popup_img) : ?>
	data-image="<?php echo esc_url($popup_img); ?>" <?php endif; ?> data-sold="<?php echo $is_sold ? '1' : '0'; ?>">

	<a class="mega-card__whole-link" href="<?php echo esc_url($permalink); ?>"></a>

	<div class="mega-card__media <?php echo esc_attr($state_class); ?>">
		<?php if ( $tag_text ) : ?>
		<span class="mega-card__tag <?php echo esc_attr($state_class); ?>">
			<?php echo esc_html($tag_text); ?>
		</span>
		<?php endif; ?>

		<?php if ( ! empty($image_urls) ) : ?>
		<div class="swiper mega-card-swiper" data-mega-card-swiper>
			<div class="swiper-wrapper">
				<?php foreach ( $image_urls as $src ) : ?>
				<div class="swiper-slide">
					<img src="<?php echo esc_url($src); ?>" alt="<?php echo esc_attr($title); ?>" loading="lazy"
						class="mega-card__img" />
				</div>
				<?php endforeach; ?>
			</div>
			<?php if ( count($image_urls) > 1 ) : ?>
			<div class="swiper-pagination"></div>
			<?php endif; ?>
		</div>

		<?php if ( count($image_urls) > 1 ) : ?>
		<button class="mega-card__nav mega-card__nav--prev" type="button" aria-label="Previous image"><svg width="35"
				height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="17.5" cy="17.5" r="17.5" transform="rotate(-180 17.5 17.5)" fill="#FAF8F4"
					fill-opacity="0.75" />
				<path d="M26.2539 17.8125L8.68724 17.8125" stroke="#2D2D35" stroke-linecap="round"
					stroke-linejoin="round" />
				<path d="M14.8535 24.1729L8.59518 17.8112L14.8535 11.4495" stroke="#2D2D35" stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</button>
		<button class="mega-card__nav mega-card__nav--next" type="button" aria-label="Next image"><svg width="35"
				height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="17.5" cy="17.5" r="17.5" fill="#FAF8F4" fill-opacity="0.75" />
				<path d="M8.74609 17.1875H26.3128" stroke="#2D2D35" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M20.1465 10.8271L26.4048 17.1888L20.1465 23.5505" stroke="#2D2D35" stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</button>
		<?php endif; ?>
		<?php endif; ?>
	</div>

	<div class="mega-card__body text-dark-grey">
		<div class="flex gap-16">

			<?php if ( ! empty($price) ) : ?>
			<span class="mega-card__price"><?php echo wp_kses_post($price); ?></span>
			<?php endif; ?>

			<?php if ( (int) $beds > 0 ) : ?>
			<div class="flex align-center gap-8">
				<!-- bed icon -->
				<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
						stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3.46231 13.123V14.4584H2.12695V13.123" stroke="#B8B9BD" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M16.8158 13.123V14.4584H15.4805V13.123" stroke="#B8B9BD" stroke-linecap="round"
						stroke-linejoin="round" />
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

				<span class="mega-card__beds"><?php echo esc_html((int) $beds); ?> bed</span>
			</div>
			<?php endif; ?>

		</div>

		<div class="mega-card__title mar-top-8"><?php echo esc_html($title); ?></div>
	</div>

</article>