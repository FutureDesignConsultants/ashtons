<?php
/**
 * Template for Single Blog Post
 */

get_header();

?>


<main>

	<?php if ( have_posts() ) :
    while ( have_posts() ) : the_post(); ?>
	<section class="block single-blog pad-btm-48">
		<div class="wrap grid grid-cols-12">
			<div class="single-blog-hero">
				<div class="top">
					<div class="date flex align-center">
						<p class="text-white"><?php echo get_the_date('jS F Y'); ?></p>
						<svg width="43" height="1" viewBox="0 0 43 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="0.5" x2="42.5" y2="0.5" stroke="white" />
						</svg>
						<p class="text-white">NEWS</p>
					</div>

					<h1 class="pad-top-32 pad-btm-32"><?php the_title(); ?></h1>

					<div class="excerpt">
						<p>Property tax regulations for landlords keep changing and create complex compliance
							requirements
							that can overwhelm even experienced property owners.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="single-banner-img bg-grey-white-gradient">
		<div class="wrap grid grid-cols-12">
			<?php $bannerImg = get_field('banner_image'); ?>
			<?php if ( $bannerImg ) : ?>
			<div class="banner-img">
				<img src="<?php echo esc_url($bannerImg['url']); ?>" alt="<?php echo esc_attr($bannerImg['alt']); ?>" />
			</div>
			<?php endif; ?>
		</div>
	</section>

	<section class="single-blog-content bg-off-white">
		<div class="wrap">

			<div class="grid grid-cols-12 gap-16">
				<div class="content main-content">
					<?php the_content() ?>

					<a class="cta-button green square" href="/news-insights">
						<span>Back to news</span>
					</a>

				</div>

				<?php
                $relatedArticles = get_field('related_posts');
                
                if($relatedArticles ) : ?>
				<div class="side-bar">
					<h2>TOP PICKS</h2>
					<?php foreach( $relatedArticles as $article ) : 
                        $thumbnail = get_field('thumbnail_image', $article->ID); // 'thumbnail' = your ACF field name
                        ?>
					<a class="top-pick grid" href="<?php echo get_permalink($article->ID) ?>">
						<div class="img-related">
							<?php if( $thumbnail ): ?>
							<img src="<?php echo esc_url($thumbnail['url']); ?>"
								alt="<?php echo esc_attr($thumbnail['alt']); ?>" />
							<?php endif; ?>
						</div>

						<div class="content">
							<p><?php echo get_the_date('d.m.y', $article->ID); ?></p>
							<h3><?php echo $article->post_title; ?></h3>
						</div>
					</a>
					<?php endforeach; ?>
				</div>
				<?php endif; ?>
			</div>

		</div>
	</section>

	<?php endwhile; ?>
	<?php endif; ?>

</main>

<?php

get_footer();
?>