<?php
get_header();

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

<section class="branch-hero">
	<div class="wrap branch-inner">

		<div class="branch-title flex flex-col justify-center align-center <?php echo is_single(4651) ? 'no-properties' : ''; ?>">
			<?php
            $teamImage = get_field('team_image', get_the_ID());
            if ($teamImage) : ?>
			<div class="team-image">
				<p>Our team</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
					<path
						d="M4.12493 18.2097C3.66423 18.4676 3.19877 18.7104 2.73216 18.9601C2.4357 19.1182 2.12945 19.3144 1.81937 19.4449C1.46658 19.5939 1.20081 19.5618 0.815086 19.691C0.261946 19.8726 -0.250832 19.2226 0.133137 18.7464C0.476891 18.3178 0.63986 17.9575 1.05538 17.5767C1.52929 17.1475 2.00021 16.7142 2.47117 16.2809C3.3547 15.4626 4.33794 14.7652 5.28756 14.0299C7.18384 12.5552 9.05061 11.0395 10.8938 9.49117C12.6785 7.99119 14.478 6.51165 16.2391 4.97895C18.0895 3.36314 19.8158 1.53218 21.9017 0.22533C23.1753 -0.569679 24.6185 0.89523 23.7201 2.14097C22.3228 4.08283 20.3956 5.59236 18.5936 7.15457C16.7279 8.77516 14.8494 10.3864 12.897 11.8954C10.9978 13.3661 9.06901 14.7959 7.11369 16.1888C6.1375 16.8874 5.17378 17.6204 4.12607 18.2026L4.12493 18.2097Z"
						fill="#FAF8F4" />
				</svg>
				<img src="<?php echo esc_url($teamImage['url']); ?>" alt="<?php echo esc_attr($teamImage['alt']); ?>" />
			</div>
			<?php endif; ?>

			<?php
            $officeImage = get_field('office_image', get_the_ID());
            if ($officeImage) : ?>
			<div class="office-image">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
					<path
						d="M1.7893 4.04219C1.49544 3.60351 1.21638 3.15888 0.930204 2.71367C0.749039 2.43075 0.529059 2.14111 0.374208 1.84242C0.197619 1.50262 0.208413 1.23514 0.0489062 0.860938C-0.176218 0.324033 0.430811 -0.238917 0.936156 0.105872C1.39075 0.414375 1.76285 0.548113 2.17561 0.931961C2.64123 1.37015 3.11067 1.80504 3.58014 2.23997C4.46621 3.05547 5.23974 3.98 6.04841 4.86799C7.66961 6.6407 9.32921 8.38073 11.0195 10.0946C12.657 11.7541 14.2752 13.43 15.9434 15.0633C17.7016 16.7791 19.6643 18.3539 21.1333 20.3291C22.0272 21.5352 20.682 23.0906 19.3686 22.2943C17.3216 21.0562 15.6633 19.2555 13.9624 17.5837C12.1983 15.8532 10.4424 14.109 8.78258 12.2831C7.16523 10.5071 5.58628 8.69846 4.0419 6.86037C3.2678 5.94297 2.46028 5.04074 1.79641 4.04277L1.7893 4.04219Z"
						fill="#FAF8F4" />
				</svg>
				<p>Our local office</p>
				<img src="<?php echo esc_url($officeImage['url']); ?>"
					alt="<?php echo esc_attr($officeImage['alt']); ?>" />
			</div>
			<?php endif; ?>

			<h1>Hello <span><?php the_title(); ?></span></h1>
			<?php $phone = get_field('telephone', get_the_ID()); ?>

			<?php if ($phone): ?>
			<a class="number" href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $phone)); ?>">
				<?php echo esc_html($phone); ?>
			</a>
			<?php endif; ?>
			<p class="excerpt"><?php echo get_field('excerpt', get_the_ID()); ?></p>
		</div>
			
		<?php if ( !is_single(4651) ) : ?>
		<div class="latest flex justify-center">
			<p>View our latest listings</p>
		</div>

		<div class="branch-listing">
			<?php

				$rent_meta_query = [
				[
					'key'     => '_department',
					'value'   => 'residential-lettings',
					'compare' => '=',
				],
				[
					'key'     => '_on_market',
					'value'   => 'yes',
					'compare' => '=',
				],
				];

				$rent_query = new WP_Query([
				'post_type'      => 'property',
				'post_status'    => 'publish',
				'posts_per_page' => 16,
				'orderby'        => 'date',
				'order'          => 'DESC',
				'no_found_rows'  => true,
				'meta_query'     => $rent_meta_query,
				]);




                $office_id = get_field('office', get_the_ID());

				// if Eccleston - change to St Helens properties
				if ( $office_id[0] == 759 ) {
					$office_id[0] = 772;
				}

                $selected_office_id = $office_id ? $office_id : 0;

                $branch_meta_query = [
                [
                    'key'     => '_department',
                    'value'   => 'residential-sales',
                    'compare' => '=',
                ],
                [
                    'key'     => '_on_market',
                    'value'   => 'yes',
                    'compare' => '=',
                ],
                ];

                if ($selected_office_id) {
                $branch_meta_query[] = [
                    'key'     => '_office_id',
                    'value'   => $selected_office_id,
                    'compare' => '=',
                    'type'    => 'NUMERIC',
                ];
                }

                $q = new WP_Query([
                'post_type'      => 'property',
                'post_status'    => 'publish',
                'posts_per_page' => 16,
                'orderby'        => 'date',
                'order'          => 'DESC',
                'no_found_rows'  => true,
                'meta_query'     => $branch_meta_query,
                ]);

				// Lettings conditional
				if (is_single(4644)) {
					$sliderQuery = $rent_query;
				} else {
					$sliderQuery = $q;
				}

            $count = $sliderQuery->post_count; ?>
			<?php if ( $count > 0 ) : ?>
			<!-- <svg class="ribbon" viewBox="0 0 1920 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-8 50C290.837 50 368.007 356 673.059 356C1184.76 356 1324.6 50 1665.38 50C1921.23 50 2059 240 2059 240"
                    stroke="url(#ribbonGradient-buy)" stroke-width="100" />

                <defs>
                    <linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203"
                        gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
                        <stop offset="0" stop-color="#C1D42F" />
                        <stop offset="0.28" stop-color="#9FD76A" />
                        <stop offset="0.538462" stop-color="#56C9B8" />
                        <stop offset="0.78" stop-color="#96D78A" />
                        <stop offset="1" stop-color="#C1D42F" />
                    </linearGradient>

                </defs>
            </svg> -->

			<svg class="ribbon" xmlns="http://www.w3.org/2000/svg" width="1920" height="466" viewBox="0 0 1920 466"
				fill="none">
				<path
					d="M-169.186 160.181C166.112 140.732 379.054 392.636 719.489 413.27C1275.7 446.981 1326 73.453 1708.36 51.2739C1995.43 34.6227 2159.35 186.736 2159.35 186.736"
					stroke="url(#ribbonGradient-buy)" stroke-width="100" />
				<defs>
					<linearGradient id="ribbonGradient-buy" x1="-161.662" y1="289.892" x2="2157.53" y2="155.368"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#C1D42F" />
						<stop offset="0.475962" stop-color="#56C9B8" stop-opacity="0.6" />
						<stop offset="1" stop-color="#C1D42F" />
					</linearGradient>
				</defs>
			</svg>
			<?php endif; ?>


			<?php if ($sliderQuery->have_posts()) : ?>

			<!-- Swiper -->
			<div class="swiper branch-swiper">
				<div class="swiper-wrapper">

					<?php while ($sliderQuery->have_posts()) : $sliderQuery->the_post();
                $property = new PH_Property(get_the_ID());

                $thumb = $property->get_main_photo_src('thumbnail');
                $img   = $property->get_main_photo_src('large');

                $price    = $property->get_formatted_price();
                $bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
                if (!$bedrooms) {
                    $bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
                }
            ?>
					<div class="swiper-slide">
						<a class="mega-card" href="<?php the_permalink(); ?>">
							<div class="mega-card__media">
								<?php if (!empty($img)) : ?>
								<img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title()); ?>"
									loading="eager" decoding="async">
								<?php endif; ?>
							</div>

							<div class="mega-card__body text-dark-grey">
								<div class="flex gap-16">

									<?php if (!empty($price)) : ?>
									<span class="mega-card__price"><?php echo esc_html($price); ?></span>
									<?php endif; ?>

									<?php if ($bedrooms > 0) : ?>
									<div class="flex align-center gap-8">
										<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M3.46231 13.1228V14.4582H2.12695V13.1228" stroke="#B8B9BD"
												stroke-linecap="round" stroke-linejoin="round" />
											<path d="M16.8158 13.1228V14.4582H15.4805V13.1228" stroke="#B8B9BD"
												stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
												stroke="#B8B9BD" stroke-linecap="round" stroke-linejoin="round" />
										</svg>


										<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?>
											bed</span>
									</div>
									<?php endif; ?>

								</div>

								<div class="mega-card__title mar-top-8">
									<?php
                                    $title = get_the_title();
                                    $title = preg_replace('/,([^,]+,[^,]+)$/', '<br>$1', $title);
                                    echo wp_kses_post($title);
                                    ?>
								</div>

								<?php if (!empty($thumb)) : ?>
								<span class="sr-only" data-thumb="<?php echo esc_url($thumb); ?>"></span>
								<?php endif; ?>
							</div>
						</a>
					</div>

					<?php endwhile; wp_reset_postdata(); ?>

				</div>

				<!-- Optional UI -->
				<div class="swiper-button-prev branch-swiper__prev buy" aria-label="Previous">
					<!-- Prev SVG -->
					<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
							fill="#2D2D35" fill-opacity="0.75" />
						<path d="M55.7695 37.8387L18.4512 37.8387" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
						<path d="M31.5586 51.3533L18.2635 37.8386L31.5586 24.324" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>

				<div class="swiper-button-next branch-swiper__next buy" aria-label="Next">
					<!-- Next SVG -->
					<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
						<path d="M18.584 36.5146H55.9024" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>

			</div>

			<?php else : ?>
			<p class="mega-cards-empty">No new listings right now. <a href="<?php site_url(); ?>/property-search">See
					all listings</a></p>
			<?php endif; ?>
		</div>
		<?php endif; ?>

	</div>
