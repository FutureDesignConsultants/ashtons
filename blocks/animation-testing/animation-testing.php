
<?php
/**
* Block template for Animation Testing
*/

$block_classes = get_block_classes('animation-testing');


?>

<section class="block animation-testing <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 fade-in-up">Fade in up</h2>
		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 fade-in-down">Fade in down</h2>
		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 fade-in-right">Fade in right</h2>
		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 fade-in-left">Fade in left</h2>
		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center; gap: 1rem;">
			<h2 class="mar-btm-32 fade-in-up">Fade in up</h2>
			<h2 class="mar-btm-32 fade-in-up" data-delay="0.5"> with delay</h2>
			<!--- This is how you would use delay in a relationship / repeater field --->
			<?php
				$related_posts = get_field('related_items');

				if ($related_posts):
					$i = 0;
					foreach ($related_posts as $post):
						setup_postdata($post);
						$delay = $i * 0.2;
						?>
						<div class="fade-in-up" data-delay="<?php echo esc_attr($delay); ?>">
							<h3><?php the_title(); ?></h3>
							<p><?php the_excerpt(); ?></p>
						</div>
						<?php
						$i++;
					endforeach;
					wp_reset_postdata();
				endif;
				?>

		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 split-text">This animation fades in each word one by one </h2>
		</div>
		<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
			<h2 class="mar-btm-32 mask-text">This animation <br> will mask the<br> text from the bottom </h2>
		</div>


	
    </div>
</section>




