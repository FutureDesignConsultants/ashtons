
<?php
/**
* Block template for Service Listing
*/

$block_classes = get_block_classes('service-listing');

$services = get_field('listing');
?>

<section class="block service-listing <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <?php if ($services): ?>
            <article class="service-cards grid gap-64 lg:gap-32 grid-cols-1 sm:grid-cols-3">
                <?php foreach ($services as $service): ?>
                    <a href="<?php echo get_permalink($service); ?>" class="service-card">
                        <?php
						$thumbnail_url = get_the_post_thumbnail_url($service, 'large');
						if ($thumbnail_url): ?>
							<div class="thumbnail">
								<img
									src="<?php echo esc_url($thumbnail_url); ?>"
									alt="<?php echo esc_attr(get_the_title($service)); ?>"
								>
								<div class="cta-overlay">View</div>
							</div>

						<?php endif; ?>
                        
                        <h3 class="mar-top-32"><?php echo esc_html(get_the_title($service)); ?></h3>
                        
                        <?php
                        $intro = get_field('introduction', $service);
                        if ($intro): ?>
                            <p class="mar-top-16"><?php echo esc_html($intro); ?></p>
                        <?php endif; ?>
                    </a>
                <?php endforeach; ?>
            </article>
        <?php endif; ?>
    </div>
</section>



