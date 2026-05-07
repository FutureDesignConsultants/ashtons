<?php
/**
 * Block template for About Hero
 */

$block_classes = get_block_classes('about-hero');

$heading_line_one = get_field('heading_line_one');
$heading_line_one_colour = get_field('heading_line_one_colour');
$heading_line_two = get_field('heading_line_two');
$heading_line_two_colour = get_field('heading_line_two_colour');
$text = get_field('text');

?>

<section class="block about-hero bg-dark-grey <?php echo esc_attr($block_classes); ?>">
	<div class="bg-dec">
		<svg viewBox="0 0 1920 423" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M-159.711 372.287C176.132 368.832 371.405 102.996 709.642 59.2012C1262.26 -12.352 1337.91 356.878 1720.9 352.938C2008.43 349.979 2161.59 187.045 2161.59 187.045"
				stroke="url(#paint0_linear_10529_17471)" stroke-width="100" />
			<defs>
				<linearGradient id="paint0_linear_10529_17471" x1="-161.048" y1="242.365" x2="2161.92" y2="218.464"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#C1D42F" />
					<stop offset="0.475962" stop-color="#56C9B8" stop-opacity="0" />
					<stop offset="1" stop-color="#C1D42F" />
				</linearGradient>
			</defs>
		</svg>

	</div>

	<div class="wrap">
		<div class="content">
			<?php if ($heading_line_one || $heading_line_two) : ?>
			<h1 class="about-hero__title" data-anim="fade" data-duration="0.5" data-y="60">
				<?php if ($heading_line_one) : ?>
				<span class="about-hero__title-line about-hero__title-line--one"
					<?php if ($heading_line_one_colour) : ?>
					style="color: <?php echo esc_attr($heading_line_one_colour); ?>;" <?php endif; ?>>
					<?php echo esc_html($heading_line_one); ?>
				</span>
				<?php endif; ?>

				<?php if ($heading_line_two) : ?>
				<span class="about-hero__title-line about-hero__title-line--two"
					<?php if ($heading_line_two_colour) : ?>
					style="color: <?php echo esc_attr($heading_line_two_colour); ?>;" <?php endif; ?>>
					<?php echo esc_html($heading_line_two); ?>
				</span>
				<?php endif; ?>
			</h1>
			<?php endif; ?>
			<div class="text-wrap" data-anim="fade" data-duration="1" data-delay="0.3" data-y="60">
				<?php if ($text) : ?>
				<p class="about-hero__text text-off-white">
					<?php echo esc_html($text); ?>
				</p>
				<?php endif; ?>
			</div>
			<?php if (have_rows('buttons')) : ?>
			<div class="additional-buttons" data-anim="fade" data-delay="0.9" data-duration="0.5">
				<?php while (have_rows('buttons')) : the_row(); 
			$link = get_sub_field('link');
			if ($link) :
				$url = $link['url'];
				$title = $link['title'];
				$target = $link['target'] ? $link['target'] : '_self';
		?>
				<a href="<?php echo esc_url($url); ?>" target="<?php echo esc_attr($target); ?>"
					class="cta-button light-grey buy">
					<span class="cta-text"><?php echo esc_html($title); ?></span>
				</a>
				<?php 
			endif;
		endwhile; 
		?>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>