<?php
/**
 * Block template for Case Study Listing
 */

$block_classes = get_block_classes('case-study-listing');

$case_studies = get_field('case_study_listing');

?>

<section class="block case-study-listing <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <?php if ($case_studies): ?>
            <div class="case-study-cards grid gap-64 grid-cols-1 sm:grid-cols-2">
                <?php foreach ($case_studies as $case_study): ?>
					<article>
						<a href="<?php echo get_permalink($case_study); ?>" class="case-study-card">
							<?php
							$thumbnail_url = get_the_post_thumbnail_url($case_study, 'large');
							if ($thumbnail_url): ?>
								<div class="thumbnail">
									<img
										src="<?php echo esc_url($thumbnail_url); ?>"
										alt="<?php echo esc_attr(get_the_title($case_study)); ?>"
									>
									<div class="cta-overlay">View</div>
								</div>
							<?php endif; ?>
							
							<h3 class="mar-top-32"><?php echo esc_html(get_the_title($case_study)); ?></h3>
							
							<?php
							$intro = get_field('introduction', $case_study);
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
