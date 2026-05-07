
<?php
/**
* Block template for Service Overview
*/

$block_classes = get_block_classes('service-overview');


?>

<section class="block service-overview <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<?php echo do_shortcode('[facetwp template="services"]'); ?>
    </div>
</section>






