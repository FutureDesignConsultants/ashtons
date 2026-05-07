
<?php
/**
* Block template for Title and Content
*/

$block_classes = get_block_classes('title-and-content');

$subtitle = get_field('subtitle');
$title = get_field('title');
$primary = get_field('primary_text');
$secondary = get_field('secondary_text');

?>

<section class="block title-and-content <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="w-100">
			<?php if ($subtitle): ?>
				<h2 class="mar-btm-32"><?php echo esc_html($subtitle); ?></h2>
			<?php endif; ?>
		</div>
		<div class="text-wrap flex flex-col md:flex-row">
			<div class="title md-w-50">
				<?php if ($title): ?>
					<h3 class="mar-btm-32"><?php echo esc_html($title); ?></h3>
				<?php endif; ?>
			</div>
			<div class="content md-w-50">
				<?php if ($primary): ?>
					<p class="mar-btm-32"><?php echo esc_html($primary); ?></p>
				<?php endif; ?>
				<?php if ($secondary): ?>
					<p class="secondary"><?php echo esc_html($secondary); ?></p>
				<?php endif; ?>
			</div>
		</div>
    </div>
</section>



