<?php
$block_classes = get_block_classes('dynamic-image');

// Remove existing bg/text utility classes coming from helper
$block_classes = preg_replace('/\b(?:bg|text)-[^\s]+\b/', '', $block_classes);
$block_classes = trim($block_classes);

$image              = get_field('image');
$image_position     = get_field('image_position') ?: 'left';
$image_fit          = get_field('image_fit') ?: 'cover';
$image_parallax     = get_field('image_parallax') ?: 'parallax';
$content            = get_field('content');
$cta                = get_field('cta');
$wave_colour        = get_field('wave_colour') ?: 'green';
$display_wave       = get_field('display_wave');
$display_icon       = get_field('display_icon');
$icon               = get_field('icon');
$background_colour  = get_field('background_colour') ?: 'white';

$anchor_id               = get_field('anchor_id');


$position_class = 'dynamic-image--' . sanitize_html_class($image_position);
$image_fit_class = 'dynamic-image--fit-' . sanitize_html_class($image_fit);
$parallax_media_attr = ($image_parallax === 'parallax') ? 'data-parallax-image' : '';
$wave_class = 'dynamic-image__wave--' . sanitize_html_class($wave_colour);

$bg_classes = [
	'white'    => 'bg-off-white',
	'pink'     => 'bg-pink-tint',
	'yellow'   => 'bg-yellow-tint',
	'blue'     => 'bg-blue-tint',
	'charcoal' => 'bg-dark-grey',
];

$bg_class = $bg_classes[$background_colour] ?? 'bg-off-white';
$text_class = ($bg_class === 'bg-dark-grey') ? 'text-off-white' : 'text-dark-grey';

$display_cta = get_field('display_cta');
$cta_colour  = get_field('cta_colour') ?: 'green';

$cta_classes = [
	'green'  => 'green',
	'grey'   => 'grey',
	'blue'   => 'blue',
	'orange' => 'orange',
	'pink'   => 'pink',
];

$cta_colour_class = $cta_classes[$cta_colour] ?? 'green';

$content_alignment = get_field('content_alignment') ?: 'align-start';
$alignment_class = sanitize_html_class($content_alignment);
?>

<section
	class="block dynamic-image <?php echo esc_attr(trim($block_classes . ' ' . $text_class . ' ' . $bg_class . ' ' . $position_class . ' ' . $image_fit_class)); ?>"
	id="<?php echo ($anchor_id); ?>">
	<div class="wrap">
		<div class="dynamic-image__inner <?php echo esc_attr($alignment_class); ?>">

			<?php if ($image) : ?>
			<div class="dynamic-image__media" <?php echo $parallax_media_attr; ?>>
				<?php echo wp_get_attachment_image($image['ID'], 'full', false, [
	'class' => 'dynamic-image__image',
	'style' => 'transform: translate3d(0, -8%, 0) scale(1.12);'
]); ?>
			</div>
			<?php endif; ?>

			<div class="dynamic-image__content" data-anim="fade" data-duration="1" data-y="90">

				<?php if ($display_icon && $icon) : ?>
				<div class="dynamic-image__icon">
					<?php echo wp_get_attachment_image($icon['ID'], 'full', false, ['class' => 'dynamic-image__icon-image']); ?>
				</div>
				<?php endif; ?>

				<?php if ($content) : ?>
				<div class="dynamic-image__wysiwyg">
					<?php echo wp_kses_post($content); ?>
				</div>
				<?php endif; ?>

				<?php if ($display_cta && $cta) : ?>
				<a class="cta-button <?php echo esc_attr($cta_colour_class); ?> square"
					href="<?php echo esc_url($cta['url']); ?>" <?php if (!empty($cta['target'])) : ?>
					target="<?php echo esc_attr($cta['target']); ?>" <?php endif; ?>>
					<span><?php echo esc_html($cta['title']); ?></span>
				</a>
				<?php endif; ?>
			</div>

		</div>
	</div>

	<?php if ($image_position === 'left' && $display_wave) : ?>
	<?php if ($wave_colour === 'green') : ?>
	<div class="dynamic-image__wave <?php echo esc_attr($wave_class); ?>" data-parallax data-parallax-speed="0.2">
		<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/green-wave-left.svg'); ?>"
			alt="" aria-hidden="true">
	</div>
	<?php elseif ($wave_colour === 'orange') : ?>
	<div class="dynamic-image__wave <?php echo esc_attr($wave_class); ?>" data-parallax data-parallax-speed="0.2">
		<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/orange-wave-left.svg'); ?>"
			alt="" aria-hidden="true">
	</div>
	<?php endif; ?>
	<?php endif; ?>

	<?php if ($image_position === 'right' && $display_wave) : ?>
	<?php if ($wave_colour === 'green') : ?>
	<div class="dynamic-image__wave-right <?php echo esc_attr($wave_class); ?>" data-parallax data-parallax-speed="0.2">
		<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/green-wave-right.svg'); ?>"
			alt="" aria-hidden="true">
	</div>
	<?php elseif ($wave_colour === 'orange') : ?>
	<div class="dynamic-image__wave-right <?php echo esc_attr($wave_class); ?>" data-parallax data-parallax-speed="0.2">
		<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/orange-wave-right.svg'); ?>"
			alt="" aria-hidden="true">
	</div>
	<?php endif; ?>
	<?php endif; ?>

</section>