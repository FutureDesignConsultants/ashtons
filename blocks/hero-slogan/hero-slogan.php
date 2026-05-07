
<?php
/**
* Block template for Hero Slogan
*/

$block_classes = get_block_classes('hero-slogan');

$line_one = get_field('heading_line_one');
$line_two = get_field('heading_line_two');

?>



<section class="block hero-slogan <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">

		<svg xmlns="http://www.w3.org/2000/svg" class="mar-btm-64" viewBox="0 0 155.86 155.86">
  			<circle cx="77.93" cy="77.93" r="77.93" fill="#24242d"/>
		</svg>

        <h1 class="text-white flex flex-col">
            <?php if ($line_one): ?>
                <span class="line-one"><?php echo esc_html($line_one); ?></span>
            <?php endif; ?>
            <?php if ($line_two): ?>
                <span class="line-two"><?php echo esc_html($line_two); ?></span>
            <?php endif; ?>
        </h1>
    </div>
</section>