</section>

<section class="branch-content bg-off-white">
	<div class="wrap branch-content-inner">

		<aside class="branch-sidebar">
			<div class="flex gap-8">
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
					<circle cx="10.5" cy="10.5" r="10.5" transform="rotate(-180 10.5 10.5)" fill="#C1D42F" />
					<path d="M15.752 10.5L5.21196 10.5" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M8.91211 15.2812L5.15711 10.5005L8.91211 5.71979" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<a class="back" href="/find-a-branch">Back to all branches</a>
			</div>

			<div class="middle pad-top-32 pad-btm-40 mar-top-32">
				<h2 class="branch-title mar-btm-32"><?php the_title(); ?></h2>

				<div class="branch-info">
					<h3 class="mar-btm-24"><?php echo get_field('address', get_the_ID()); ?></h3>
					<p><?php echo get_field('opening_hours', get_the_ID()); ?></p>
				</div>
			</div>

			<div class="contact-details">
				<a href="mailto:<?php echo get_field('email', get_the_ID()); ?>"
					class="mar-btm-16"><?php echo get_field('email', get_the_ID()); ?></a>

				<?php if ( have_rows('phone_numbers', get_the_ID()) ) :
                    while ( have_rows('phone_numbers', get_the_ID()) ) : the_row() ; ?>
				<a class="number" href="tel:<?php echo get_sub_field('number'); ?>">
					<span><?php echo get_sub_field('text'); ?> </span><?php echo get_sub_field('number'); ?>
				</a>
				<?php endwhile;
                endif; ?>

				<div class="buttons flex gap-16">
					<a class="cta-button square grey" onclick="openEnquiryModal()">
						<span>Get in touch</span>
					</a>
					<a class="cta-button green square" onclick="openModal()">
						<span>Value my home</span>
					</a>
				</div>
			</div>
		</aside>

		<main class="branch-main">
			<div class="images-map">
				<?php 
                    if ( have_rows( 'branch_images', get_the_ID() ) ) :
                        while ( have_rows( 'branch_images', get_the_ID() ) ) : the_row() ; 
                        $branchImg = get_sub_field('image');
                        ?>

				<img class="image-grid" src="<?php echo esc_url($branchImg['url']); ?>"
					alt="<?php esc_attr($branchImg['alt']); ?>" />

				<?php endwhile; 
                    endif;
                ?>
				<?php 
				$latitude = get_field('latitude', get_the_ID());
				$longitude = get_field('longitude', get_the_ID());
				if ($latitude && $longitude): ?>
				<div id="branch-map" class="branch-map" data-lat="<?php echo $latitude; ?>"
					data-lng="<?php echo $longitude; ?>">
					<?php $cta = get_field('cta', get_the_ID()); ?>
					<?php if ($cta): ?>
					<a class="cta-button square google-btn" href="<?php echo esc_url($cta['url']); ?>"
						target="<?php echo esc_attr($cta['target'] ?: '_self'); ?>">
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
							<path
								d="M8.25014 0.75C4.12795 0.75 0.785331 4.13063 0.75 8.31118C0.761777 9.77602 1.19522 11.1441 1.93372 12.2924L7.66417 20.3134C7.82819 20.6035 8.03931 20.75 8.25014 20.75C8.46098 20.75 8.67785 20.6035 8.83611 20.3134L14.5666 12.2953C15.3048 11.1441 15.7385 9.77602 15.75 8.31118C15.7181 4.13063 12.3752 0.75 8.25014 0.75ZM8.25014 11.2495C6.5965 11.2495 5.25164 9.9047 5.25164 8.24971C5.25164 6.59473 6.5965 5.25281 8.25014 5.25281C9.90379 5.25281 11.2518 6.59473 11.2518 8.24971C11.2518 9.9047 9.90695 11.2495 8.25014 11.2495Z"
								stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" />
						</svg>
						<span>View on Google Maps</span>
					</a>
					<?php endif; ?>
				</div>
				<?php endif; ?>
			</div>

			<div class="content">
				<!-- <div class="branch-stats">
					<div class="flex gap-16 title">
						<h2 class="flex gap-16 text-dark-grey">Branch Stats </h2>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)"
								fill="#C1D42F" />
							<path d="M22.0498 10.8281L22.0498 32.5723" stroke="#2D2D35" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>

					<?php if ( have_rows('branch_stats', get_the_ID()) ) : the_row(); ?>
					<ul class="stat-list flex gap-16 flex-col">
						<?php while ( have_rows('branch_stats', get_the_ID()) ) : the_row(); ?>

						<li class="stat">
							<span class="stat-bullet" aria-hidden="true">
								<svg width="15" height="2" viewBox="0 0 15 2" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<line x1="1" y1="1" x2="14" y2="1" stroke="#C1D42F" stroke-width="2"
										stroke-linecap="round"></line>
								</svg>
							</span>
							<span><strong><?php echo get_sub_field('stat'); ?></strong>
								<?php echo get_sub_field('text'); ?></span>
						</li>

						<?php endwhile; ?>
					</ul>
					<?php endif; ?>

				</div> -->
				<div class="branch-detail">
					<div class="flex gap-16 title">
						<h2>Details</h2>
						<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
							<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)"
								fill="#C1D42F" />
							<path d="M22.0498 10.8281L22.0498 32.5723" stroke="#2D2D35" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<?php echo get_field('detail_text'); ?>
				</div>
			</div>

			<div class="team-members">
				<div class="flex gap-16 title">
					<h2 class="flex gap-16">Meet Our Team of Experts </h2>
					<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
						<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)"
							fill="#C1D42F" />
						<path d="M22.0498 10.8281L22.0498 32.5723" stroke="#2D2D35" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" />
						<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>

				<?php
                $teamMembers = get_field('team_members', get_the_ID());
                    
                if ( $teamMembers ) :
                    foreach ( $teamMembers as $employee ) :
                        $employeeImage = get_field('team_member_image', $employee->ID);
                        $employeeName = get_field('full_name', $employee->ID);
                        $employeeRole = get_field('role', $employee->ID);
                        $employeeText = get_field('hover_description', $employee->ID);
                        $employeeEmail = get_field('email', $employee->ID);
                        $employeeNumber = get_field('phone_number', $employee->ID);
                        $employeeDepartment = get_field('department', $employee->ID);
                    ?>

				<div class="employee-card">
					<div class="employee-img">
						<img src="<?php echo esc_url($employeeImage['url']) ;?>"
							alt="<?php echo esc_attr($employeeImage['alt']); ?>" />
					</div>

					<div class="card-content">
						<h3 class="mar-btm-8"><?php echo $employeeName; ?></h3>
						<p class="mar-btm-16 role"><?php echo $employeeRole; ?></p>
						<p><?php echo $employeeText; ?></p>

						<?php
                            $btnColour;

                            switch ($employeeDepartment) {
                                case 'sales':
                                    $btnColour = 'light-pink';
                                    break;
                                case 'lettings':
                                    $btnColour = 'light-orange';
                                    break;
                                case 'mortgages':
                                    $btnColour = 'light-blue';
                                    break;
                                default:
                                    $btnColour = 'green';
                            }
                            ?>


						<div class="buttons flex gap-16 mar-top-16 md-mar-top-24">
							<a class="cta-button square <?php echo $btnColour; ?>"
								href="mailto:<?php echo $employeeEmail; ?>">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16"
									fill="none">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M1.15341 2.06126L7.50741 7.79678L1.15341 13.5311V2.06126ZM19.8032 1.2414L11.0691 9.12411C11.055 9.13689 11.0324 9.13689 11.0183 9.12411L2.28524 1.2414H19.8032ZM20.8466 13.5311L14.4926 7.79562L20.8466 2.0601V13.53V13.5311ZM13.5215 8.67354L20.2629 14.7586H1.73713L8.47847 8.67354L10.658 10.6407C10.8457 10.8103 11.1511 10.8126 11.3366 10.6454L13.5205 8.6747L13.5215 8.67354ZM0.878274 0H21.1228C21.6062 0 22.0011 0.425025 22.0011 0.945275V15.0559C22.0011 15.5761 21.6062 16.0012 21.1228 16.0012H0.878274C0.3949 16.0012 0 15.5761 0 15.0559V0.945275C0 0.425025 0.3949 0 0.878274 0Z"
										fill="#2D2D35" />
								</svg>
								<span>Email me</span>
							</a>
							<a class="cta-button square <?php echo $btnColour; ?>"
								href="tel:<?php echo $employeeNumber; ?>">
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18"
									fill="none">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M6.04933 4.68383C5.83877 2.67146 5.72033 1.53714 5.69313 1.27914C5.59136 0.302199 3.5217 0.391637 2.74788 0.751111C-0.521982 2.26813 0.408881 6.57752 1.59944 9.17983C3.85948 13.4626 6.36605 15.9643 9.12004 16.6841C11.2748 17.4366 14.0639 16.9206 14.2428 14.3002C14.2674 13.9424 14.2306 13.6518 14.1332 13.4299C13.9665 13.0962 12.7593 12.4693 10.5133 11.55C10.0781 11.3977 9.56924 11.5715 8.98756 12.0711C8.9007 12.1476 8.81384 12.213 8.72611 12.2689C8.29972 12.5398 8.05933 12.5622 7.66628 12.2663C6.46782 11.3616 4.65172 8.16849 4.27007 7.21047C4.17532 6.82777 4.34553 6.53108 4.78069 6.32124C5.62206 5.95489 6.04494 5.40794 6.04933 4.68383Z"
										stroke="black" />
								</svg>
								<span><?php echo $employeeNumber; ?></span>
							</a>
						</div>
					</div>
				</div>

				<?php endforeach; 
                endif;
                ?>

			</div>

			<div class="more flex align-center mar-top-64">
				<p>Want to know more about <?php the_title(); ?>?</p>
				<a class="cta-button square green" href="<?php echo home_url('/area-guides'); ?>">
					<span>Read our Area Guides</span>
				</a>
			</div>
		</main>

	</div>
</section>

	<?php get_template_part( 'blocks/stats-v1/stats-v1' ); ?>

<?php
    endwhile;
endif;

get_footer();
?>