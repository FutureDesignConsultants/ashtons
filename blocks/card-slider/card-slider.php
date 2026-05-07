<?php
/**
* Block template for Card Slider
*/

$block_classes = get_block_classes('card-slider');
$displayButton = get_field('display_button');
$button = get_field('button');

?>

<section class="block card-slider <?php echo esc_attr($block_classes); ?> bg-off-white">
	<div class="wrap">
		<div class="swiper">
			<div class="swiper-wrapper">

				<?php if ( have_rows('card_slider') ) : ?>
				<?php while ( have_rows('card_slider') ) : the_row() ; ?>
				<?php 
                $bgColour = get_sub_field('card_colour');
                $header = get_sub_field('header');
                $text = get_sub_field('text');
                $img = get_sub_field('graphic');
                ?>
				<div class="swiper-slide">
					<div class="card" style="background: <?php echo $bgColour; ?>">
						<div class="content flex flex-col">
							<h4><?php echo $header; ?></h4>
							<p><?php echo $text; ?></p>
						</div>
						<?php if ( $img ) : ?>
						<img src="<?php echo esc_url($img['url']); ?>" alt="Card Graphic" />
						<?php endif; ?>
					</div>
				</div>
				<?php endwhile; ?>
				<?php endif; ?>
			</div>


			<div class="swiper-nav">
				<div class="swiper-button-prev">
					<svg class="arrow arrow-desktop" width="75" height="75" viewBox="0 0 75 75" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
							fill="#2D2D35" fill-opacity="0.5" />
						<path d="M55.7695 37.3892L18.4512 37.3892" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
						<path d="M31.5586 50.4541L18.2635 37.3891L31.5586 24.3242" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<svg class="arrow arrow-mobile" width="45" height="45" viewBox="0 0 45 45" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="22.5" cy="22.5" r="22.5" transform="rotate(-180 22.5 22.5)" fill="#FAF8F4" />
						<path d="M33.752 22.9004L11.1662 22.9004" stroke="#2D2D35" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M19.0977 31.0791L11.0512 22.8998L19.0977 14.7205" stroke="#2D2D35"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>

				<div class="swiper-button-next">
					<svg class="arrow arrow-desktop" width="75" height="75" viewBox="0 0 75 75" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.5" />
						<path d="M18.584 36.9644H55.9024" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M42.7949 23.8994L56.09 36.9644L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<svg class="arrow arrow-mobile" width="45" height="45" viewBox="0 0 45 45" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="22.5" cy="22.5" r="22.5" fill="#FAF8F4" />
						<path d="M11.248 22.0996L33.8338 22.0996" stroke="#2D2D35" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M25.9023 13.9209L33.9488 22.1002L25.9023 30.2795" stroke="#2D2D35"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
			</div>



		</div>

		<?php if ( $displayButton == true ) : ?>
		<div class="button-wrap flex align-center justify-center">
			<a class="cta-button square green" href="<?php echo $button['url']; ?>"><span
					class="cta-text"><?php echo $button['title']; ?></span></a>
		</div>
		<?php endif; ?>
	</div>
</section>