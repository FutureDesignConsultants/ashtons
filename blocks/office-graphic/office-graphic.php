<?php
/**
* Block template for Office Graphic
*/

$block_classes = get_block_classes('office-graphic');

$text  = get_field('text');   // WYSIWYG
$image = get_field('image');  // Image array
$cta   = get_field('cta');    // Link field
$anchor_id = get_field('anchor_id');

?>

<section class="block office-graphic bg-off-white <?php echo esc_attr($block_classes); ?>"
	id="<?php echo ($anchor_id); ?>">
	<div class="wrap">
		<div class="grid gap-32 grid-cols-12">

			<div class="text text-dark-grey">
				<?php if ($text) : ?>
				<?php echo wp_kses_post($text); ?>
				<?php endif; ?>

				<?php if ($cta && !empty($cta['url'])) : ?>
				<a href="<?php echo esc_url($cta['url']); ?>"
					target="<?php echo esc_attr($cta['target'] ?: '_self'); ?>" class="cta-button green square">
					<span>
						<?php echo esc_html($cta['title']); ?>
					</span>
				</a>
				<?php endif; ?>
			</div>

			<div class="image">
				<?php if (!empty($image)) : ?>
				<img src="<?php echo esc_url($image['url']); ?>"
					alt="<?php echo esc_attr($image['alt'] ?: $image['title']); ?>">
				<?php endif; ?>
			</div>

		</div>
	</div>
</section>