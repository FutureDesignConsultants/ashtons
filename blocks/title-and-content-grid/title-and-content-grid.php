
<?php
/**
* Block template for Title and Content Grid
*/

$block_classes = get_block_classes('title-and-content-grid');

$content_grid = get_field('content_grid');

?>

<section class="block title-and-content-grid <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <?php if ($content_grid): ?>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-40">
                <?php foreach ($content_grid as $row): ?>
                    <div class="grid-item">
                        <?php if (!empty($row['title'])): ?>
                            <h3><?php echo esc_html($row['title']); ?></h3>
                        <?php endif; ?>
                        <?php if (!empty($row['content'])): ?>
							<div class="text mar-top-16">
								<p><?php echo nl2br(esc_html($row['content'])); ?></p>
							</div>
						<?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>



