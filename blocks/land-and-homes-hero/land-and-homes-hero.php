<?php
/**
* Block template for Land and Homes Hero
*/

$block_classes = get_block_classes('land-and-homes-hero');

$title = get_field('title');
$text  = get_field('text');
$cta   = get_field('cta');
$image = get_field('image');
$team_members = get_field('team_members');
?>

<section class="block land-and-homes-hero bg-off-white <?php echo esc_attr($block_classes); ?>">
	<svg class="bg-ribbon" viewBox="0 0 1692 879" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M23.3828 824.319C267.912 694.949 557.268 893.132 826.03 804.619C1265.14 660.003 1113.81 247.421 1392.66 99.8898C1602.02 -10.8709 1803.55 97.3451 1803.55 97.3451"
			stroke="url(#paint0_linear_10364_72159)" stroke-width="100" />
		<defs>
			<linearGradient id="paint0_linear_10364_72159" x1="94.8948" y1="959.487" x2="1786.26" y2="64.6572"
				gradientUnits="userSpaceOnUse">
				<stop offset="0.379808" stop-color="#FAF8F4" />
				<stop offset="0.615385" stop-color="#FCBBCA" />
				<stop offset="1" stop-color="#FF2E69" />
			</linearGradient>
		</defs>
	</svg>

	<div class="wrap">
		<div class="grid grid-cols-12 sm:gap-32">

			<div class="left">

				<?php if ($title) : ?>
				<h1 class="hero-title" data-anim="fade" data-duration="0.5" data-y="60">
					<?php echo esc_html($title); ?>
				</h1>
				<?php endif; ?>

				<?php if ($text) : ?>
				<p class="hero-text" data-anim="fade" data-duration="0.5" data-y="60" data-delay="0.3">
					<?php echo wp_kses_post($text); ?>
				</p>
				<?php endif; ?>

				<?php if ($cta) : 
					$url = $cta['url'];
					$title = $cta['title'];
					$target = $cta['target'] ? $cta['target'] : '_self';
				?>
				<a data-anim="fade" data-duration="0.5" data-delay="0.3" class="cta-button square pink"
					href="<?php echo esc_url($url); ?>" target="<?php echo esc_attr($target); ?>">
					<?php echo esc_html($title); ?>
				</a>
				<?php endif; ?>

			</div>

			<div class="right" data-anim="fade" data-duration="0.5" data-delay="0.6">

				<?php if ($image) : ?>
				<div class="hero-image">
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
				</div>
				<?php endif; ?>



				<?php if ($team_members): ?>
				<?php foreach ($team_members as $member): ?>
				<?php
                        $img = get_field('team_member_image', $member->ID);
                        $first_name = get_field('first_name', $member->ID);
                        $full_name = get_field('full_name', $member->ID);
                        $description = get_field('description', $member->ID);
                 

                    ?>
				<div class="team-member-container" id="team-member-container">
					<div class="hover-div-container" id="hover-div-container">

						<div class="">
							<?php if ($full_name): ?>
							<p class="full-name"><?php echo esc_html($full_name); ?></p>
							<?php endif; ?>
							<?php if ($description): ?>
							<p class="description"><?php echo esc_html($description); ?></p>
							<?php endif; ?>
						</div>

						<div>
							<?php if ($hover_description): ?>
							<p class="hover_description"><?php echo esc_html($hover_description); ?></p>
							<?php endif; ?>
						</div>



					</div>


					<?php if ($img): ?>
					<img class="team-member-image" src="<?php echo esc_url($img['url']); ?>"
						alt="<?php echo esc_attr($img['alt']); ?>">
					<?php endif; ?>

					<?php if ($first_name): ?>
					<div class="name-hover">
						<p class="name"><?php echo esc_html($first_name); ?></p>

						<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.12493 18.2102C3.66423 18.4681 3.19877 18.7108 2.73216 18.9606C2.4357 19.1187 2.12945 19.3149 1.81937 19.4454C1.46658 19.5944 1.20081 19.5623 0.815086 19.6915C0.261946 19.8731 -0.250832 19.2231 0.133137 18.7468C0.476891 18.3183 0.63986 17.958 1.05538 17.5772C1.52929 17.148 2.00021 16.7147 2.47117 16.2814C3.3547 15.4631 4.33794 14.7657 5.28756 14.0304C7.18384 12.5557 9.05061 11.04 10.8938 9.49166C12.6785 7.99168 14.478 6.51214 16.2391 4.97944C18.0895 3.36363 19.8158 1.53267 21.9017 0.225818C23.1753 -0.569191 24.6185 0.895719 23.7201 2.14146C22.3228 4.08332 20.3956 5.59285 18.5936 7.15506C16.7279 8.77565 14.8494 10.3869 12.897 11.8959C10.9978 13.3666 9.06901 14.7964 7.11369 16.1893C6.1375 16.8878 5.17378 17.6209 4.12607 18.2031L4.12493 18.2102Z"
								fill="#2D2D35" />
						</svg>

					</div>
					<?php endif; ?>

					<div class="team-member-content" id="team-member-content">



						<?php if ($full_name): ?>
						<p class="full-name"><?php echo esc_html($full_name); ?></p>
						<?php endif; ?>


						<?php if ($description): ?>
						<p class="description"><?php echo esc_html($description); ?></p>
						<?php endif; ?>

					</div>








				</div>


				<?php endforeach; ?>
				<?php endif; ?>

			</div>

		</div>
	</div>
</section>