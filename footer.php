<?php 

$settings = get_field('footer_settings', 'option');
$pad_map = [
  'default'   => 'default',
  'no-pad'    => 'none',
  'small-pad' => 'small',
  'large-pad' => 'large',
];
$bg_class  = isset($settings['background_colour']) ? 'bg-' . $settings['background_colour'] : '';
$pad_top   = isset($settings['pad-top']) && isset($pad_map[$settings['pad-top']])
  ? 'pad-top-' . $pad_map[$settings['pad-top']]
  : '';
$pad_btm   = isset($settings['pad-btm']) && isset($pad_map[$settings['pad-btm']])
  ? 'pad-btm-' . $pad_map[$settings['pad-btm']]
  : '';
$block_classes = implode(' ', array_filter([$bg_class, $pad_top, $pad_btm]));



$email = get_field('email_address', 'option'); 
$text = get_field('text', 'option');
$phone = get_field('phone_number', 'option'); 

$insta = get_field('instagram', 'option');
$linkedin = get_field('linkedin', 'option');
$facebook = get_field('facebook', 'option');
$tiktok = get_field('tiktok', 'option');
$x = get_field('x', 'option');
$youtube = get_field('youtube', 'option');
?>

<footer class="pad-top-small text-white bg-dark-grey">
	<div class="wrap">
		<div class="">

			<div class="top grid grid-cols-12">
				<div class="left">
					<div class="flex justify-center flex-col gap-32 toggle-wrap" role="tablist">

						<div class="buttons flex gap-24">
							<button type="button" class="toggle-btn is-active" data-toggle="buy" aria-pressed="true">
								BUY
							</button>

							<button type="button" class="toggle-btn" data-toggle="rent" aria-pressed="false">
								RENT
							</button>

							<button type="button" class="toggle-btn" data-toggle="sell" aria-pressed="false">
								SELL
							</button>
						</div>

						<div class="toggled-content">
							<div class="toggle-panel is-active" data-panel="buy">
								<div class="hero-search ">
									<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
										class="hero-search__form green">

										<div class="hero-search__field">
											<input class="location-search" type="text" name="address_keyword"
												placeholder="Where do you want to buy?" aria-label="Search properties"
												autocomplete="off" required>
											<ul class="location-suggestions"></ul>

										</div>

										<button type="submit" class="hero-search__submit orange"
											aria-label="Search properties">
											<svg width="28" height="25" viewBox="0 0 33 34" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
													stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
												<path d="M21.75 21.75L31.75 32.75" stroke="currentColor"
													stroke-width="1.5" stroke-miterlimit="10" />
											</svg>
										</button>
									</form>
								</div>
							</div>

							<div class="toggle-panel" data-panel="rent" hidden>
								<div class="hero-search">
									<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
										class="hero-search__form orange">

										<div class="hero-search__field">
											<input class="location-search" type="text" name="address_keyword"
												placeholder="Where do you want to rent?" aria-label="Search properties"
												required>

											<ul class="location-suggestions"></ul>

										</div>

										<input type="hidden" name="department" value="residential-lettings">
										<input type="hidden" name="radius" value="1">
										<input type="hidden" name="sort" value="new">

										<button type="submit" class="hero-search__submit pink"
											aria-label="Search properties">
											<svg width="28" height="25" viewBox="0 0 33 34" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
													stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
												<path d="M21.75 21.75L31.75 32.75" stroke="currentColor"
													stroke-width="1.5" stroke-miterlimit="10" />
											</svg>
										</button>
									</form>
								</div>
							</div>

							<div class="toggle-panel" data-panel="sell" hidden>
								<div class="hero-search">
									<form action="<?php echo esc_url(home_url('/property-search/')); ?>" method="get"
										class="hero-search__form pink">

										<div class="hero-search__field">
											<input type="text" name="address_keyword"
												placeholder="Enter your postcode for a FREE valuation"
												aria-label="Search properties" required>
										</div>

										<input type="hidden" name="sold" value="1">
										<input type="hidden" name="radius" value="1">
										<input type="hidden" name="sort" value="new">

										<button type="submit" class="hero-search__submit "
											aria-label="Search properties">
											<svg width="28" height="25" viewBox="0 0 33 34" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z"
													stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
												<path d="M21.75 21.75L31.75 32.75" stroke="currentColor"
													stroke-width="1.5" stroke-miterlimit="10" />
											</svg>
										</button>

									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="popular-searches">
						<p class="mar-btm-24">Popular Searches</p>

						<?php if ( have_rows('popular_searches', 'options') ) : ?>
						<div class="flex gap-24 searches">
							<?php while ( have_rows('popular_searches', 'options') ) : the_row('popular_searches', 'options') ; ?>
							<?php $link = get_sub_field('search_link'); ?>
							<a href="<?php echo esc_url($link['url']); ?>"><?php echo $link['title']; ?></a>
							<?php endwhile; ?>
						</div>
						<?php endif; ?>

					</div>
				</div>

				<div class="right">
					<div class="footer-menus-container">
						<?php
						$footer_menus = [
							['footer_buy', 'Buy'],
							['footer_rent', 'Rent'],
							['footer_sell', 'Sell'],
							['footer_mortgages', 'Mortgages'],
						];

						foreach ($footer_menus as $location) :
							if (!has_nav_menu($location[0])) continue;
							?>
						<div class="footer-column dropdown">
							<button type="button" class="dropdown-btn"><?php echo esc_html($location[1]); ?>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
									fill="none">
									<path d="M0.369141 0.337891L5.86906 6.33789L11.3691 0.337891" stroke="white"></path>
								</svg>
							</button>
							<?php
								wp_nav_menu([
									'theme_location' => $location[0],
									'container'      => false,
									'menu_class'     => 'footer-menu dropdown-content',
								]);
								?>
						</div>
						<?php endforeach; ?>
					</div>

					<div class="branches-container">
						<div class="footer-column dropdown">
							<button type="button" class="dropdown-btn">Our Branches
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
									fill="none">
									<path d="M0.369141 0.337891L5.86906 6.33789L11.3691 0.337891" stroke="white" />
								</svg>
							</button>
							<ul class="footer-menu dropdown-content">
								<?php
