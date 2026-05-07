<?php if (have_posts()) : ?>
    <div class="grid gap-64 grid-cols-1 sm:grid-cols-2"> 
        <?php while (have_posts()) : the_post(); ?>
            <article>
                <a href="<?php the_permalink(); ?>" class="case-study-card">
                    <?php
                    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
                    if ($thumbnail_url): ?>
                        <div class="thumbnail">
                            <img
                                src="<?php echo esc_url($thumbnail_url); ?>"
                                alt="<?php echo esc_attr(get_the_title()); ?>"
                            >
                            <div class="cta-overlay">View</div>
                        </div>
                    <?php endif; ?>

                    <h3 class="mar-top-32"><?php the_title(); ?></h3>

                    <?php
					$intro = get_field('introduction', get_the_ID());
                    if ($intro): ?>
                        <p class="mar-top-16"><?php echo esc_html($intro); ?></p>
                    <?php endif; ?>
                </a>
            </article>
        <?php endwhile; ?>
    </div>
<?php endif; ?>
