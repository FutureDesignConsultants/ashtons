
<?php
/**
* Block template for Full Width Image
*/

$block_classes = get_block_classes('full-width-image');


?>

<section class="block full-width-image <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="grid grid-cols-1">
			<?php 
			$image = get_field('image');
			if( !empty( $image ) ): ?>
			<div class="img-wrap">
				<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
			</div>
			<?php endif; ?>
		</div>
    </div>
</section>



