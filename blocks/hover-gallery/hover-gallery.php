
<?php
/**
* Block template for Hover Gallery
*/

$block_classes = get_block_classes('hover-gallery');

?>

<section class="block hover-gallery <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <div class="gallery-wrap">
            <?php if (have_rows('content_item')): ?>
            <div class="interactive-section">
                <div class="titles">
                    <?php
						$hover_gallery = [];
						while (have_rows('content_item')): the_row();
							$hover_gallery[] = [ 
								'title' => get_sub_field('title'),
								'description' => get_sub_field('description'),
								'image' => esc_url(get_sub_field('image')['url'])
							];
						endwhile;
						?>
                </div>

                <div class="shared-image">
                    <img id="hovered-image" src="<?php echo $hover_gallery[0]['image']; ?>" alt=""> </div>

                <div class="content-wrapper">
                    <?php foreach ($hover_gallery as $index => $item): ?> <div class="gallery-row" data-image="<?php echo esc_url($item['image']); ?>"> <div class="title">
                            <?php echo esc_html($item['title']); ?> </div>
                        <div class="description-wrap">
                            <div class="description">
                                <p><?php echo wp_strip_all_tags($item['description']); ?></p> </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </div> <?php if (!empty($hover_gallery)): ?> <div class="gallery-wrap-mobile">
        <div class="swiper gallery-mobile-swiper">
            <div class="swiper-wrapper">
                <?php foreach ($hover_gallery as $item): ?> <div class="swiper-slide">
                    <div class="gallery-mobile-slide">
                        <div class="gallery-image">
                            <img src="<?php echo esc_url($item['image']); ?>" alt=""> </div>
                        <div class="title">
                            <?php echo esc_html($item['title']); ?> </div>
                        <div class="description">
                            <p><?php echo wp_strip_all_tags($item['description']); ?></p> </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="swiper-buttons">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    <?php endif; ?>
</section>



