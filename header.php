<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">


	<?php wp_head(); // ESSENTIAL: DO NOT DELETE ?>


	<!-- IMPORTANT: Remove after site launch -->
	<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">


	<!-- Responsive Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
	<meta name="format-detection" content="telephone=no">




	<!-- Adobe Fonts
  ================================================== -->
	<link href="" rel="stylesheet">


	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/favicons/favicon.ico">
	<link rel="apple-touch-icon"
		href="<?php echo get_template_directory_uri(); ?>/assets/favicons/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72"
		href="<?php echo get_template_directory_uri(); ?>/assets/favicons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114"
		href="<?php echo get_template_directory_uri(); ?>/assets/favicons/apple-touch-icon-114x114.png">

	<!-- Tracking Snippets
	================================================== -->

</head>



<body <?php body_class(); ?>>




	<header class="bg-dark-grey pad-block-8 sm-pad-block-16 xlg-pad-block-24">
		<div class="wrap">
			<div class="nav-wrap">
				<div class="left">
					<button class="burger-btn" id="burger-toggle" type="button" aria-label="Open menu"
						aria-controls="site-nav" aria-expanded="false">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>

					<div class="hide-sm">
						<?php
				wp_nav_menu(array(
					'theme_location' => 'primary',
					'container' => false,
					'menu_class' => 'menu-primary',
					  'depth'          => 1,


				));
				?>
					</div>



					<?php
				$locations = get_nav_menu_locations();
				$menu_id   = $locations['primary'] ?? 0;
				$items     = $menu_id ? wp_get_nav_menu_items($menu_id) : [];

				$top_level = array_values(array_filter($items, fn($i) => (int) $i->menu_item_parent === 0));
				?>

					<div class="mega-panels" id="mega-panels">
						<?php foreach ($top_level as $parent): ?>
						<?php
					$children = array_values(array_filter(
						$items,
						fn($c) => (int) $c->menu_item_parent === (int) $parent->ID
					));

					// only create a mega panel if there are children
					if (empty($children)) continue;

					   // ✅ KEY MUST MATCH a[data-mega] (your nav_menu_link_attributes uses sanitize_title($item->title))
    $key = sanitize_title($parent->title);

    // ✅ CTA per panel (ACF on menu item)
$panel_type = get_field('panel_type', $parent); // buy|rent|sell

$cta_map = [
  'buy'  => ['text' => 'All properties for sale', 'url' => home_url('/property-search/')],
  'rent' => ['text' => 'All rental properties',   'url' => home_url('/property-search/?department=residential-lettings')],
  'sell' => ['text' => 'Book a valuation',        'url' => home_url('/sell/')],
];

$cta = $cta_map[$panel_type] ?? ['text' => 'Pre-launch', 'url' => home_url('/')];

$cta_class_map = [
  'buy'  => 'green',
  'rent' => 'orange',
  'sell' => 'pink',
];

$cta_class = $cta_class_map[$panel_type] ?? 'green';


					?>

						<?php
  $panel_type = get_field('panel_type', $parent); // buy|rent|sell
  $panel_type = in_array($panel_type, ['buy','rent','sell'], true) ? $panel_type : 'buy';
?>

						<div class="mega-panel mega-panel--<?php echo esc_attr($panel_type); ?>"
							data-mega-panel="<?php echo esc_attr($key); ?>" hidden>
							<div class="mega-inner grid grid-cols-12">
								<h3 class="mega-heading"><?php echo esc_html($parent->title); ?></h3>

								<ul class="mega-links">
									<?php foreach ($children as $child): ?>
									<li>
										<a href="<?php echo esc_url($child->url); ?>">
											<?php echo esc_html($child->title); ?>
										</a>
									</li>
									<?php endforeach; ?>
									<a 
									<?php if ( $panel_type == 'sell' ) : ?>
										onclick="openModal()"
										<?php else : ?>
										href="<?php echo esc_url($cta['url']); ?>"
										<?php endif; ?>
										class="cta-button <?php echo esc_attr($cta_class); ?> large mar-top-16 mega-cta">
										<span class="cta-text"><?php echo esc_html($cta['text']); ?></span>
									</a>

								</ul>


								<div class="mega-cards">
									<h3 class="mega-subheading">
										<?php echo esc_html(get_field('panel_title', $parent) ?: 'New listings'); ?>
									</h3>

									<?php
							// Latest 3 properties "available to buy"
							$args = [
  'post_type'      => 'property',
  'post_status'    => 'publish',
  'posts_per_page' => 3,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'no_found_rows'  => true,
];