$offices = get_posts([
  'post_type'      => 'branches',
  'posts_per_page' => -1,
  'post_status'    => 'publish',
  'orderby'        => 'title', // 👈 alphabetical by post title
  'order'          => 'ASC',
]);

if ($offices) :
  foreach ($offices as $office) :

    if ($office->post_name === 'mortgageable') continue;
?>
								<li>
									<a href="<?php echo get_permalink($office->ID); ?>">
										<?php echo esc_html(get_the_title($office->ID)); ?>
									</a>
								</li>
								<?php
  endforeach;
else : ?>
								<li>No branches found</li>
								<?php endif; ?>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="bottom grid grid-cols-12">
				<div class="socials">

					<?php
		$socials = [
			[
				'url'       => get_field('youtube', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/youtube.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/youtube.svg',
				'label'     => 'Youtube',
			],
			[
				'url'       => get_field('facebook', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/facebook.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/facebook.svg',
				'label'     => 'Facebook',
			],
			[
				'url'       => get_field('instagram', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/instagram.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/instagram.svg',
				'label'     => 'Instagram',
			],
			[
				'url'       => get_field('linkedin', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/linkedin.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/linkedin.svg',
				'label'     => 'LinkedIn',
			],
			[
				'url'       => get_field('tiktok', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/tiktok.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/tiktok.svg',
				'label'     => 'TikTok',
			],
			[
				'url'       => get_field('x', 'option'),
				'icon_path' => get_template_directory() . '/assets/images/svg/x.svg',
				'icon_url'  => get_template_directory_uri() . '/assets/images/svg/x.svg',
				'label'     => 'X',
			],
		];
		?>

					<!-- Logos (top row) -->
					<div class="footer-compliance-logos flex gap-16 align-center">
						<div class="compliance-logo">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/ombudsmen-sales.png"
								alt="Ombudsman Sales">
						</div>
						<div class="compliance-logo">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/ombudsmen-lettings.png"
								alt="Ombudsman Lettings">
						</div>
						<?php $money_collect = get_field('money_collect', 'option'); ?>

						<div class="compliance-logo">
							<?php if ($money_collect && !empty($money_collect['url'])) : ?>
							<a href="<?php echo esc_url($money_collect['url']); ?>"
								target="<?php echo esc_attr($money_collect['target'] ?: '_self'); ?>"
								aria-label="<?php echo esc_attr($money_collect['title'] ?: 'Client Money Protect'); ?>">
								<?php endif; ?>

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-money-protect-logo.png"
									alt="Client Money Protect">

								<?php if ($money_collect && !empty($money_collect['url'])) : ?>
							</a>
							<?php endif; ?>
						</div>
					</div>

					<!-- Socials (second row) -->
					<div class="footer-social-icons flex gap-16 align-center">
						<?php foreach ($socials as $social) :
				if (empty($social['url']) || !file_exists($social['icon_path'])) {
					continue;
				}
			?>
						<a href="<?php echo esc_url($social['url']); ?>" target="_blank" rel="noopener noreferrer"
							aria-label="<?php echo esc_attr($social['label']); ?>">
							<img src="<?php echo esc_url($social['icon_url']); ?>"
								alt="<?php echo esc_attr($social['label']); ?>" />
						</a>
						<?php endforeach; ?>
					</div>

				</div>

				<div class="bottom-menus">
					<!-- <ul>
                        <li><a>Commercial</a></li>
                        <li><a>Land & New Homes</a></li>
                        <li><a>Insights & News</a></li>
                    </ul>

                    <ul>
                        <li><a>About</a></li>
                        <li><a>Meet the team</a></li>
                    </ul> -->
					<?php
					$menu_location = 'footer_quicklinks';
					$locations = get_nav_menu_locations();

					if (isset($locations[$menu_location])) {
						$menu_id = $locations[$menu_location];
						$menu_items = wp_get_nav_menu_items($menu_id);

						// Split into groups of 3
						$chunks = array_chunk($menu_items, 3);

						foreach ($chunks as $chunk) {
							echo '<ul>';

							foreach ($chunk as $item) {
								echo '<li>';
								echo '<a href="' . esc_url($item->url) . '">';
								echo esc_html($item->title);
								echo '</a>';
								echo '</li>';
							}

							echo '</ul>';
						}
					}
					?>

					<div class="footer-logo">
						<svg width="363" height="91" viewBox="0 0 363 91" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M351.009 64.9838H329.264C330.461 63.4145 348.83 39.3215 351.031 36.4425C351.031 39.8182 351.009 63.9564 351.009 64.9838ZM362.999 20.1396H362.818H349.293L296.049 89.98H310.218C310.218 89.98 320.153 76.861 320.537 76.3416C321.26 76.3416 349.767 76.3416 351.065 76.3416C351.065 77.3916 351.031 89.9913 351.031 89.9913H351.72H362.999V20.1396Z"
								fill="#C1D42F" />
							<path
								d="M40.5088 43.8963V69.4909H22.9979L40.5088 43.8963ZM0 89.1356H9.54011C9.58527 89.0566 17.1722 77.902 17.1722 77.902H40.5313C40.5313 77.902 40.4975 88.5147 40.4975 89.1243C41.141 89.1356 48.9989 89.1356 49.6311 89.1356C49.6311 88.4695 49.5634 33.2046 49.5634 32.5498H38.7249L0 89.1356Z"
								fill="#FAF8F4" />
							<path
								d="M57.2877 52.2955C54.5556 54.2487 53.1895 56.9245 53.1895 60.255C53.1895 62.8179 54.1039 65.0307 55.9442 66.8146C57.7055 68.5419 60.7312 70.2467 64.9537 71.8951C68.2278 73.1709 70.4068 74.266 71.4681 75.1353C72.4503 75.9708 72.9132 76.953 72.9132 78.2401C72.9132 81.3223 70.3842 82.8126 65.1908 82.8126C61.3973 82.8126 57.7732 82.2933 54.4427 81.2546C54.4427 81.2546 53.9233 81.0965 53.4943 80.961V88.277C53.7201 88.3334 54.0136 88.4125 54.0136 88.4125C58.0668 89.4624 62.3683 90.0157 66.794 90.0157C71.5471 90.0157 75.3631 89.0108 78.1292 87.0125C80.9404 84.9916 82.3743 82.1691 82.3743 78.6353C82.3743 73.7692 78.705 69.8516 71.4455 66.9839C66.5343 65.0759 64.5811 64.0033 63.8134 63.4388C62.7973 62.6937 62.3231 61.8018 62.3231 60.6276C62.3231 59.4534 62.865 58.5051 63.9828 57.7712C65.1682 56.9922 66.8166 56.6083 68.9052 56.6083C72.2358 56.6083 75.9728 57.1503 80.0259 58.2002C80.0259 58.2002 80.534 58.3244 80.9404 58.4373V51.1327C80.6921 51.0762 80.3985 51.0085 80.3985 51.0085C76.097 49.9359 71.9536 49.4053 68.0923 49.4053C63.5763 49.4053 59.9296 50.3762 57.2652 52.2842"
								fill="#FAF8F4" />
							<path
								d="M95.0176 32.5498C95.0176 32.5498 86.8775 37.1674 86.2227 37.1674V89.1356H95.3789V71.5909C95.3789 67.7522 95.6611 65.0088 96.1918 63.3943C96.824 61.5427 97.9079 60.0185 99.4433 58.8895C100.956 57.7605 102.74 57.1847 104.738 57.1847C107.775 57.1847 109.785 58.2347 111.072 60.4589C111.851 61.8137 112.246 64.1507 112.246 67.3684V89.1469H121.403V66.5442C121.403 61.4863 120.703 57.7605 119.28 55.4686C116.841 51.4494 112.709 49.4172 106.996 49.4172C102.537 49.4172 98.845 51.1671 96.0111 54.6445L95.3676 55.4235V32.5498H95.0063H95.0176Z"
								fill="#FAF8F4" />
							<path
								d="M154.164 69.4C154.164 65.6743 155.146 62.6147 157.077 60.3002C158.985 58.0309 161.503 56.8906 164.562 56.8906C167.622 56.8906 170.14 58.0309 172.048 60.2663C173.989 62.5469 174.972 65.6291 174.972 69.4C174.972 73.1709 174.023 76.5805 172.16 78.9853C170.331 81.3675 167.972 82.5303 164.991 82.5303C161.864 82.5303 159.267 81.3223 157.246 78.9288C155.203 76.4789 154.164 73.2838 154.164 69.3887M150.529 55.1745C146.859 58.9793 145.008 63.834 145.008 69.5919C145.008 75.3499 146.826 80.5207 150.45 84.2803C154.074 88.0851 158.861 90.0157 164.664 90.0157C170.467 90.0157 175.073 88.0738 178.697 84.2351C182.31 80.4304 184.139 75.5305 184.139 69.6597C184.139 63.7888 182.344 58.7196 178.788 55.0164C175.209 51.2907 170.422 49.4053 164.574 49.4053C158.725 49.4053 154.221 51.3359 150.54 55.1632"
								fill="#FAF8F4" />
							<path
								d="M197.437 55.2084L196.793 56.0551V50.2859H188.111V89.1463H197.256V71.6015C197.256 66.6791 197.877 63.1566 199.108 61.1808C200.745 58.4599 203.127 57.1841 206.627 57.1841C209.664 57.1841 211.696 58.2793 213.051 60.6163C213.548 61.4744 214.135 63.3372 214.135 67.3565V89.135H223.291V66.5323C223.291 61.4744 222.58 57.7486 221.157 55.4568C218.651 51.4375 214.474 49.4053 208.682 49.4053C204.177 49.4053 200.384 51.3472 197.426 55.2084"
								fill="#FAF8F4" />
							<path
								d="M231.072 52.2955C228.34 54.2487 226.951 56.9245 226.951 60.255C226.951 62.8179 227.877 65.0307 229.706 66.8146C231.478 68.5419 234.504 70.2467 238.715 71.8951C241.99 73.1709 244.18 74.266 245.23 75.1353C246.212 75.9708 246.664 76.953 246.664 78.2401C246.664 81.3223 244.135 82.8126 238.953 82.8126C235.159 82.8126 231.546 82.2933 228.204 81.2546C228.204 81.2546 227.685 81.0965 227.267 80.961V88.277C227.493 88.3334 227.787 88.4125 227.787 88.4125C231.84 89.4624 236.141 90.0157 240.567 90.0157C245.331 90.0157 249.147 89.0108 251.914 87.0125C254.725 84.9916 256.159 82.1691 256.159 78.6353C256.159 73.7692 252.489 69.8516 245.241 66.9839C240.319 65.0759 238.377 64.0033 237.609 63.4388C236.604 62.6937 236.119 61.8018 236.119 60.6276C236.119 59.4534 236.672 58.5051 237.79 57.7712C238.975 56.9922 240.623 56.6083 242.701 56.6083C246.043 56.6083 249.78 57.1503 253.833 58.2002C253.833 58.2002 254.341 58.3244 254.736 58.4373V51.1327C254.499 51.0762 254.205 51.0085 254.205 51.0085C249.904 49.9359 245.76 49.4053 241.911 49.4053C237.394 49.4053 233.736 50.3762 231.083 52.2842"
								fill="#FAF8F4" />
							<path
								d="M142.411 82.2938C141.7 82.3502 140.988 82.3841 140.311 82.3841C138.064 82.3841 136.517 81.9438 135.693 81.0857C134.858 80.2164 134.406 78.5116 134.406 76.1746V57.4782H142.851C142.851 56.8911 145.764 50.8622 145.764 50.2751H134.406V38.2061C134.124 38.3528 133.864 38.5109 133.864 38.5109C133.864 38.5109 125.577 43.1285 125.25 43.2979V75.373C125.25 80.4196 126.277 84.1002 128.321 86.313C130.398 88.5823 133.819 89.7226 138.516 89.7226C141.022 89.7226 143.54 89.463 146.012 88.921C146.012 88.921 146.148 88.8872 146.295 88.8646L142.422 82.2825L142.411 82.2938Z"
								fill="#FAF8F4" />
							<path
								d="M350.079 0C307.617 0 273.059 34.5476 273.059 77.0209C273.059 81.4578 273.454 85.7932 274.176 90.027H289.644C288.74 85.8271 288.244 81.4804 288.244 77.0209C288.244 42.9248 315.983 15.1964 350.079 15.1964C354.336 15.1964 358.502 15.6255 362.51 16.4496V1.00482C358.457 0.338702 354.313 0 350.079 0Z"
								fill="#C1D42F" />
						</svg>

					</div>
				</div>
			</div>

			<div class="dividing-line"></div>

			<div class="policies flex justify-between">
				<?php
					wp_nav_menu([
						'theme_location' => 'footer_policies',
						'container'      => false,
						'menu_class'     => 'policies-menu',
					]);
				?>
				<p>Design and build by Future | <a class="future" href="https://designbyfuture.co.uk"
						target="_blank">Web
						Design
						Manchester</a>. Ashtons © <?php echo date('Y'); ?>. All rights reserved.</p>

			</div>
		</div>
	</div>
</footer>
<script>
(() => {
	const fields = document.querySelectorAll('.hero-search__field');

	if (!fields.length) return;

	const allowedTypes = ['city', 'town', 'village', 'hamlet', 'suburb', 'locality'];

	fields.forEach((field) => {
		const input = field.querySelector('.location-search');
		const suggestions = field.querySelector('.location-suggestions');

		if (!input || !suggestions) return;

		let timeout;

		const clearSuggestions = () => {
			suggestions.innerHTML = '';
			suggestions.classList.remove('is-visible');
		};

		const showSuggestions = () => {
			suggestions.classList.toggle('is-visible', suggestions.children.length > 0);
		};

		input.addEventListener('input', () => {
			clearTimeout(timeout);

			const query = input.value.trim();

			if (query.length < 2) {
				clearSuggestions();
				return;
			}
			timeout = setTimeout(async () => {
				try {
					const url =
						`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}` +
						`&limit=8` +
						`&lang=en` +
						`&countrycode=GB` +
						`&bbox=-3.7,53.0,-1.9,55.0`;

					const res = await fetch(url);
					const data = await res.json();

					suggestions.innerHTML = '';

					data.features
						.filter(place =>
							place.properties &&
							place.properties.countrycode === 'GB' &&
							allowedTypes.includes(place.properties.osm_value)
						)
						.forEach(place => {
							const name = place.properties.name;
							if (!name) return;

							const district =
								place.properties.city ||
								place.properties.district ||
								'';

							const full =
								district && district !== name ?
								`${name}, ${district}` :
								name;

							const li = document.createElement('li');
							li.textContent = full;

							li.addEventListener('click', () => {
								input.value = name;
								clearSuggestions();
							});

							suggestions.appendChild(li);
						});

					showSuggestions();
				} catch (err) {
					console.error('Autocomplete error:', err);
					clearSuggestions();
				}
			}, 250);
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.hero-search__field')) {
			document.querySelectorAll('.location-suggestions').forEach((list) => {
				list.innerHTML = '';
				list.classList.remove('is-visible');
			});
		}
	});
})();
</script>

<?php wp_footer(); // ESSENTIAL: DO NOT DELETE ?>

<?php get_template_part('includes/arrange-viewing'); ?>

<?php get_template_part('includes/valuation-btn'); ?>


<!-- <div id="sbi-modal" class="sbi-modal">
  <div class="sbi-modal-backdrop"></div>

  <div class="sbi-modal-content">
    <span class="sbi-close">&times;</span>

    <img id="sbi-modal-img" src="" />

    <div class="sbi-modal-text">
      <p id="sbi-modal-user"></p>
      <p id="sbi-modal-caption"></p>
    </div>
  </div>
</div> -->


</body>

</html>