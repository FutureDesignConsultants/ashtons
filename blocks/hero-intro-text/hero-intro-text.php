
<?php
/**
* Block template for Hero Intro Text
*/

$block_classes = get_block_classes('hero-intro-text');

$title = get_field('title_override');
$text = get_field('paragraph_text');

?>


<section class="block hero-intro-text <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">

		<svg xmlns="http://www.w3.org/2000/svg" class="mar-btm-64" viewBox="0 0 155.86 155.86">
  			<circle cx="77.93" cy="77.93" r="77.93" fill="#24242d"/>
		</svg>
	
		<?php if ($title): ?>
			<div class="mar-btm-32">
			   <?php echo wp_kses_post($title); ?>
		    </div>
		<?php else: ?>
			<h1 class="text-black mar-btm-32"><?php echo esc_html(get_the_title()); ?></h1>
		<?php endif; ?>

		<?php if ($text): ?>
		    <p><?php echo esc_html($text); ?></p>
		<?php endif; ?>

    </div>
</section>



