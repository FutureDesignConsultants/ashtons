<?php
/**
* Block template for Full Width Title CTA
*/

$block_classes = get_block_classes('full-width-title-cta');

$title = get_field('title');
$text = get_field('paragraph');
$cta = get_field('cta');
?>

<section class="block bg-off-white text-dark-grey full-width-title-cta <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">

		<div class="content">

			<?php if ($title): ?>
			<h2 data-anim="fade" data-duration="1" data-y="120">
				<?php echo nl2br(esc_html($title)); ?>
				<img class="left"
					src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/binoculars.svg'); ?>"
					alt="" aria-hidden="true">
				<img class="right"
					src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/sign-icon.svg'); ?>"
					alt="" aria-hidden="true">
			</h2>
			<?php endif; ?>

			<?php if ($text): ?>
			<div class="paragraph" data-anim="fade" data-duration="1" data-delay="0.5" data-y="120">
				<p>
					<?php
$allowed_tags = wp_kses_allowed_html('post');

unset($allowed_tags['h1']);
unset($allowed_tags['h2']);
unset($allowed_tags['h3']);
unset($allowed_tags['h4']);
unset($allowed_tags['h5']);
unset($allowed_tags['h6']);

echo wp_kses($text, $allowed_tags);
?></p>
			</div>
			<?php endif; ?>

			<?php 
			if ($cta):
				$url = esc_url($cta['url']);
				$cta_title = esc_html($cta['title']);
				$target = $cta['target'] ? esc_attr($cta['target']) : '_self';
			?>
			<a href="<?php echo $url; ?>" class="cta-button green square" target="<?php echo $target; ?>"
				data-anim="fade" data-duration="1.5" data-delay="0.5">
				<span><?php echo $cta_title; ?></span>

			</a>
			<?php endif; ?>

		</div>
	</div>
</section>