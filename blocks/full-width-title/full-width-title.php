
<?php
/**
* Block template for Full Width Title
*/

$block_classes = get_block_classes('full-width-title');

$subtitle = get_field('subtitle');
$title = get_field('title');
$text = get_field('text');


?>

<section class="block full-width-title <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="content">
			<?php if ($subtitle): ?>
				<h3 class="mar-btm-32"><?php echo esc_html($subtitle); ?></h3>
			<?php endif; ?>
			<?php if ($title): ?>
				<h2 class="mar-btm-32"><?php echo esc_html($title); ?></h2>
			<?php endif; ?>
			<?php if ($text): ?>
				<p class="mar-btm-32"><?php echo esc_html($text); ?></p>
			<?php endif; ?>
		</div>
    </div>
</section>