// Match homepage hero logic
if ($panel_type === 'rent') {
  $args['meta_query'] = [
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
} elseif ($panel_type === 'sell') {
  // EXACTLY like your hero sell tab (just fewer posts)
  $args['meta_query'] = [
    [
      'key'     => '_department',
      'value'   => 'residential-sales',
      'compare' => '=',
    ],
  ];
  $args['tax_query'] = [
    [
      'taxonomy' => 'availability',
      'field'    => 'term_id',
      'terms'    => [12], // Sold STC
    ],
  ];
} else {
  // buy default
  $args['meta_query'] = [
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
}

$q = new WP_Query($args);


							if ($q->have_posts()) : ?>
									<div class="mega-cards-grid grid grid-cols-3 gap-32">
										<?php while ($q->have_posts()) : $q->the_post();
									$property = new PH_Property(get_the_ID());

									// "thumbnail" for small, "large" for bigger (you can change sizes)
									$thumb = $property->get_main_photo_src('thumbnail');
									$img   = $property->get_main_photo_src('large');

									$price    = $property->get_formatted_price();
									$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
									// Fallback if your install uses a different key:
									if (!$bedrooms) {
									$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
									}
								?>
										<a class="mega-card" href="<?php the_permalink(); ?>">
											<div class="mega-card__media">
												<?php if (!empty($img)) : ?>
												<img src="<?php echo esc_url($img); ?>"
													alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
												<?php endif; ?>
											</div>

											<div class="mega-card__body">

												<div class="flex gap-16">

													<?php if (!empty($price)) : ?>
													<span
														class="mega-card__price"><?php echo esc_html($price); ?></span>
													<?php endif; ?>

													<?php if ($bedrooms > 0) : ?>
													<div class="flex align-center gap-8">
														<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
															<path d="M3.46231 13.1229V14.4582H2.12695V13.1229"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
															<path d="M16.8158 13.1229V14.4582H15.4805V13.1229"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
															<path
																d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
															<path
																d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
															<path
																d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
																stroke="currentColor" stroke-linecap="round"
																stroke-linejoin="round" />
														</svg>


														<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?>
															bed</span>
													</div>
													<?php endif; ?>

												</div>


												<div class="mega-card__title mar-top-8">
													<?php echo esc_html(get_the_title()); ?></div>



												<?php if (!empty($thumb)) : ?>
												<!-- optional: keep thumbnail URL around (e.g. for CSS bg / hover swap / etc.) -->
												<span class="sr-only"
													data-thumb="<?php echo esc_url($thumb); ?>"></span>
												<?php endif; ?>
											</div>
										</a>
										<?php endwhile; wp_reset_postdata(); ?>
									</div>
									<?php else : ?>
									<p class="mega-cards-empty">No new listings right now.</p>
									<?php endif; ?>
								</div>





							</div>
						</div>
						<?php endforeach; ?>
					</div>

				</div>
				<div class="right flex gap-16 sm:gap-0">
					<a href="<?php echo get_site_url();?>/pre-launch" class="cta-button pink icon">
						<span class="cta-text">Pre-launch</span>
						<svg width="15" height="15" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.5949 14.4848C11.2943 14.3588 12.1029 14.3178 12.6784 13.8398C13.1355 13.4608 13.2548 12.9166 13.0382 12.3733C12.8491 11.8991 13.5871 11.4566 13.9001 11.8571C14.0451 11.843 14.191 11.9187 14.2424 12.1175C14.5407 13.2722 15.4054 14.2179 16.4811 14.6193C16.9547 14.5679 17.4549 14.693 17.8946 14.8414C18.4205 15.0188 18.3452 15.8403 17.7615 15.844C17.3659 15.8468 16.974 15.788 16.5958 15.6769C16.2975 15.718 16.0827 15.8898 16.1424 16.335C16.1965 16.7364 16.4095 17.0996 16.6188 17.4338C16.8959 17.8781 17.2181 18.2823 17.5788 18.6594C18.0387 19.1411 17.4604 19.7899 16.9115 19.5388C16.515 19.3577 16.1892 19.0524 15.8799 18.7481C15.6174 18.4895 15.3393 18.1759 14.9767 18.0667C14.516 17.9285 14.0478 18.2422 13.7183 18.5399C13.3053 18.9124 12.9336 19.3147 12.4746 19.634C12.1552 19.8562 11.6853 19.4856 11.8101 19.115C11.9808 18.6071 12.225 18.1563 12.4453 17.6718C12.616 17.2965 12.7922 16.7607 12.5049 16.3966C12.2966 16.1325 11.9258 16.0232 11.6247 15.915C11.2254 15.7703 10.8436 15.6162 10.4792 15.395C10.1442 15.1915 10.1635 14.5633 10.5949 14.4848ZM13.3971 15.9336C13.6706 16.3733 13.6936 16.8961 13.5706 17.3852C13.9643 17.1154 14.4049 16.9483 14.9418 17.0053C15.0364 17.0155 15.1282 17.0333 15.2172 17.0566C15.108 16.714 15.0566 16.363 15.0933 16.013C15.1282 15.6862 15.253 15.3903 15.4494 15.1551C14.8895 14.7957 14.4095 14.3112 14.0662 13.7399C13.9533 13.9976 13.7927 14.2393 13.5963 14.4475C13.2695 14.7938 12.8537 15.0225 12.404 15.1747C12.7904 15.3297 13.1474 15.5332 13.3971 15.9336Z"
								fill="currentColor" />
							<path
								d="M0.849565 3.96939C1.92677 4.29885 3.13334 4.08752 4.00293 3.35598C4.41382 3.01025 4.73992 2.56158 4.94101 2.06413C5.15732 1.52983 5.17797 0.954352 5.31711 0.402716C5.46277 -0.18035 6.22584 -0.0860621 6.41171 0.402716C6.41389 0.408135 6.41606 0.414637 6.41823 0.420056C6.68998 0.373454 7.01717 0.517595 7.10195 0.804793C7.41066 1.85279 7.23457 3.13922 8.2096 3.88594C9.05637 4.53403 10.2553 4.52102 11.2684 4.54595C11.8499 4.56004 12.2804 5.35335 11.7793 5.77602C11.1173 6.33524 10.3542 6.39485 9.51943 6.40569C8.83788 6.41544 8.22917 6.48264 7.85307 7.11772C7.54219 7.64227 7.50305 8.16897 7.63023 8.67076C8.52809 9.29067 9.2455 10.239 9.44225 11.2317C9.5303 11.6793 9.02702 12.2309 8.57374 11.8982C7.73784 11.2837 6.97477 10.434 6.58454 9.47166C6.25192 9.32752 5.90952 9.2419 5.59647 9.23323C4.15729 9.1953 3.11703 10.2216 1.95178 10.8784C1.43219 11.171 0.648471 10.5359 1.06479 9.99403C1.44959 9.49225 1.71155 8.85175 2.01373 8.29469C2.22026 7.91429 2.70832 7.32472 2.47027 6.87496C2.2507 6.45988 1.74307 6.23879 1.3561 6.01662C0.861521 5.73267 0.434333 5.41188 0.102799 4.94369C-0.235255 4.46683 0.324546 3.80899 0.852825 3.97047L0.849565 3.96939ZM6.028 7.99124C6.12257 8.00749 6.21823 8.02809 6.31279 8.05193C6.32258 7.69429 6.39323 7.33014 6.53672 6.96491C6.8052 6.28106 7.28892 5.69691 7.9422 5.37611C7.70197 5.25365 7.4737 5.10734 7.25957 4.93285C6.64976 4.43324 6.28019 3.69411 6.09974 2.90296C5.78669 3.5077 5.34863 4.04742 4.89644 4.41807C4.29099 4.91335 3.57466 5.23631 2.82354 5.37936C3.24965 5.69907 3.63118 6.11091 3.77901 6.62678C3.96271 7.27053 3.72901 7.84168 3.42791 8.39548C4.25403 8.02592 5.1258 7.83951 6.02909 7.99124H6.028Z"
								fill="currentColor" />
						</svg>
					</a>
					<a href="/" class="site-logo" aria-label="Go to homepage">
						<svg class="show-sm" width="38" height="38" viewBox="0 0 38 38" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M32.9035 27.4285H23.7252C24.2303 26.7661 31.9837 16.5966 32.913 15.3814C32.913 16.8062 32.9035 26.9949 32.9035 27.4285ZM37.9644 8.5H37.8882H32.1791L9.70508 37.9793H15.6858C15.6858 37.9793 19.8794 32.4418 20.0414 32.2226C20.3464 32.2226 32.3793 32.2226 32.9273 32.2226C32.9273 32.6658 32.913 37.9841 32.913 37.9841H33.2037H37.9644V8.5Z"
								fill="#C1D42F" />
							<path
								d="M32.5102 0C14.5872 0 0 14.5824 0 32.5102C0 34.383 0.166795 36.2129 0.471786 38H7.00049C6.61926 36.2272 6.40958 34.3925 6.40958 32.5102C6.40958 18.1184 18.1184 6.41435 32.5102 6.41435C34.3067 6.41435 36.0652 6.59544 37.757 6.94332V0.424128C36.0461 0.142965 34.2972 0 32.5102 0Z"
								fill="#C1D42F" />
						</svg>

						<svg class="hide-sm" width="230" height="50" viewBox="0 0 180 50" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M194.36 35.9826H182.32C182.982 35.1137 193.154 21.7729 194.373 20.1788C194.373 22.048 194.36 35.4137 194.36 35.9826ZM200.999 11.1516H200.899H193.41L163.928 49.8235H171.773C171.773 49.8235 177.275 42.5592 177.487 42.2717C177.887 42.2717 193.672 42.2717 194.391 42.2717C194.391 42.8531 194.373 49.8297 194.373 49.8297H194.754H200.999V11.1516Z"
								fill="#C1D42F" />
							<path
								d="M22.4305 24.3059V38.4781H12.7343L22.4305 24.3059ZM0 49.3557H5.28253C5.30754 49.312 9.50856 43.1355 9.50856 43.1355H22.443C22.443 43.1355 22.4242 49.0119 22.4242 49.3495C22.7805 49.3557 27.1316 49.3557 27.4817 49.3557C27.4817 48.9869 27.4442 18.3857 27.4442 18.0231H21.4427L0 49.3557Z"
								fill="white" />
							<path
								d="M31.7205 28.9571C30.2076 30.0386 29.4512 31.5202 29.4512 33.3644C29.4512 34.7835 29.9575 36.0088 30.9765 36.9965C31.9518 37.953 33.6272 38.897 35.9653 39.8097C37.7782 40.5161 38.9847 41.1225 39.5724 41.6039C40.1163 42.0665 40.3726 42.6104 40.3726 43.323C40.3726 45.0297 38.9722 45.8549 36.0965 45.8549C33.996 45.8549 31.9893 45.5673 30.1451 44.9922C30.1451 44.9922 29.8575 44.9047 29.62 44.8297V48.8806C29.745 48.9119 29.9075 48.9557 29.9075 48.9557C32.1518 49.5371 34.5337 49.8434 36.9843 49.8434C39.6161 49.8434 41.7292 49.287 43.2608 48.1805C44.8174 47.0615 45.6113 45.4986 45.6113 43.5419C45.6113 40.8474 43.5796 38.6782 39.5599 37.0903C36.8405 36.0338 35.759 35.4399 35.3339 35.1273C34.7712 34.7147 34.5087 34.2208 34.5087 33.5707C34.5087 32.9205 34.8087 32.3954 35.4276 31.989C36.084 31.5577 36.9968 31.3451 38.1533 31.3451C39.9975 31.3451 42.0667 31.6452 44.311 32.2266C44.311 32.2266 44.5924 32.2954 44.8174 32.3579V28.3132C44.6799 28.2819 44.5173 28.2444 44.5173 28.2444C42.1355 27.6505 39.8412 27.3567 37.7032 27.3567C35.2026 27.3567 33.1833 27.8943 31.708 28.9508"
								fill="white" />
							<path
								d="M52.6121 18.0231C52.6121 18.0231 48.1048 20.58 47.7422 20.58V49.3557H52.8122V39.6409C52.8122 37.5154 52.9685 35.9962 53.2623 35.1023C53.6124 34.077 54.2125 33.2331 55.0627 32.6079C55.9004 31.9828 56.8882 31.6639 57.9947 31.6639C59.6763 31.6639 60.7891 32.2453 61.5018 33.4769C61.9331 34.2271 62.1519 35.5211 62.1519 37.3028V49.362H67.2219V36.8464C67.2219 34.0458 66.8343 31.9828 66.0466 30.7137C64.6963 28.4882 62.4082 27.3629 59.245 27.3629C56.7756 27.3629 54.7314 28.3319 53.1623 30.2573L52.8059 30.6887V18.0231H52.6059H52.6121Z"
								fill="white" />
							<path
								d="M85.363 38.4281C85.363 36.3651 85.9068 34.6709 86.9758 33.3894C88.0324 32.1328 89.4264 31.5014 91.1206 31.5014C92.8148 31.5014 94.2088 32.1328 95.2654 33.3706C96.3406 34.6334 96.8845 36.3401 96.8845 38.4281C96.8845 40.5161 96.3594 42.4041 95.3279 43.7356C94.3151 45.0547 93.0086 45.6986 91.3582 45.6986C89.6265 45.6986 88.1886 45.0297 87.0696 43.7044C85.9381 42.3478 85.363 40.5786 85.363 38.4219M83.35 30.5512C81.3182 32.658 80.293 35.3461 80.293 38.5344C80.293 41.7227 81.2995 44.5859 83.3062 46.6676C85.3129 48.7744 87.9636 49.8434 91.1769 49.8434C94.3901 49.8434 96.9408 48.7681 98.9475 46.6426C100.948 44.5358 101.961 41.8227 101.961 38.5719C101.961 35.3211 100.967 32.5142 98.9975 30.4637C97.0158 28.4007 94.3651 27.3567 91.1269 27.3567C87.8886 27.3567 85.3942 28.4257 83.3562 30.5449"
								fill="white" />
							<path
								d="M109.324 30.5699L108.968 31.0388V27.8443H104.16V49.362H109.224V39.6472C109.224 36.9215 109.568 34.971 110.249 33.877C111.156 32.3704 112.475 31.664 114.413 31.664C116.094 31.664 117.22 32.2704 117.97 33.5644C118.245 34.0395 118.57 35.071 118.57 37.2966V49.3558H123.64V36.8402C123.64 34.0395 123.246 31.9765 122.458 30.7075C121.071 28.4819 118.757 27.3567 115.55 27.3567C113.056 27.3567 110.956 28.4319 109.318 30.5699"
								fill="white" />
							<path
								d="M127.948 28.9571C126.435 30.0386 125.666 31.5202 125.666 33.3644C125.666 34.7835 126.179 36.0088 127.191 36.9965C128.173 37.953 129.848 38.897 132.18 39.8097C133.993 40.5161 135.206 41.1225 135.787 41.6039C136.331 42.0665 136.581 42.6104 136.581 43.323C136.581 45.0297 135.181 45.8549 132.311 45.8549C130.211 45.8549 128.21 45.5673 126.36 44.9922C126.36 44.9922 126.072 44.9047 125.841 44.8297V48.8806C125.966 48.9119 126.129 48.9557 126.129 48.9557C128.373 49.5371 130.755 49.8434 133.205 49.8434C135.843 49.8434 137.957 49.287 139.488 48.1805C141.045 47.0615 141.839 45.4986 141.839 43.5419C141.839 40.8474 139.807 38.6782 135.793 37.0903C133.068 36.0338 131.993 35.4399 131.567 35.1273C131.011 34.7147 130.742 34.2208 130.742 33.5707C130.742 32.9205 131.049 32.3954 131.667 31.989C132.324 31.5577 133.237 31.3451 134.387 31.3451C136.237 31.3451 138.307 31.6452 140.551 32.2266C140.551 32.2266 140.832 32.2954 141.051 32.3579V28.3132C140.92 28.2819 140.757 28.2444 140.757 28.2444C138.375 27.6505 136.081 27.3567 133.949 27.3567C131.449 27.3567 129.423 27.8943 127.954 28.9508"
								fill="white" />
							<path
								d="M78.8558 45.5673C78.462 45.5986 78.0681 45.6174 77.693 45.6174C76.449 45.6174 75.5925 45.3735 75.1362 44.8984C74.6736 44.4171 74.4235 43.4731 74.4235 42.179V31.8265H79.0996C79.0996 31.5014 80.7125 28.1631 80.7125 27.838H74.4235V21.1552C74.2672 21.2364 74.1234 21.324 74.1234 21.324C74.1234 21.324 69.5348 23.8808 69.3535 23.9746V41.7352C69.3535 44.5296 69.9224 46.5676 71.0539 47.7929C72.2042 49.0494 74.0984 49.6808 76.699 49.6808C78.0869 49.6808 79.481 49.5371 80.8501 49.237C80.8501 49.237 80.9251 49.2182 81.0063 49.2057L78.8621 45.5611L78.8558 45.5673Z"
								fill="white" />
							<path
								d="M193.845 0C170.333 0 151.197 19.1297 151.197 42.6479C151.197 45.1047 151.416 47.5053 151.816 49.8496H160.381C159.881 47.524 159.606 45.1172 159.606 42.6479C159.606 23.7683 174.966 8.41455 193.845 8.41455C196.202 8.41455 198.509 8.6521 200.728 9.10846V0.556385C198.484 0.187546 196.189 0 193.845 0Z"
								fill="#C1D42F" />
						</svg>
					</a>


				</div>
			</div>
		</div>

		<?php

$insta = get_field('instagram', 'option');
$facebook = get_field('facebook', 'option');
$youtube = get_field('youtube', 'option');


?>


		<!-- Mobile header -->
		<div class="nav-wrap-mobile">
			<nav class="mobile-nav" id="mobileNav" aria-hidden="true">

				<div class="mobile-container">
					<?php
        wp_nav_menu(array(
          'theme_location' => 'primary',
          'container'      => false,
          'menu_class'     => 'menu-primary',
          'depth'          => 1,
        ));

        wp_nav_menu([
          'theme_location' => 'burger_additional_menu',
          'container'      => false,
          'menu_class'     => 'menu-burger-extra',
          'fallback_cb'    => false,
        ]);
      ?>

					<?php
      $locations = get_nav_menu_locations();
      $menu_id   = $locations['primary'] ?? 0;
      $items     = $menu_id ? wp_get_nav_menu_items($menu_id) : [];

      $top_level = array_values(array_filter(
        $items,
        fn($i) => (int) $i->menu_item_parent === 0
      ));
      ?>

					<div class="mobile-panels" id="mobile-panels">
						<?php foreach ($top_level as $parent): ?>

						<?php
          $children = array_values(array_filter(
            $items,
            fn($c) => (int) $c->menu_item_parent === (int) $parent->ID
          ));

          if (empty($children)) continue;

          $key = sanitize_title($parent->title);
		  $panel_type = get_field('panel_type', $parent); // buy|rent|sell

          ?>

						<div class="mobile-panel" data-mobile-panel="<?php echo esc_attr($key); ?>" hidden>

							<div class="mobile-panel__header">
								<button class="mobile-panel__back" type="button" aria-label="Back">
									<svg width="41" height="41" viewBox="0 0 41 41" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<circle cx="20.5" cy="20.5" r="20" transform="rotate(-180 20.5 20.5)"
											stroke="#FAF8F4" />
										<path d="M30.752 20.8647L10.1739 20.8647" stroke="#FAF8F4"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M17.4004 28.3174L10.0692 20.8651L17.4004 13.4129" stroke="#FAF8F4"
											stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</button>

								<span class="mobile-panel__title">
									<?php echo esc_html($parent->title); ?>
								</span>
							</div>

							<ul class="mobile-panel__links">
								<?php foreach ($children as $child): ?>
								<li>
									<a href="<?php echo esc_url($child->url); ?>">
										<?php echo esc_html($child->title); ?>
									</a>
								</li>
								<?php endforeach; ?>
							</ul>

							<?php
            $title_key = strtolower($parent->title);
            $department = null;

            if (strpos($title_key, 'buy') !== false) {
              $department = 'residential-sales';
            } elseif (strpos($title_key, 'rent') !== false) {
              $department = 'residential-lettings';
            } elseif (strpos($title_key, 'sell') !== false) {
              $department = 'residential-sales';
            }
            ?>

							<?php if ($department): ?>

							<div class="mobile-panel__properties">

								<div class="mobile-panel__properties-head">


									<div class="mobile-property-nav">
										<button type="button"
											class="mobile-property-nav__btn mobile-property-nav__btn--prev"
											aria-label="Previous">
											<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle cx="22.5" cy="22.5" r="22.5" transform="rotate(-180 22.5 22.5)"
													fill="#2D2D35" fill-opacity="0.75" />
												<path d="M33.752 22.9004L11.1662 22.9004" stroke="#FAF8F4"
													stroke-linecap="round" stroke-linejoin="round" />
												<path d="M19.0977 31.0791L11.0512 22.8998L19.0977 14.7205"
													stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</button>

										<button type="button"
											class="mobile-property-nav__btn mobile-property-nav__btn--next"
											aria-label="Next">
											<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle cx="22.5" cy="22.5" r="22.5" fill="#2D2D35"
													fill-opacity="0.75" />
												<path d="M11.248 22.0996H33.8338" stroke="#FAF8F4"
													stroke-linecap="round" stroke-linejoin="round" />
												<path d="M25.9023 13.9209L33.9488 22.1002L25.9023 30.2795"
													stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</button>
									</div>

								</div>

								<?php
                $args = [
  'post_type'      => 'property',
  'post_status'    => 'publish',
  'posts_per_page' => 9,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'no_found_rows'  => true,
];

// Match homepage hero logic
if ($panel_type === 'rent') {
  $args['meta_query'] = [
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
} elseif ($panel_type === 'sell') {
  // EXACTLY like your hero sell tab (just fewer posts)
  $args['meta_query'] = [
    [
      'key'     => '_department',
      'value'   => 'residential-sales',
      'compare' => '=',
    ],
  ];
  $args['tax_query'] = [
    [
      'taxonomy' => 'availability',
      'field'    => 'term_id',
      'terms'    => [12], // Sold STC
    ],
  ];
} else {
  // buy default
  $args['meta_query'] = [
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
}

$q = new WP_Query($args);


                if ($q->have_posts()) :
                ?>

								<!-- Swiper -->
								<div class="mobile-property-swiper swiper" data-mobile-property-swiper>
									<div class="swiper-wrapper">

										<?php while ($q->have_posts()) : $q->the_post();
                        $property = new PH_Property(get_the_ID());
                        $img   = $property->get_main_photo_src('large');
                        $price = $property->get_formatted_price();
                      ?>

										<div class="swiper-slide">
											<a class="mega-card mega-card--mobile" href="<?php the_permalink(); ?>">

												<div class="mega-card__media">
													<?php if (!empty($img)) : ?>
													<img src="<?php echo esc_url($img); ?>"
														alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
													<?php endif; ?>
													<?php if (has_term('sold-stc', 'availability', get_the_ID())) : ?>
													<span class="mega-card__tag sell">Just sold</span>
													<?php endif; ?>

												</div>

												<div class="mega-card__body">

													<div class="flex gap-16 align-center">

														<?php if (!empty($price)) : ?>
														<span
															class="mega-card__price"><?php echo esc_html($price); ?></span>
														<?php endif; ?>

														<?php if (!empty($bedrooms) && (int)$bedrooms > 0) : ?>
														<div class="flex align-center gap-8">
															<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
																<path d="M3.46231 13.1229V14.4582H2.12695V13.1229"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
																<path d="M16.8158 13.1229V14.4582H15.4805V13.1229"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
																<path
																	d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
																<path
																	d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
																<path
																	d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
																	stroke="#C1D42F" stroke-linecap="round"
																	stroke-linejoin="round" />
															</svg>

															<span
																class="mega-card__beds"><?php echo esc_html((int)$bedrooms); ?>
																bed</span>
														</div>
														<?php endif; ?>

													</div>

													<div class="mega-card__title mar-top-8">
														<?php echo esc_html(get_the_title()); ?>
													</div>

												</div>
											</a>

										</div>

										<?php endwhile; wp_reset_postdata(); ?>

									</div>
								</div>

								<?php else: ?>
								<p class="mobile-panel__empty">No properties available right now.</p>
								<?php endif; ?>

							</div>

							<?php
$panel_type = get_field('panel_type', $parent);

$cta_map = [
  'buy'  => ['text' => 'All properties for sale', 'url' => home_url('/property-search/')],
  'rent' => ['text' => 'All rental properties',   'url' => home_url('/?department=residential-lettings/')],
  'sell' => ['text' => 'Book a valuation',        'url' => home_url('/sell/')],
];

$cta = $cta_map[$panel_type] ?? ['text' => 'Pre-launch', 'url' => home_url('/')];
?>

							<a 
							<?php if ( $panel_type == 'sell' ) : ?>
								onclick="openModal()"
							<?php else : ?>
								href="<?php echo esc_url($cta['url']); ?>"
							<?php endif; ?>
								class="cta-button green large mar-top-16 mobile-cta">
								<span class="cta-text"><?php echo esc_html($cta['text']); ?></span>
							</a>

							<?php endif; ?>

						</div>



						<?php endforeach; ?>
					</div>

				</div>

				<div class="mobile-bottom">
					<div class="social-icons flex align-center justify-center gap-8">
						<?php if ($youtube): ?>
						<a href="<?php echo esc_url($youtube); ?>" target="_blank" rel="noopener" aria-label="YouTube">
							<svg width="28" height="27" viewBox="0 0 28 27" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.6647 5.6437H7.12916C4.4724 5.6437 2.32031 7.70808 2.32031 10.2551V16.7441C2.32031 19.2911 4.47356 21.3566 7.12916 21.3566H20.6647C23.3215 21.3566 25.4736 19.2911 25.4736 16.7441V10.2551C25.4736 7.70808 23.3203 5.64258 20.6647 5.64258V5.6437ZM17.4128 13.8146L11.0818 16.7115C11.0432 16.7295 11.0005 16.7377 10.9577 16.7355C10.9149 16.7332 10.8734 16.7205 10.8371 16.6985C10.8007 16.6765 10.7707 16.6459 10.7498 16.6096C10.7289 16.5733 10.7178 16.5325 10.7175 16.491V10.5183C10.7183 10.4766 10.73 10.4357 10.7514 10.3994C10.7729 10.3632 10.8035 10.3329 10.8403 10.3112C10.8771 10.2895 10.919 10.2772 10.962 10.2755C11.0051 10.2737 11.0479 10.2826 11.0865 10.3012L17.4186 13.3781C17.4608 13.3985 17.4961 13.43 17.5207 13.469C17.5452 13.508 17.5579 13.553 17.5573 13.5987C17.5567 13.6444 17.5428 13.689 17.5173 13.7273C17.4917 13.7657 17.4555 13.7964 17.4128 13.8157V13.8146Z"
									fill="white" />
							</svg>

						</a>
						<?php endif; ?>

						<?php if ($facebook): ?>
						<a href="<?php echo esc_url($facebook); ?>" target="_blank" rel="noopener"
							aria-label="Facebook">
							<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.1759 6.59812V9.68962H7.91016V13.4696H10.1759V24.7039H14.8267V13.4707H17.9485C17.9485 13.4707 18.241 11.6584 18.3828 9.67612H14.8458V7.09088C14.8458 6.705 15.352 6.18525 15.8538 6.18525H18.3895V2.25H14.9425C10.06 2.25 10.1759 6.03338 10.1759 6.59812Z"
									fill="white" />
							</svg>

						</a>
						<?php endif; ?>

						<?php if ($insta): ?>
						<a href="<?php echo esc_url($insta); ?>" target="_blank" rel="noopener" aria-label="Instagram">
							<svg width="28" height="27" viewBox="0 0 28 27" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18.5822 2.25H9.21976C7.39037 2.25208 5.63654 2.95779 4.34308 4.21227C3.04961 5.46675 2.32215 7.16755 2.32031 8.9415L2.32031 18.0202C2.32246 19.7942 3.05022 21.4949 4.3439 22.7492C5.63758 24.0034 7.39153 24.7088 9.22092 24.7106H18.5834C20.4128 24.7085 22.1666 24.0028 23.4601 22.7484C24.7535 21.4939 25.481 19.7931 25.4828 18.0191V8.94037C25.4807 7.16642 24.7529 5.46574 23.4592 4.21147C22.1656 2.9572 20.4116 2.25179 18.5822 2.25V2.25ZM23.1532 18.0191C23.1532 18.6012 23.035 19.1776 22.8053 19.7154C22.5756 20.2531 22.2389 20.7418 21.8144 21.1534C21.39 21.565 20.8861 21.8915 20.3315 22.1142C19.7769 22.337 19.1825 22.4516 18.5822 22.4516H9.21976C8.00765 22.4513 6.8453 21.9842 5.98832 21.153C5.13133 20.3218 4.64991 19.1945 4.64991 18.0191V8.94037C4.65021 7.765 5.13194 6.63786 5.98914 5.80685C6.84633 4.97584 8.00881 4.509 9.22092 4.509H18.5834C19.7955 4.5093 20.9578 4.97642 21.8148 5.80765C22.6718 6.63887 23.1532 7.76612 23.1532 8.9415V18.0202V18.0191Z"
									fill="white" />
								<path
									d="M13.9008 7.6709C12.3131 7.67328 10.7911 8.28603 9.66847 9.37483C8.54586 10.4636 7.91426 11.9396 7.91211 13.4793C7.91395 15.0193 8.54558 16.4958 9.66847 17.5848C10.7914 18.6739 12.3138 19.2867 13.902 19.2888C15.4904 19.287 17.0131 18.6743 18.1363 17.5852C19.2594 16.4961 19.8912 15.0195 19.893 13.4793C19.8906 11.9392 19.2584 10.463 18.135 9.37437C17.0117 8.28572 15.489 7.67351 13.9008 7.67202V7.6709ZM13.9008 17.0298C12.9301 17.0298 11.9991 16.6558 11.3126 15.9902C10.6262 15.3245 10.2405 14.4218 10.2405 13.4804C10.2405 12.539 10.6262 11.6362 11.3126 10.9706C11.9991 10.305 12.9301 9.93102 13.9008 9.93102C14.8716 9.93102 15.8026 10.305 16.4891 10.9706C17.1755 11.6362 17.5611 12.539 17.5611 13.4804C17.5611 14.4218 17.1755 15.3245 16.4891 15.9902C15.8026 16.6558 14.8716 17.0298 13.9008 17.0298Z"
									fill="white" />
								<path
									d="M19.9039 9.10649C20.6965 9.10649 21.339 8.48344 21.339 7.71487C21.339 6.94629 20.6965 6.32324 19.9039 6.32324C19.1113 6.32324 18.4688 6.94629 18.4688 7.71487C18.4688 8.48344 19.1113 9.10649 19.9039 9.10649Z"
									fill="white" />
							</svg>

						</a>
						<?php endif; ?>
					</div>

					<a href="<?php echo get_site_url();?>/find-a-branch" class="cta-button green large mar-top-16">
						<span class="cta-text">Find a branch</span>
					</a>
				</div>

			</nav>
		</div>

		<div class="desktop-burger-menu">
			<div class="wrap">
				<div class="main-wrap grid grid-cols-12">
					<?php
    wp_nav_menu([
        'theme_location' => 'burger_desktop_menu',
        'container'      => false,
        'menu_class'     => 'menu-burger-desktop',
        'fallback_cb'    => false,
    ]);
	
    ?>



					<div class="latest-commercial">
						<h3>Latest commercial listings</h3>

						<?php
	$args = [
		'post_type'      => 'property',
		'post_status'    => 'publish',
		'posts_per_page' => 2,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'no_found_rows'  => true,
		'meta_query'     => [
			[
				'key'     => '_department',
				'value'   => 'commercial',
				'compare' => '=',
			],
			[
				'key'     => '_on_market',
				'value'   => 'yes',
				'compare' => '=',
			],
		],
	];

	$q = new WP_Query($args);

	if ($q->have_posts()) : ?>
						<div class="mega-cards-grid grid grid-cols-2 gap-32">
							<?php while ($q->have_posts()) : $q->the_post();
				$property = new PH_Property(get_the_ID());

				$thumb = $property->get_main_photo_src('thumbnail');
				$img   = $property->get_main_photo_src('large');
				$price = $property->get_formatted_price();

				$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
				if (!$bedrooms) {
					$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
				}
			?>
							<a class="mega-card" href="<?php the_permalink(); ?>">
								<div class="mega-card__media">
									<?php if (!empty($img)) : ?>
									<img src="<?php echo esc_url($img); ?>"
										alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
									<?php endif; ?>
								</div>

								<div class="mega-card__body">
									<div class="flex gap-16">
										<?php if (!empty($price)) : ?>
										<span class="mega-card__price"><?php echo wp_kses_post($price); ?></span>
										<?php endif; ?>

										<?php if ($bedrooms > 0) : ?>
										<div class="flex align-center gap-8">
											<svg width="20" height="15" viewBox="0 0 20 15" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M1.83398 7.84288V3.24471C1.83398 1.72866 2.93266 0.5 4.28831 0.5H14.733C16.0886 0.5 17.1873 1.72866 17.1873 3.24471V7.84288"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path d="M3.46231 13.1229V14.4582H2.12695V13.1229" stroke="currentColor"
													stroke-linecap="round" stroke-linejoin="round" />
												<path d="M16.8158 13.1229V14.4582H15.4805V13.1229" stroke="currentColor"
													stroke-linecap="round" stroke-linejoin="round" />
												<path
													d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path
													d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path
													d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
											</svg>
											<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?> bed</span>
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
							<?php endwhile; wp_reset_postdata(); ?>
						</div>
						<?php else : ?>
						<p class="mega-cards-empty">No commercial listings right now.</p>
						<?php endif; ?>
					</div>
					<span class="line-break"></span>
					<div class="latest-land">
						<h3>Latest land &amp; new homes</h3>

						<?php
	$args = [
		'post_type'      => 'property',
		'post_status'    => 'publish',
		'posts_per_page' => 2,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'no_found_rows'  => true,
		'meta_query'     => [
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
		],
	];

	$q = new WP_Query($args);

	if ($q->have_posts()) : ?>
						<div class="mega-cards-grid grid grid-cols-2 gap-32">
							<?php while ($q->have_posts()) : $q->the_post();
				$property = new PH_Property(get_the_ID());

				$thumb = $property->get_main_photo_src('thumbnail');
				$img   = $property->get_main_photo_src('large');
				$price = $property->get_formatted_price();

				$bedrooms = (int) get_post_meta(get_the_ID(), '_bedrooms', true);
				if (!$bedrooms) {
					$bedrooms = (int) get_post_meta(get_the_ID(), 'bedrooms', true);
				}
			?>
							<a class="mega-card" href="<?php the_permalink(); ?>">
								<div class="mega-card__media">
									<?php if (!empty($img)) : ?>
									<img src="<?php echo esc_url($img); ?>"
										alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
									<?php endif; ?>
								</div>

								<div class="mega-card__body">
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
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path d="M3.46231 13.1229V14.4582H2.12695V13.1229" stroke="currentColor"
													stroke-linecap="round" stroke-linejoin="round" />
												<path d="M16.8158 13.1229V14.4582H15.4805V13.1229" stroke="currentColor"
													stroke-linecap="round" stroke-linejoin="round" />
												<path
													d="M16.489 7.8429H2.5354C1.4112 7.8429 0.5 8.77167 0.5 9.91754V11.8481H18.5234V9.91754C18.5234 8.77167 17.6122 7.8429 16.488 7.8429H16.489Z"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path
													d="M15.5784 7.3692V5.51243C15.5784 4.92231 15.1486 4.44476 14.6173 4.44476H11.2755C10.7443 4.44476 10.3145 4.92231 10.3145 5.51243V7.3692"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
												<path
													d="M8.85552 7.3692V5.51243C8.85552 4.92231 8.4137 4.44476 7.86773 4.44476H4.4331C3.88713 4.44476 3.44531 4.92231 3.44531 5.51243V7.3692"
													stroke="currentColor" stroke-linecap="round"
													stroke-linejoin="round" />
											</svg>
											<span class="mega-card__beds"><?php echo esc_html($bedrooms); ?> bed</span>
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
							<?php endwhile; wp_reset_postdata(); ?>
						</div>
						<?php else : ?>
						<p class="mega-cards-empty">No land &amp; new homes listings right now.</p>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>


	</header>


	<div class="page-blur-overlay" aria-hidden="true"></div>