
<?php
/**
* Block template for Related Articles
*/

$block_classes = get_block_classes('related-articles');

$related_articles = get_field('related_articles');

?>

<section class="block related-articles <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<?php if ($related_articles): ?>
			<div class="grid gap-64 grid-cols-1 sm:grid-cols-3">
				<?php foreach ($related_articles as $article): ?>
					<article>
						<a href="<?php echo get_permalink($article); ?>" class="related-card">
							<?php
							$thumbnail_url = get_the_post_thumbnail_url($article, 'large');
							if ($thumbnail_url): ?>
								<div class="thumbnail">
									<img
										src="<?php echo esc_url($thumbnail_url); ?>"
										alt="<?php echo esc_attr(get_the_title($article)); ?>"
									>
									<div class="cta-overlay">View</div>
								</div>
							<?php endif; ?>
							
							<h3 class="mar-top-32"><?php echo esc_html(get_the_title($article)); ?></h3>
							
							<?php
							$intro = get_field('introduction', $article);
							if ($intro): ?>
								<p class="mar-top-16"><?php echo esc_html($intro); ?></p>
							<?php endif; ?>
						</a>
					</article>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

    </div>
</section>



