<?php
/**
 * Block template for Guide Hero
 */

$block_classes = get_block_classes('guide-hero');

$guide_type      = get_field('guide_type');
$line_one        = get_field('line_one');
$line_two        = get_field('line_two');
$line_one_colour = get_field('line_one_colour');
$wave            = get_field('wave');

$variant_class = $guide_type ? 'guide-hero--' . sanitize_html_class($guide_type) : '';
$inner_class   = $guide_type ? 'guide-hero__inner--' . sanitize_html_class($guide_type) : '';
$title_class   = $guide_type === 'area' ? 'guide-hero__title--area' : '';

$ribbon_markup = '';

if ($guide_type === 'buyers') {
	$ribbon_markup = '
		<svg class="hero-ribbon hero-ribbon--buyers" width="977" height="321" viewBox="0 0 977 321" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.1758 195.792C124.625 235.099 266.612 288.374 430.625 265.099C607.818 239.954 735.354 83.1674 919.015 54.3656C1056.9 32.7423 1143.29 98.5081 1143.29 98.5081"
				stroke="url(#paint0_linear_buyers)" stroke-width="100"
			/>
			<defs>
				<linearGradient id="paint0_linear_buyers" x1="26.9511" y1="258.127" x2="1140.92" y2="83.4337" gradientUnits="userSpaceOnUse">
					<stop offset="0.0673077" stop-color="#C1D42F" stop-opacity="0" />
					<stop offset="0.538462" stop-color="#56C9B8" />
					<stop offset="1" stop-color="#C1D42F" />
				</linearGradient>
			</defs>
		</svg>
	';
} elseif ($guide_type === 'tenants') {
	$ribbon_markup = '
		<svg class="hero-ribbon hero-ribbon--tenants" width="977" height="321" viewBox="0 0 977 321" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.1758 195.792C124.625 235.099 266.612 288.374 430.625 265.099C607.818 239.954 735.354 83.1674 919.015 54.3656C1056.9 32.7423 1143.29 98.5081 1143.29 98.5081"
				stroke="url(#paint0_linear_tenants)" stroke-width="100"
			/>
			<defs>
				<linearGradient id="paint0_linear_tenants" x1="26.9511" y1="258.127" x2="1140.92" y2="83.4337" gradientUnits="userSpaceOnUse">
					<stop offset="0.0673077" stop-color="#F36F21" stop-opacity="0" />
					<stop offset="0.538462" stop-color="#F9B233" />
					<stop offset="1" stop-color="#F36F21" />
				</linearGradient>
			</defs>
		</svg>
	';
}
?>

<section class="block guide-hero <?php echo esc_attr(trim($block_classes . ' ' . $variant_class)); ?> bg-dark-grey">
	<div class="wrap">
		<div class="guide-hero__inner <?php echo esc_attr($inner_class); ?>">
			<div class="guide-hero__content">
				<h1 class="guide-hero__title text-white <?php echo esc_attr($title_class); ?>">
					<?php if ($line_one) : ?>
					<span class="line-one" data-anim="fade" data-duration="0.5" data-y="60"
						<?php if ($line_one_colour) : ?> style="color: <?php echo esc_attr($line_one_colour); ?>;"
						<?php endif; ?>>
						<?php echo esc_html($line_one); ?>
					</span>
					<?php endif; ?>

					<?php if ($line_two) : ?>
					<span class="line-two" data-anim="fade" data-y="60" data-duration="0.5" data-delay="0.35">
						<?php echo esc_html($line_two); ?>
					</span>
					<?php endif; ?>
				</h1>
			</div>

			<div class="guide-hero__icon" data-anim="fade" data-duration="0.5" data-y="60" data-delay="0.7">
				<?php if ($guide_type === 'buyers') : ?>
				<div class="buyer-icon">
					<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/buyers-icon.svg'); ?>"
						alt="Buyers icon" class="guide-hero__icon-image">
				</div>
				<?php elseif ($guide_type === 'tenants') : ?>
				<div class="tenant-icon">
					<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/tenants-icon.svg'); ?>"
						alt="Tenants icon" class="guide-hero__icon-image">
				</div>
				<?php elseif ($guide_type === 'area') : ?>
				<div class="area-icon">
					<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/area-guide-icon.svg'); ?>"
						alt="Area icon" class="guide-hero__icon-image">
				</div>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<?php if ($ribbon_markup) : ?>
	<?php echo $ribbon_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<?php endif; ?>
</section>