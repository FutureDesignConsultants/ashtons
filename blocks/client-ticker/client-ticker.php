
<?php
/**
* Block template for Client Ticker
*/

$block_classes = get_block_classes('client-ticker');
$featured_posts = get_field('client_ticker');
?>

<section class="block client-ticker <?php echo esc_attr($block_classes); ?>">
    <div class="marquee-container">
		<div class="marquee-track">
            <div class="marquee-content">
    			<?php foreach ($featured_posts as $post): ?>
                    <?php 
                        setup_postdata($post); 
                        $thumbnail = get_the_post_thumbnail_url($post, 'large');
                        $link = get_field('client_link', $post->ID);
                        ?>
                    <a class="marquee-item" 
                        <?php if (!empty($link['url'])) : ?>
                            href="<?php echo esc_url($link['url']); ?>"
                        <?php endif; ?>
                        target="_blank">
                        <img src="<?php echo esc_url($thumbnail); ?>" alt=""/>
                    </a>
			    <?php endforeach; ?>
            </div>
		</div>
	</div>
</section>