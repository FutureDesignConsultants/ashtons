
<?php
/**
* Block template for Featured Post
*/

$block_classes = get_block_classes('featured-post');

$title = get_field('title');
$featured_post = get_field('featured_post');
?>

<section class="block featured-post <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<?php if ($featured_post): ?>
			<?php foreach ($featured_post as $post_item): ?>
				<a href="<?php echo get_permalink($post_item); ?>" class="featured-post-link">
					<article class="grid grid-cols-1 sm:grid-cols-2 gap-64">
						<div class="content">
							<?php if ($title): ?>
								<h2><?php echo esc_html($title); ?></h2>
							<?php endif; ?>

							<h3 class="mar-top-8"><?php echo esc_html(get_the_title($post_item)); ?></h3>

							<?php
								$intro = get_field('introduction', $post_item);
								if ($intro): ?>
									<p class="mar-top-16"><?php echo esc_html($intro); ?></p>
							<?php endif; ?>
							<div class="show-sm">
								<div class="cta-button black mar-top-32">
									<span class="cta-text">Contact</span>
									<svg class="cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
										<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
							
						</div>
						<div class="thumbnail">
							<?php
							$thumbnail_url = get_the_post_thumbnail_url($post_item, 'large');
							if ($thumbnail_url): ?>
									<img src="<?php echo esc_url($thumbnail_url); ?>"
								alt="<?php echo esc_attr(get_the_title($post_item)); ?>">
							<?php endif; ?>
								
						</div>
					</article>
				</a>
			<?php endforeach; ?>
		<?php endif; ?>

    </div>
</section>




