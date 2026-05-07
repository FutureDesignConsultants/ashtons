
<?php
/**
* Block template for Full Width Text Callout
*/

$block_classes = get_block_classes('full-width-text-callout');

$text = get_field('text');

?>

<section class="block full-width-text-callout <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="content">
			<?php if ($text): ?>
				<h2><?php echo esc_html($text); ?></h2>
			<?php endif; ?>
		</div>
    </div>
</section>



