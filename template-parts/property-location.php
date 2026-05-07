<?php
$lat = get_post_meta(get_the_ID(), '_latitude', true);
$lng = get_post_meta(get_the_ID(), '_longitude', true);

$title   = get_the_title();
$url     = get_permalink();

$address = get_post_meta(get_the_ID(), '_address_concatenated', true);
$address = is_array($address) ? ($address[0] ?? '') : $address;

$google_maps_url = '';

if ($address) {
	$google_maps_url = 'https://www.google.com/maps/search/?api=1&query=' . urlencode($address);
} elseif ($lat && $lng) {
	$google_maps_url = 'https://www.google.com/maps/search/?api=1&query=' . $lat . ',' . $lng;
}
?>

<section class="property-location" data-anim="fade" data-lat="<?php echo esc_attr($lat); ?>"
	data-lng="<?php echo esc_attr($lng); ?>" data-title="<?php echo esc_attr($title); ?>"
	data-url="<?php echo esc_url($url); ?>" data-address="<?php echo esc_attr($address); ?>">
	<div class="title flex gap-16">
		<h2>Location</h2>
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)" fill="#C1D42F" />
			<path d="M22.0498 10.8267L22.0498 32.5708" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
	<div id="property-location-map" class="property-location__map">
		<a href="<?php echo esc_url($google_maps_url); ?>" target="_blank" class="cta-button grey square view-google">
			<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.57143 0.5C3.66555 0.5 0.5 3.69943 0.5 7.6471C0.5 12.5856 7.57143 18.5 7.57143 18.5C7.57143 18.5 14.6429 12.5856 14.6429 7.6471C14.6429 3.70018 11.4773 0.5 7.57143 0.5Z"
					stroke="#FAF8F4" stroke-miterlimit="10" />
				<path
					d="M3.61133 7.64711C3.61133 9.85717 5.38422 11.649 7.57088 11.649C9.75754 11.649 11.5304 9.85717 11.5304 7.64711C11.5304 5.43704 9.75754 3.64518 7.57088 3.64518C5.38422 3.64518 3.61133 5.43704 3.61133 7.64711Z"
					stroke="#FAF8F4" stroke-miterlimit="10" />
			</svg>

			<span class="cta-text">View on Google</span>

		</a>
	</div>
	<div class="local-area flex justify-end align-center gap-32">
		<p>Want to know more about the local area?</p>
		<a href="<?php echo get_site_url();?>/area-guides" class="cta-button green">
			<span class="cta-text">Read our Area Guides</span>

		</a>

	</div>


</section>