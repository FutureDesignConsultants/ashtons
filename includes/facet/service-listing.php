<?php if (have_posts()) : ?>
    <div class="grid gap-80 grid-cols-1"> 
        <?php while (have_posts()) : the_post(); ?>
            <?php 
                $excerpt = get_field('short_excerpt', get_the_ID()); 
                $intro = get_field('introduction', get_the_ID());
                $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
            ?>
            <article>
                <div class="grid gap-40 grid-cols-1 sm:grid-cols-2 sm-gap-32">
                    <?php if ($thumbnail_url): ?>
                        <div class="thumbnail">
                            <img
                                src="<?php echo esc_url($thumbnail_url); ?>"
                                alt="<?php echo esc_attr(get_the_title()); ?>"
                            >
                        </div>
                    <?php endif; ?>

                    <div class="content flex flex-col justify-between">
						<div class="title">
							<h2><?php the_title(); ?></h2>

							<?php if ($excerpt): ?>
								<h3 class="mar-top-8"><?php echo esc_html($excerpt); ?></h3>
							<?php endif; ?>
						</div>

						<div class="text">
							<?php if ($intro): ?>
								<p class="mar-btm-32 mar-top-16"><?php echo esc_html($intro); ?></p>
							<?php endif; ?>

							<a href="<?php the_permalink(); ?>" class="cta-button black">
								<span class="cta-text">View</span>
								<svg class="cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
									<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
						</div>
                    </div>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
<?php endif; ?>
