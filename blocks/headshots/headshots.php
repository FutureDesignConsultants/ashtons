<?php
/**
 * Block template for Headshots
 */

$block_classes = get_block_classes('headshots');
?>

<section class="block headshots bg-dark-grey <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<div class="headshots grid sm:grid-cols-4 lg:grid-cols-6 gap-32">
			<?php if (have_rows('headshots')) : ?>
			<?php while (have_rows('headshots')) : the_row(); 
					$image = get_sub_field('image');
				?>
			<?php if ($image) : ?>
			<div class="headshot-wrap" data-anim="fade" data-duration="1" data-y="120">
				<?php echo wp_get_attachment_image($image['ID'], 'full'); ?>
			</div>
			<?php endif; ?>
			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
	<svg class="ribbon" viewBox="0 0 1920 383" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M-58.1875 50C240.65 50 287.312 333 636.312 333C1076.81 333 1274.41 50 1615.2 50C1871.05 50 2008.81 240 2008.81 240"
			stroke="url(#ribbonGradient-buy)" stroke-width="100" />
		<defs>
			<linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0 0)">
				<stop offset="0" stop-color="#C1D42F" />
				<stop offset="0.28" stop-color="#9FD76A" />
				<stop offset="0.538462" stop-color="#56C9B8" />
				<stop offset="0.78" stop-color="#96D78A" />
				<stop offset="1" stop-color="#C1D42F" />
			</linearGradient>
		</defs>
	</svg>

</section>