<?php
/**
* Block template for Meet the team hero
*/

$block_classes = get_block_classes('meet-the-team-hero');

$title = get_field('title');
$centre_image = get_field('centre_image');
$form_title = get_field('form_title');
$centre_image = get_field('centre_image');
$subheading = get_field('subheading');
?>

<section class="block meet-the-team-hero <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<div class="team-hero-container">
			<div class="flex flex-col title-container">


				<div class="flex flex-col gap-8 pad-btm-32">
					<h1 class="text-white"><?php echo esc_attr($title); ?></h1>

					<p class="text-white"><?php echo esc_attr($subheading); ?></p>
				</div>

			</div>

			<div class="img-container">
				<?php if ($centre_image): ?>
				<img src="<?php echo esc_url($centre_image['url']); ?>"
					alt="<?php echo esc_attr($centre_image['alt']); ?>">
				<?php endif; ?>
			</div>

			<div class="find-branch-container">


				<div>


					<div class="card card--branch-finder bg-dark-grey text-off-white">



						<?php if ($form_title) : ?>
						<h3><?php echo esc_html($form_title); ?></h3>
						<?php endif; ?>
						<!-- 
                    <button>
                        Search
                    </button> -->

						<a class="cta-button square green mar-top-16 button-form" href="/find-a-branch" target="">
							Search
						</a>



						<!-- <form class="branch-finder-form" action="#" method="get">
                        <div class="branch-finder-form__field">

                            <input type="text" name="location" placeholder="Enter location or postcode"
                                class="branch-finder-form__input">

                            <button type="submit" class="branch-finder-form__button" aria-label="Search location">

                                <svg width="54" height="47" viewBox="0 0 54 54" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="54" height="54" rx="10" fill="#C1D42F" />
                                    <path
                                        d="M24.4838 34.5478C30.2739 34.5478 34.9677 29.8542 34.9677 24.0644C34.9677 18.2746 30.2739 13.5811 24.4838 13.5811C18.6938 13.5811 14 18.2746 14 24.0644C14 29.8542 18.6938 34.5478 24.4838 34.5478Z"
                                        stroke="#2D2D35" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M31.6133 31.1934L40.0003 40.4187" stroke="#2D2D35" stroke-width="2"
                                        stroke-miterlimit="10" />
                                </svg>

                            </button>

                        </div>
                    </form> -->




						<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/branch-icon.svg'); ?>"
							alt="" aria-hidden="true">


					</div>
				</div>


			</div>
		</div>
</section>