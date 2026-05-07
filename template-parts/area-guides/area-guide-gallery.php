<?php
$gallery = get_field('gallery');

if ( $gallery && is_array($gallery) ) :
	$slide_count = count($gallery);
?>
<section class="area-guide-gallery">
	<div class="swiper area-guide-gallery__swiper" data-area-guide-gallery-swiper>
		<div class="swiper-wrapper">
			<?php foreach ( $gallery as $image ) : ?>
			<div class="swiper-slide">
				<div class="area-guide-gallery__media">
					<img src="<?php echo esc_url($image['url']); ?>"
						alt="<?php echo esc_attr($image['alt'] ?: get_the_title()); ?>" loading="lazy"
						class="area-guide-gallery__img" />
				</div>
			</div>
			<?php endforeach; ?>
		</div>
	</div>

	<?php if ( $slide_count > 1 ) : ?>
	<button type="button" class="area-guide-gallery__nav area-guide-gallery__nav--prev" aria-label="Previous image">
		<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)" fill="#2D2D35"
				fill-opacity="0.75" />
			<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#FAF8F4" stroke-width="2"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>

	<button type="button" class="area-guide-gallery__nav area-guide-gallery__nav--next" aria-label="Next image">
		<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
			<path d="M18.584 36.5147L55.9024 36.5147" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
	</button>
	<?php endif; ?>
</section>
<?php endif; ?>