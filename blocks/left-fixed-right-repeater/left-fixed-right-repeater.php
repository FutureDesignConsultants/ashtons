<?php
/**
* Block template for Left fixed right repeater
*/

$block_classes = get_block_classes('left-fixed-right-repeater');

$title = get_field('title');
$underline_word = get_field('underline_word');
$subheading = get_field('subheading');
$body_text = get_field('body_text');
$section_repeater = get_field('section_repeater');
$anchor_id = get_field('anchor_id');
?>



<section id="<?php echo ($anchor_id); ?>"
	class="block left-fixed-right-repeater <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<div class="main-container">
			<div class="left-container">
				<div class="left-parent">
					<h3>
						<?php if ($underline_word) : ?>
						<span class="underline"><?php echo esc_html($underline_word); ?></span>
						<?php endif; ?>
						<?php echo esc_html($title); ?>
					</h3>



					<p class="subheading">
						<?php echo esc_html($subheading); ?>
					</p>

					<p class="p-body">
						<?php echo esc_html($body_text); ?>

					</p>
				</div>


			</div>


			<div class="right-container">

				<?php if (have_rows('section_repeater')): ?>

				<?php while (have_rows('section_repeater')): the_row(); ?>

				<?php
            $image = get_sub_field('image');
            $title = get_sub_field('title');
            $description = get_sub_field('description');

            ?>

				<div class="repeater-item">

					<?php if ($image): ?>
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
					<?php endif; ?>

					<h4 class="title">
						<?php if ($title): ?>
						<?php if ($underline_word) : ?>
						<span class="underline"><?php echo esc_html($underline_word); ?></span>
						<?php endif; ?>
						<?php echo esc_html($title); ?>
					</h4>

					<?php endif; ?>

					<?php if ($description): ?>
					<p class="description"><?php echo esc_html($description); ?></p>
					<?php endif; ?>

				</div>

				<?php endwhile; ?>

				<?php endif; ?>

			</div>
		</div>
	</div>
</section>