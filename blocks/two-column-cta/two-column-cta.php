<?php
/**
* Block template for Two column CTA
*/

$block_classes = get_block_classes('two-column-cta');

$background_colour = get_field('background_colour') ?: 'yellow';





$card_repeater = get_field('card_repeater');
?>

<section class="block two-column-cta <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <div class="cards-container">
            <?php if (have_rows('card_repeater')): ?>
            <?php while (have_rows('card_repeater')): the_row(); ?>

            <?php
            // $card_background = get_sub_field('card_background');
            $background_colour = get_sub_field('background_colour');

            $bg_classes = [
                'yellow' => 'bg-yellow-tint',
                'pink' => 'bg-pink-tint',
                'blue' => 'bg-blue-tint',
            ];

            $bg_class = $bg_classes[$background_colour] ?? 'bg-yellow-tint';
            $title = get_sub_field('title');
            $body_text = get_sub_field('body_text');
            $image = get_sub_field('image');
            $button_background = get_sub_field('button_background');
            $cta = get_sub_field('cta');
            ?>

            <div class="single-card-container <?php echo esc_attr($bg_class); ?>">

                <div class="left-side">
                    <?php if ($title): ?>
                    <h4 class="title"><?php echo esc_html($title); ?></h4>
                    <?php endif; ?>

                    <?php if ($body_text): ?>
                    <p class="body"><?php echo esc_html($body_text); ?></p>
                    <?php endif; ?>

                    <?php if ($cta): 
                        $url = $cta['url'];
                        $title = $cta['title'];
                        $target = $cta['target'] ?: '_self';
                    ?>

                    <a class="cta-button square <?php echo esc_attr($button_background); ?>" href="<?php echo esc_url($url); ?>" target="<?php echo esc_attr($target); ?>">
                        <?php echo esc_html($title); ?>
                    </a>
                    <?php endif; ?>

                </div>

                <div class="right-side">
                    <div class="img-container">
                        
                                            <?php if ($image): ?>
                                            <img class="team-member-image" src="<?php echo esc_url($image['url']); ?>"
                                                alt="<?php echo esc_attr($image['alt']); ?>">
                                            <?php endif; ?>

                    </div>
                </div>





            </div>

            <?php endwhile; ?>
            <?php endif; ?>
        </div>
</section>