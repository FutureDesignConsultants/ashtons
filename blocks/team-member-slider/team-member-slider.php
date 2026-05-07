
<?php
/**
* Block template for Team Member Slider
*/

$block_classes = get_block_classes('team-member-slider');

$team_members = get_field('team_member_slider');
?>

<section class="block team-member-slider text-white <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
    	<?php if ($team_members): ?>
      		<div class="glide team-glide">
        		<div class="glide__track" data-glide-el="track">
          			<ul class="glide__slides">
            			<?php foreach ($team_members as $member): ?>
              			<li class="glide__slide">
                			<div class="team-slide-card">
								<?php
									$img = get_the_post_thumbnail_url($member->ID, 'large');
									$role = get_field('job_role', $member->ID);
									$desc = get_field('description', $member->ID);
								?>
								<?php if ($img): ?>
									<div class="img-wrap">
										<img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title($member)); ?>" />
										
										<div class="text-overlay flex flex-col justify-between">
											  <?php if ($desc): ?>
													<p class="description"><?php echo esc_html($desc); ?></p>
												<?php endif; ?>
											<div class="title-overlay flex justify-between">
												<div class="text">
													<h3><?php echo esc_html(get_the_title($member)); ?></h3>
													<?php if ($role): ?>
													<p class="job-role"><?php echo esc_html($role); ?></p>
													<?php endif; ?>
												</div>
												<div class="icon">
													<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.79 45.78">
											
													<ellipse class="cls-1" cx="22.9" cy="22.89" rx="22.9" ry="22.89"/>
													<path class="cls-2 vertical" d="M23.38,14.83V31.92"/>
													<path class="cls-2" d="M31.93,23.37H14.84"/>
													</svg>
												</div>
											</div>
										</div>
									</div>

								<?php endif; ?>

					
		
                			</div>

							
             			</li>
            			<?php endforeach; ?>
          			</ul>
        		</div>

				<div class="glide__arrows flex justify-end gap-16 mar-top-32" data-glide-el="controls">
					<button class="glide__arrow glide__arrow--prev" data-glide-dir="<?php echo htmlspecialchars('<', ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5); ?>">
						<!-- Prev SVG -->
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.35 57.35">
							
							<circle class="cls-1" cx="28.67" cy="28.67" r="28.17"/>
							<path class="cls-1" d="M28.72,42.2l-13.57-14.07m0,0l13.57-14.07m-13.57,14.07h24.89"/>
						</svg>
					</button>

					<button class="glide__arrow glide__arrow--next" data-glide-dir="<?php echo htmlspecialchars('>', ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5); ?>">
					<!-- Next SVG -->
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.35 57.35">
						
						<circle class="cls-1" cx="28.67" cy="28.67" r="28.17"></circle>
						<path class="cls-1" d="M28.62,15.15l13.57,14.07m0,0l-13.57,14.07m13.57-14.07H17.31"></path>
						</svg>
					</button>
				</div>
      		</div>
    	<?php endif; ?>
  </div>
</section>



