
<?php
/**
* Block template for Image Column Two
*/

$block_classes = get_block_classes('image-column-two');


?>

<section class="block image-column-two <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="grid gap-16 grid-cols-1 md:grid-cols-2">
			<?php if( have_rows('images') ): ?>
    			<?php while( have_rows('images') ): the_row(); 
        			$image = get_sub_field('image');
        		?>

				<?php 
				if( !empty( $image ) ): ?>
				<div class="img-wrap">
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
				</div>
				<?php endif; ?>

    			<?php endwhile; ?>
			<?php endif; ?>
		</div>
    </div>
</section>



