
<?php
/**
* Block template for Pre Launch Insta
*/

$block_classes = get_block_classes('pre-launch-insta');


?>

<section class="block pre-launch-insta <?php echo esc_attr($block_classes); ?> bg-off-white">
    <div class="wrap">
        <div class="insta-wrap">
		    <?php echo do_shortcode('[instagram-feed feed=2]'); ?>
        </div>
    </div>
</section>



