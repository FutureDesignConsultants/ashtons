<?php
/**
 * Block template for Full Width CTA Banner
 */

$block_classes = get_block_classes('full-width-cta-banner');

$content = get_field('content');
$cta = get_field('cta');
$illustration = get_field('illustration');

$illustration_map = [
	'illustration-1' => get_template_directory_uri() . '/assets/images/svg/rocket.svg',
	'illustration-2' => get_template_directory_uri() . '/assets/images/svg/land.svg',
];

$illustration_src = $illustration_map[$illustration] ?? '';
$illustration_class = $illustration ? 'illustration-wrap--' . sanitize_html_class($illustration) : '';
?>

<section class="block full-width-cta-banner bg-off-white <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<div class="grid grid-cols-1 md:grid-cols-12 text-dark-grey gap-32">
			<div class="banner-wrap bg-pink-tint grid grid-cols-1 md:grid-cols-12 gap-32">

				<div class="content">
					<?php if ($content) : ?>
					<div class="wysiwyg">
						<?php echo wp_kses_post($content); ?>
					</div>
					<?php endif; ?>

					<?php if ($cta) :
						$url = $cta['url'];
						$title = $cta['title'];
						$target = $cta['target'] ? $cta['target'] : '_self';
					?>
					<a class="cta-button square pink" href="<?php echo esc_url($url); ?>"
						target="<?php echo esc_attr($target); ?>">
						<span><?php echo esc_html($title); ?></span>
					</a>
					<?php endif; ?>
				</div>

				<div class="illustration-wrap <?php echo esc_attr($illustration_class); ?>">
					<?php if ($illustration_src) : ?>
					<img src="<?php echo esc_url($illustration_src); ?>" alt="" aria-hidden="true">
					<?php endif; ?>
				</div>

			</div>
		</div>
	</div>
</section>