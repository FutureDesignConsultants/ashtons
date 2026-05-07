<?php
/**
* Block template for Article Content
*/

$block_classes = get_block_classes('article-content');

$articleContent = get_field('content_editor');


?>

<section class="block article-content <?php echo esc_attr($block_classes); ?> bg-off-white">
	<div class="wrap">
		<h1><?php the_title(); ?></h1>
		<?php if ($articleContent): ?>
		<?php echo $articleContent; ?>
		<?php endif; ?>
	</div>
</section>