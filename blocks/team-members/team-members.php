<?php
/**
* Block template for Team members
*/

$block_classes = get_block_classes('team-members');

$team_members = get_field('team_members');

?>

<section class="block team-members <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<div class="team-members-container">


			<?php if ($team_members): ?>
			<?php foreach ($team_members as $member): ?>
			<?php
                        $img = get_field('team_member_image', $member->ID);
                        $first_name = get_field('first_name', $member->ID);
                        $full_name = get_field('full_name', $member->ID);
                        $description = get_field('description', $member->ID);
                        $hover_description = get_field('hover_description', $member->ID);
                        $email = get_field('email', $member->ID);
                        $phone_number = get_field('phone_number', $member->ID);


                    ?>
			<div class="team-member-container" id="team-member-container">
				<div class="hover-div-container" id="hover-div-container">

					<div class="">
						<?php if ($full_name): ?>
						<p class="full-name"><?php echo esc_html($full_name); ?></p>
						<?php endif; ?>
						<?php if ($description): ?>
						<p class="description">
							<?php echo esc_html($description); ?>
						</p>
						<?php endif; ?>
					</div>

					<div>
						<?php if ($hover_description): ?>
						<p class="hover_description"><?php echo esc_html($hover_description); ?></p>
						<?php endif; ?>
					</div>

					<div class="flex w-full align-center md:flex-row flex-col gap-16 md:gap-16 contact-div">
						<?php if ($email): ?>
						<a href="mailto:<?php echo esc_html($email); ?>" class="email cta-button square light-team"><svg
								width="20" height="14" viewBox="0 0 20 14" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_10364_35412)">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M1.04855 1.8036L6.82491 6.82218L1.04855 11.8397V1.8036ZM18.0029 1.08622L10.0628 7.9836C10.05 7.99477 10.0294 7.99477 10.0167 7.9836L2.07749 1.08622H18.0029ZM18.9514 11.8397L13.1751 6.82116L18.9514 1.80258V11.8387V11.8397ZM12.2923 7.58935L18.4208 12.9138H1.57921L7.7077 7.58935L9.68906 9.31064C9.85974 9.45899 10.1373 9.46103 10.306 9.3147L12.2913 7.59036L12.2923 7.58935ZM0.798431 0H19.2026C19.642 0 20.001 0.371897 20.001 0.827116V13.1739C20.001 13.6291 19.642 14.001 19.2026 14.001H0.798431C0.359 14.001 0 13.6291 0 13.1739V0.827116C0 0.371897 0.359 0 0.798431 0Z"
										fill="#2D2D35" />
								</g>
								<defs>
									<clipPath id="clip0_10364_35412">
										<rect width="20" height="14" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>Email me</span></a>
						<?php endif; ?>

						<?php if ($phone_number): ?>
						<a href="tel:<?php echo esc_html($phone_number); ?>"
							class="phone_number cta-button square light-team">
							<svg width="15" height="18" viewBox="0 0 15 18" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M6.04933 4.68383C5.83877 2.67146 5.72033 1.53714 5.69313 1.27914C5.59136 0.302199 3.5217 0.391637 2.74788 0.751111C-0.521982 2.26813 0.408881 6.57752 1.59944 9.17983C3.85948 13.4626 6.36605 15.9643 9.12004 16.6841C11.2748 17.4366 14.0639 16.9206 14.2428 14.3002C14.2674 13.9424 14.2306 13.6518 14.1332 13.4299C13.9665 13.0962 12.7593 12.4693 10.5133 11.55C10.0781 11.3977 9.56924 11.5715 8.98756 12.0711C8.9007 12.1476 8.81384 12.213 8.72611 12.2689C8.29972 12.5398 8.05933 12.5622 7.66628 12.2663C6.46782 11.3616 4.65172 8.16849 4.27007 7.21047C4.17532 6.82777 4.34553 6.53108 4.78069 6.32124C5.62206 5.95489 6.04494 5.40794 6.04933 4.68383Z"
									stroke="black" />
							</svg>

							<span><?php echo esc_html($phone_number); ?></span></a>
						<?php endif; ?>
					</div>


				</div>


				<?php if ($img): ?>
				<img class="team-member-image" src="<?php echo esc_url($img['url']); ?>"
					alt="<?php echo esc_attr($img['alt']); ?>">
				<?php endif; ?>



				<div class="team-member-content text-dark-grey" id="team-member-content">



					<?php if ($full_name): ?>
					<p class="full-name mar-btm-8"><?php echo esc_html($full_name); ?></p>
					<?php endif; ?>


					<p class="description">
						<?php echo wp_kses_post(str_replace(',', ',<br>', esc_html($description))); ?>
					</p>

				</div>








			</div>


			<?php endforeach; ?>
			<?php endif; ?>
		</div>
	</div>
</section>

<script>
const teamMembers = document.querySelectorAll('.team-member-container');

teamMembers.forEach(member => {
	const hoverDiv = member.querySelector('.hover-div-container');

	member.addEventListener('mouseenter', () => {
		member.classList.add('is-hovered');
		hoverDiv.classList.add("hover-div-container-visible");

	});

	member.addEventListener('mouseleave', () => {
		member.classList.remove('is-hovered');
		hoverDiv.classList.remove("hover-div-container-visible");
	});
});
</script>