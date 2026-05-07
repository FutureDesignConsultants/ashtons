<?php
/**
 * Block template for Testimonials with Swiper.js
 */

$block_classes = get_block_classes('testimonials');
$image = get_field('image');
$heading = get_field('heading');
$testimonials = get_field('testimonials');

?>

<section class="block testimonials <?php echo esc_attr($block_classes); ?> bg-dark-grey">
	<div class="wrap">
		<div class="grid grid-cols-12 gap-16 mar-top-16">
			<div class="left-grid">
				<div class="img-wrapper">
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['title']); ?>" />
				</div>
				<div class="swiper-buttons">
					<div class="swiper-button-prev"><svg width="75" height="75" viewBox="0 0 75 75" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)"
								stroke="#C1D42F" />
							<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.35 74.35">
							<circle cx="37.18" cy="37.18" r="36.68" fill="none" stroke="#c1d42f" />
							<path d="M18.58 36.51H55.9" fill="none" stroke="#faf8f4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M42.8 23l13.3 13.51-13.3 13.51" fill="none" stroke="#faf8f4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg></div>
				</div>
			</div>
			<div class="testimonial-wrapper">
				<div class="heading">
					<h2 data-anim="fade" data-y="120"><?php echo $heading; ?></h2>
				</div>
				<div class="swiper">
					<?php if (!empty($testimonials)): ?>
					<div class="swiper-wrapper">
						<?php
                        foreach ($testimonials as $post):
                            setup_postdata($post);
                            $testimonial_text = get_field('testimonial', $post->ID);
                            $job_role = get_field('name_and_company', $post->ID);
                        ?>
						<div class="swiper-slide" data-anim="fade" data-y="60" data-delay="0.6">
							<p><?php echo wp_kses_post($testimonial_text); ?></p>
							<p class="name-company">
								<?php if ($job_role): ?>
								<?php echo esc_html($job_role); ?>
								<?php endif; ?>
							</p>
						</div>

						<?php
                    endforeach;
                    ?>
					</div>
					<?php else: ?>
					<p>No testimonials found.</p>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>