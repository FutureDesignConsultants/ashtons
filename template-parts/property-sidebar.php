<aside class="property-sidebar text-dark-grey">
	<div class="property-sidebar__inner">
		<div class="flex justify-between align-center back-search back-search-desktop">
			<a href="/property-search" class="search-link flex align-center gap-8" data-anim="fade" data-delay="0.75">
				<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="10.5" cy="10.5" r="10.5" transform="rotate(-180 10.5 10.5)" fill="#C1D42F" />
					<path d="M15.752 10.687L5.21196 10.687" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M8.91211 14.5039L5.15711 10.6869L8.91211 6.86988" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<span>Back to search results</span>
			</a>
			<button type="button" class="flex gap-8 share-trigger js-open-share-modal" data-anim="fade" data-delay="0.75">
				<span>Share</span>

				<svg class="share-icon" width="22" height="24" viewBox="0 0 29 31" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.9588 22.3736C22.883 20.9271 25.2748 20.7559 27.1502 22.335C28.7565 23.6876 29.325 26.1428 28.1493 28.1817C27.093 30.0142 24.7971 31.0127 22.5718 30.2341C20.5349 29.5225 19.1792 27.4131 19.519 25.1124L7.77022 18.7102C5.80228 20.3766 3.0539 20.2541 1.31303 18.4753C-0.402608 16.7233 -0.442976 13.9007 1.22725 12.1084C2.90924 10.3027 5.71145 10.0241 7.74667 11.7912L19.5291 5.37901C19.1742 3.05645 20.5332 0.990651 22.5516 0.274082C24.7332 -0.501223 27.0526 0.428471 28.1443 2.30464C29.2981 4.28821 28.807 6.7467 27.1653 8.14964C25.3505 9.70025 22.8174 9.63983 21.0159 8.09929L9.28906 14.4914V16.0084L20.9588 22.377V22.3736Z"
						fill="#C1D42F" />
				</svg>
			</button>
		</div>

		<div id="shareModal" class="viewing-modal share-modal" aria-hidden="true">

			<div class="viewing-modal__overlay js-close-share-modal"></div>

			<div class="viewing-modal__dialog">

				<button class="viewing-modal__close js-close-share-modal" aria-label="Close modal">
					<svg width="30" height="31" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
						<line x1="1.41421" y1="1" x2="29.0015" y2="28.5873" stroke="#2D2D35" stroke-width="2"
							stroke-linecap="round"></line>
						<line x1="29.002" y1="2.4191" x2="1.41469" y2="30.0064" stroke="#2D2D35" stroke-width="2"
							stroke-linecap="round"></line>
					</svg>
				</button>

				<div class="viewing-modal__content">

					<h2>Share this PLACE with someone who'll love it</h2>


					<div class="share-actions">

						<a class="whatsapp" target="_blank" rel="noopener"
							href="https://wa.me/?text=<?php echo urlencode(get_the_title() . ' ' . get_permalink()); ?>">
							<svg class="whatsapp" width="66" height="66" viewBox="0 0 66 66" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M33 66C51.2254 66 66 51.2254 66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66Z"
									fill="#C1D42F" />
								<path
									d="M13.5093 52.6345C14.3854 49.4154 15.2121 46.3348 16.0717 43.2642C16.212 42.7626 16.1625 42.3699 15.9199 41.9095C9.82648 30.4255 16.6657 16.1547 29.4219 13.7143C40.1287 11.6667 50.3851 18.8392 52.2216 29.6599C54.0234 40.2727 46.5637 50.5374 35.9509 52.0785C31.8358 52.6758 27.9352 52.0224 24.2343 50.1513C23.8449 49.9533 23.5165 49.9962 23.142 50.0952C19.9773 50.9334 16.8109 51.765 13.5109 52.6345H13.5093Z"
									fill="#FAF8F4" />
								<path
									d="M18.1887 47.9882C18.5567 46.0495 18.8966 44.1916 19.2678 42.3386C19.385 41.7545 19.3404 41.2694 19.0286 40.7134C13.5588 30.9553 19.5533 18.5588 30.5406 16.8659C39.5975 15.47 47.9943 21.8374 49.08 30.9256C50.1525 39.89 43.5938 48.041 34.6194 48.9089C31.3524 49.2257 28.2818 48.5938 25.4009 47.0279C25.0247 46.8233 24.6782 46.7623 24.2492 46.8481C22.2609 47.2441 20.2661 47.6005 18.1887 47.9882Z"
									fill="#C1D42F" />
								<path
									d="M22.9424 28.2809C22.9787 26.3966 23.6205 24.9463 24.9125 23.8012C26.3232 22.5505 28.3379 23.255 28.6497 25.3093C28.7652 26.0633 29.0441 26.7794 29.445 27.4279C29.9037 28.1687 29.9268 28.733 29.5011 29.2825C29.3691 29.4524 29.2322 29.6207 29.0886 29.7808C27.8198 31.1915 27.828 31.1866 28.8444 32.7706C30.242 34.9486 32.1345 36.5606 34.4297 37.714C35.2431 38.1232 35.5698 38.0572 36.1836 37.3757C36.6159 36.8956 37.0449 36.4088 37.4459 35.9006C37.8501 35.3858 38.3105 35.2835 39.0134 35.9204C39.9192 36.7421 41.0082 37.3444 42.2078 37.5869C43.0922 37.7651 43.0839 38.2717 43.0146 38.7931C42.7308 40.9034 41.4405 42.2267 39.2724 42.6871C37.9458 42.9676 36.7149 42.6194 35.4791 42.2102C30.0489 40.4101 26.4965 36.5326 23.873 31.642C23.2905 30.5546 22.9655 29.3732 22.9457 28.2826L22.9424 28.2809Z"
									fill="#FAF8F4" />
							</svg>
						</a>

						<a class="facebook" target="_blank" rel="noopener"
							href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>">

							<svg class="facebook" width="67" height="66" viewBox="0 0 67 66" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M33.5 66C52.0015 66 67 51.2254 67 33C67 14.7746 52.0015 0 33.5 0C14.9985 0 0 14.7746 0 33C0 51.2254 14.9985 66 33.5 66Z"
									fill="#C1D42F" />
								<g clip-path="url(#clip0_9134_19091)">
									<mask id="mask0_9134_19091" style="mask-type:luminance" maskUnits="userSpaceOnUse"
										x="0" y="0" width="68" height="66">
										<path
											d="M33.5449 66C52.047 66 67.0449 51.2259 67.0449 33C67.0449 14.7741 52.047 0 33.5449 0C15.0429 0 0.0449219 14.7741 0.0449219 33C0.0449219 51.2259 15.0429 66 33.5449 66Z"
											fill="#FAF8F4" />
									</mask>
									<g mask="url(#mask0_9134_19091)">
										<path
											d="M37.56 45.6072H44.2768C44.6486 42.8748 45.0155 40.1886 45.389 37.4413H37.6388C37.5801 37.3753 37.5634 37.3654 37.5634 37.3539C37.5634 35.3409 37.3657 33.3196 37.7342 31.3198C38.0391 29.6682 38.895 28.4092 40.6203 27.9802C41.3857 27.7905 42.2098 27.807 43.0105 27.7789C43.8848 27.7476 44.7625 27.7723 45.6637 27.7723C45.6821 27.6007 45.7039 27.4852 45.7039 27.3714C45.7056 25.3534 45.6989 23.3371 45.7123 21.3192C45.7123 20.9991 45.6185 20.8918 45.2952 20.8357C42.6604 20.382 40.0357 20.1081 37.344 20.4694C31.3558 21.273 29.2604 25.624 28.845 29.259C28.5921 31.4749 28.7177 33.7338 28.6758 35.9728C28.6675 36.4464 28.6758 36.9216 28.6758 37.4364H21.3745V45.5709H28.6206V65.9995H37.56V45.6072Z"
											fill="#FAF8F4" />
									</g>
								</g>
								<defs>
									<clipPath id="clip0_9134_19091">
										<rect width="24.3377" height="45.6968" fill="white"
											transform="translate(21.3745 20.3027)" />
									</clipPath>
								</defs>
							</svg>

						</a>

						<a class="pinterest" target="_blank" rel="noopener"
							href="https://pinterest.com/pin/create/button/?url=<?php echo urlencode(get_permalink()); ?>&media=<?php echo urlencode(get_the_post_thumbnail_url(get_the_ID(),'full')); ?>&description=<?php echo urlencode(get_the_title()); ?>">


							<svg class="pinterest" width="67" height="66" viewBox="0 0 67 66" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M33.5 66C52.0015 66 67 51.2254 67 33C67 14.7746 52.0015 0 33.5 0C14.9985 0 0 14.7746 0 33C0 51.2254 14.9985 66 33.5 66Z"
									fill="#C1D42F" />
								<path
									d="M30.6409 41.5561C30.5538 41.8861 30.475 42.1798 30.398 42.4751C29.9223 44.3033 29.4482 46.1332 28.9709 47.9614C28.3963 50.1641 27.4014 52.1804 26.1368 54.0697C25.5237 54.9854 24.8537 55.8632 24.2105 56.7575C24.1988 56.774 24.1854 56.7889 24.172 56.8037C24.0782 56.9143 23.9693 56.9852 23.8135 56.9473C23.6544 56.9077 23.574 56.7955 23.5539 56.647C23.4819 56.1157 23.4065 55.5844 23.3479 55.0531C23.1972 53.6671 23.1352 52.2761 23.1569 50.8819C23.1787 49.4167 23.4149 47.9795 23.7533 46.5572C24.6829 42.6517 25.6243 38.7494 26.5606 34.8455C26.6661 34.4066 26.7666 33.9677 26.8805 33.5305C26.9441 33.2912 26.9241 33.0668 26.837 32.8391C26.5455 32.0768 26.3311 31.2947 26.2239 30.4862C25.9827 28.658 26.1954 26.8942 27.0547 25.2392C27.6141 24.1634 28.44 23.3384 29.5823 22.8533C30.4282 22.4953 31.3025 22.3963 32.1902 22.6685C33.4331 23.048 34.1349 23.9275 34.4549 25.1336C34.6592 25.9042 34.624 26.683 34.5034 27.4618C34.2991 28.7884 33.8769 30.0622 33.4967 31.3442C33.1048 32.6609 32.7162 33.9793 32.3477 35.3009C31.671 37.7248 33.2203 39.7048 35.4096 40.1783C36.8434 40.4885 38.1666 40.1684 39.3977 39.4276C40.4848 38.7742 41.314 37.8683 41.9991 36.8255C42.9488 35.3785 43.5585 33.7912 43.9755 32.128C44.4763 30.1364 44.6941 28.1152 44.5835 26.0642C44.478 24.1238 43.932 22.3286 42.7193 20.7661C41.5652 19.2794 40.0443 18.2944 38.2688 17.674C36.5553 17.0767 34.7865 16.882 32.9792 16.9958C31.2087 17.108 29.5052 17.5007 27.9173 18.2878C24.3613 20.05 22.1939 22.8863 21.3329 26.6945C20.9862 28.2307 20.9794 29.7767 21.363 31.3129C21.5824 32.1973 21.9342 33.0272 22.4869 33.7615C22.6544 33.9842 22.8655 34.1773 23.0631 34.3786C23.1469 34.4644 23.2457 34.5386 23.3412 34.6129C23.6544 34.8604 23.765 35.1442 23.641 35.5501C23.4333 36.2299 23.2775 36.9262 23.105 37.6159C23.0397 37.8782 22.8823 38.0647 22.6427 38.1802C22.2089 38.3897 21.7634 38.4161 21.3128 38.2346C19.8723 37.6522 18.7584 36.6853 17.9109 35.4131C17.0583 34.1311 16.534 32.7187 16.2912 31.2155C15.529 26.485 16.8305 22.3237 19.9695 18.7118C22.1855 16.1593 25.0028 14.4928 28.2473 13.5143C30.944 12.7009 33.6994 12.4616 36.5034 12.7553C39.2001 13.0375 41.7344 13.808 44.0258 15.2567C47.5383 17.4776 49.7794 20.5846 50.6554 24.6205C50.9134 25.8101 50.9519 27.0163 50.9084 28.2241C50.828 30.374 50.4695 32.4761 49.7845 34.5221C49.0257 36.7892 47.9134 38.8633 46.2518 40.6222C44.4093 42.5725 42.1883 43.8908 39.5234 44.432C37.5452 44.8346 35.5955 44.7455 33.7094 43.9717C32.5554 43.4981 31.5705 42.8002 30.8318 41.792C30.7799 41.7194 30.7212 41.6518 30.6425 41.5511L30.6409 41.5561Z"
									fill="#FAF8F4" />
							</svg>




						</a>

						<a class="email" target="_blank" rel="noopener"
							href="mailto:?subject=<?php echo rawurlencode(get_the_title()); ?>&body=<?php echo rawurlencode('Take a look at this property: ' . get_permalink()); ?>">


							<svg class="email" width="67" height="66" viewBox="0 0 67 66" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M33.5 66C52.0015 66 67 51.2254 67 33C67 14.7746 52.0015 0 33.5 0C14.9985 0 0 14.7746 0 33C0 51.2254 14.9985 66 33.5 66Z"
									fill="#C1D42F" />
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M16.8563 23.5057L27.596 32.6736L16.8563 41.8396V23.5057ZM48.3787 22.1952L33.616 34.7953C33.5922 34.8157 33.554 34.8157 33.5302 34.7953L18.7693 22.1952H48.3787ZM50.1422 41.8396L39.4025 32.6717L50.1422 23.5039V41.8378V41.8396ZM37.7612 34.075L49.1556 43.8016H17.8429L29.2373 34.075L32.9211 37.2195C33.2385 37.4905 33.7546 37.4942 34.0682 37.2269L37.7594 34.0769L37.7612 34.075ZM16.3912 20.2109H50.6091C51.4261 20.2109 52.0936 20.8903 52.0936 21.7219V44.2768C52.0936 45.1084 51.4261 45.7878 50.6091 45.7878H16.3912C15.5742 45.7878 14.9067 45.1084 14.9067 44.2768V21.7219C14.9067 20.8903 15.5742 20.2109 16.3912 20.2109Z"
									fill="#FAF8F4" />
							</svg>





						</a>

						<button class="copy js-copy-link" type="button" aria-label="Copy property link">
							<svg class="copy" width="66" height="66" viewBox="0 0 66 66" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M33 66C51.2254 66 66 51.2254 66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66Z"
									fill="#C1D42F" />
								<path d="M47.1638 15.7129H22.666V46.5749H47.1638V15.7129Z" stroke="#FAF8F4"
									stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M43.3338 50.2859H18.8359V19.4238" stroke="#FAF8F4" stroke-width="2"
									stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>

						<p class="share-feedback" aria-live="polite"></p>








					</div>

					<p class="share-feedback"></p>

				</div>

			</div>

		</div>



		<div class="property-price">
			<?php
$show_calculator = true;
$property_id = get_the_ID();

// 1. Try department taxonomy
$departments = get_the_terms($property_id, 'department');

if ($departments && ! is_wp_error($departments)) {
	foreach ($departments as $department) {
		$slug = strtolower($department->slug);
		$name = strtolower($department->name);

		if (
			in_array($slug, ['lettings', 'rent', 'rental', 'to-rent'], true) ||
			in_array($name, ['lettings', 'rent', 'rental', 'to rent'], true)
		) {
			$show_calculator = false;
			break;
		}
	}
}

// 2. Try common meta keys as fallback
if ( $show_calculator ) {
	$possible_department_values = [
		get_post_meta($property_id, '_department', true),
		get_post_meta($property_id, 'department', true),
		get_post_meta($property_id, '_property_department', true),
		get_post_meta($property_id, '_for_sale_to_rent', true),
	];

	foreach ( $possible_department_values as $value ) {
		$value = strtolower(trim((string) $value));

		if ( in_array($value, ['lettings', 'rent', 'rental', 'to-rent', 'to rent'], true) ) {
			$show_calculator = false;
			break;
		}
	}
}

// 3. Last-resort fallback: formatted price looks like rental
if ( $show_calculator && class_exists('PH_Property') ) {
	$property = new PH_Property($property_id);
	$formatted_price = strtolower($property->get_formatted_price());

	if (
		str_contains($formatted_price, 'pcm') ||
		str_contains($formatted_price, 'pw') ||
		str_contains($formatted_price, 'per calendar month') ||
		str_contains($formatted_price, 'per week')
	) {
		$show_calculator = false;
	}
}
?>
			<?php if ( $show_calculator ) : ?>
			<span data-anim="fade" data-delay="0.75" data-y="60">Guide Price</span>
			<?php endif; ?>
			<h3 data-anim="fade" data-y="60" class="">
				<?php
	if ( class_exists('PH_Property') ) {
		$property  = new PH_Property( get_the_ID() );
		$raw_price = $property->get_formatted_price();

		if ( stripos( $raw_price, 'commercial-price' ) !== false ) {
			echo esc_html(
				trim(
					wp_strip_all_tags(
						html_entity_decode( $raw_price, ENT_QUOTES, 'UTF-8' )
					)
				)
			);
		} else {
			echo wp_kses_post($raw_price);
		}
	}
	?>
			</h3>
			<h1 data-anim="fade" data-y="60" data-delay="0.3">
				<?php
	$property_id = get_the_ID();

	$parts = array_filter([
		get_post_meta($property_id, '_address_street', true),
		get_post_meta($property_id, '_address_two', true),
		get_post_meta($property_id, '_address_postcode', true),
	]);

	echo esc_html( implode(', ', $parts) );
	?>
			</h1>
		</div>

		<div class="property-details-sidebar" data-anim="fade" data-delay="0.75">
			<?php
$property_id = get_the_ID();

$beds       = get_post_meta($property_id, '_bedrooms', true);
$baths      = get_post_meta($property_id, '_bathrooms', true);
$receptions = get_post_meta($property_id, '_reception_rooms', true);

$epc = '';
$size_sqft = '';

$import_data_raw = get_post_meta($property_id, '_property_import_data', true);

if ( ! empty($import_data_raw) ) {

	$import_data = json_decode($import_data_raw, true);

	if ( json_last_error() === JSON_ERROR_NONE ) {

		// EPC rating
		if ( ! empty($import_data['epc']['rating']) ) {
			$epc = $import_data['epc']['rating'];
		}

		// Floor area → convert sqm to sqft
		if ( ! empty($import_data['attributes']['floor_area']) ) {
			$size_sqft = round($import_data['attributes']['floor_area'] * 10.7639);
		}
	}
}

// Property type
$type = '';
$terms = get_the_terms($property_id, 'property_type');
if ( $terms && ! is_wp_error($terms) ) {
	$type = $terms[0]->name;
} else {
	$type = get_post_meta($property_id, '_property_type', true);
}
?>

			<?php if ( $type !== '' ) : ?>
			<div class="detail-row">
				<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.3865 9.20961L11.043 0.5L0.701172 9.20961" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M19.2109 20.5V7.43555" stroke="#2D2D35" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8.07812 20.0965V12.415H14.0034V20.0965" stroke="#2D2D35" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M0.5 20.499H21.586" stroke="#2D2D35" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M2.88086 7.43555V20.5" stroke="#2D2D35" stroke-linecap="round" stroke-linejoin="round" />
				</svg>


				<div class="info">
					<strong><?php echo esc_html($type); ?></strong>

				</div>
			</div>
			<?php endif; ?>

			<?php if ( $beds !== '' ) : ?>
			<div class="detail-row">
				<svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.28125 10.3125V4.16785C2.28125 2.1419 3.74944 0.5 5.56105 0.5H19.5186C21.3302 0.5 22.7984 2.1419 22.7984 4.16785V10.3125"
						stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M4.46028 17.3682V19.1527H2.67578V17.3682" stroke="black" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M22.304 17.3682V19.1527H20.5195V17.3682" stroke="black" stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M21.8666 10.3125H3.21997C1.71767 10.3125 0.5 11.5537 0.5 13.0849V15.6648H24.5853V13.0849C24.5853 11.5537 23.3677 10.3125 21.8654 10.3125H21.8666Z"
						stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M20.6497 9.67953V7.19826C20.6497 6.40966 20.0753 5.77148 19.3654 5.77148H14.8996C14.1897 5.77148 13.6152 6.40966 13.6152 7.19826V9.67953"
						stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M11.6654 9.67953V7.19826C11.6654 6.40966 11.075 5.77148 10.3454 5.77148H5.75557C5.02597 5.77148 4.43555 6.40966 4.43555 7.19826V9.67953"
						stroke="black" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<div class="info">
					<strong><?php echo esc_html($beds); ?></strong>
					<span><?php echo ((int) $beds === 1) ? 'bed' : 'beds'; ?></span>
				</div>

			</div>
			<?php endif; ?>

			<?php if ( $baths !== '' ) : ?>
			<div class="detail-row">
				<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.59375 12.7237V2.60352" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M2.59375 2.60349C2.59375 1.44038 3.53077 0.5 4.68972 0.5" stroke="black"
						stroke-linecap="round" stroke-linejoin="round" />
					<path d="M0.5 14.1719H23.5543" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M0.5 19.4312V14.1719" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M23.5547 14.1719V19.4312" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M0.5 19.4312C0.5 21.7561 2.37533 23.6381 4.69193 23.6381" stroke="black"
						stroke-linecap="round" stroke-linejoin="round" />
					<path d="M23.5533 19.4312C23.5533 21.7561 21.6779 23.6381 19.3613 23.6381" stroke="black"
						stroke-linecap="round" stroke-linejoin="round" />
					<path d="M4.69141 23.6382H19.3632" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8.88281 4.70703H15.1707" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12.0273 2.60352V4.707" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<ellipse cx="8.88348" cy="10.632" rx="0.389343" ry="0.390741" fill="black" stroke="black"
						stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
					<ellipse cx="15.1706" cy="10.632" rx="0.389343" ry="0.390741" fill="black" stroke="black"
						stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
					<ellipse cx="12.028" cy="10.632" rx="0.389343" ry="0.390741" fill="black" stroke="black"
						stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12.0257 2.60349C12.0257 1.44038 11.0886 0.5 9.92969 0.5" stroke="black"
						stroke-linecap="round" stroke-linejoin="round" />
					<path d="M4.69141 0.5H9.93196" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
					<ellipse cx="13.5983" cy="7.4757" rx="0.389343" ry="0.390741" fill="black" stroke="black"
						stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
					<ellipse cx="10.4557" cy="7.4757" rx="0.389343" ry="0.390741" fill="black" stroke="black
					stroke-width=" 0.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<div class="info">

					<strong><?php echo esc_html($baths); ?></strong>
					<span><?php echo ((int) $baths === 1) ? 'bath' : 'baths'; ?></span>
				</div>

			</div>
			<?php endif; ?>

			<?php if ( $receptions !== '' ) : ?>
			<div class="detail-row">
				<svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M24.8921 11.3735H7.38178C6.60246 11.3735 5.9707 12.0199 5.9707 12.8171V14.7581C5.9707 15.5554 6.60246 16.2018 7.38178 16.2018H24.8921C25.6715 16.2018 26.3032 15.5554 26.3032 14.7581V12.8171C26.3032 12.0199 25.6715 11.3735 24.8921 11.3735Z"
						stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
					<path
						d="M6.68549 11.0947V9.53477C6.68549 8.24205 5.66187 7.19482 4.39827 7.19482H2.04606C1.19242 7.19482 0.5 7.9032 0.5 8.77653V18.0084C0.5 19.1938 1.43864 20.154 2.59724 20.154H29.7989C30.9575 20.154 31.8962 19.1938 31.8962 18.0084V8.77653C31.8962 7.9032 31.2037 7.19482 30.3501 7.19482H27.9991C26.7355 7.19482 25.7119 8.24205 25.7119 9.53477V11.0947"
						stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
					<path d="M26.9824 20.6223L27.7511 24.1194" stroke="black" stroke-miterlimit="10"
						stroke-linecap="round" />
					<path d="M5.41194 20.6223L4.64453 24.1194" stroke="black" stroke-miterlimit="10"
						stroke-linecap="round" />
					<path
						d="M27.7517 6.71301V3.87055C27.7517 2.00882 26.2769 0.5 24.4571 0.5H7.93913C6.11935 0.5 4.64453 2.00882 4.64453 3.87055V6.71301"
						stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
				</svg>


				<div class="info">
					<strong><?php echo esc_html($receptions); ?></strong>
					<span><?php echo ((int) $receptions === 1) ? 'living room' : 'living rooms'; ?></span>
				</div>
			</div>
			<?php endif; ?>

			<?php if ( $epc !== '' ) : ?>
			<div class="detail-row">
				<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="0.5" width="9.25" height="5.8125" stroke="black" />
					<rect x="0.5" y="6.3125" width="15.9375" height="5.8125" stroke="black" />
					<rect x="0.5" y="12.125" width="22.3125" height="5.8125" stroke="black" />
					<rect x="0.5" y="17.9375" width="28.375" height="5.8125" stroke="black" />
				</svg>


				<div class="info">
					<span>EPC rating:</span>
					<strong><?php echo esc_html($epc); ?></strong>
				</div>
			</div>
			<?php endif; ?>

			<?php if ( $size_sqft ) : ?>
			<div class="detail-row">
				<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.26172 18.0747V7.85194L15.4132 0.704834L23.5622 7.85194V18.0747" stroke="#2D2D35"
						stroke-miterlimit="10" stroke-linecap="square" />
					<path d="M7.30273 18.075H23.5455" stroke="#2D2D35" stroke-miterlimit="10" />
					<path d="M2.02148 0.982178L2.02149 23.7669" stroke="#2D2D35" stroke-miterlimit="10" />
					<path d="M1.51367 23.7283L23.2012 23.7283" stroke="#2D2D35" stroke-miterlimit="10" />
					<path d="M15.3848 0.709717V17.9336" stroke="#2D2D35" stroke-miterlimit="10" />
					<path d="M21.6738 22.0823L23.352 23.7477L21.6738 25.413" stroke="#2D2D35" stroke-miterlimit="10" />
					<path d="M0.355469 2.38794L2.02085 0.709755L3.68623 2.38794" stroke="#2D2D35"
						stroke-miterlimit="10" />
				</svg>

				<div class="info">
					<strong><?php echo number_format($size_sqft); ?></strong>
					<span>sq.ft</span>
				</div>
			</div>
			<?php endif; ?>





		</div>

		<div class="arrange-viewing" data-anim="fade" data-delay="0.75">
			<a href="#" class="cta-button green square large js-open-viewing-modal">
				<span class="cta-text">Arrange a viewing</span>
			</a>
		</div>

		<?php
$show_calculator = true;
$property_id = get_the_ID();

// 1. Try department taxonomy
$departments = get_the_terms($property_id, 'department');

if ($departments && ! is_wp_error($departments)) {
	foreach ($departments as $department) {
		$slug = strtolower($department->slug);
		$name = strtolower($department->name);

		if (
			in_array($slug, ['lettings', 'rent', 'rental', 'to-rent'], true) ||
			in_array($name, ['lettings', 'rent', 'rental', 'to rent'], true)
		) {
			$show_calculator = false;
			break;
		}
	}
}

// 2. Try common meta keys as fallback
if ( $show_calculator ) {
	$possible_department_values = [
		get_post_meta($property_id, '_department', true),
		get_post_meta($property_id, 'department', true),
		get_post_meta($property_id, '_property_department', true),
		get_post_meta($property_id, '_for_sale_to_rent', true),
	];

	foreach ( $possible_department_values as $value ) {
		$value = strtolower(trim((string) $value));

		if ( in_array($value, ['lettings', 'rent', 'rental', 'to-rent', 'to rent'], true) ) {
			$show_calculator = false;
			break;
		}
	}
}

// 3. Last-resort fallback: if the formatted price looks like rent
if ( $show_calculator && class_exists('PH_Property') ) {
	$property = new PH_Property($property_id);
	$formatted_price = strtolower($property->get_formatted_price());

	if (
		str_contains($formatted_price, 'pcm') ||
		str_contains($formatted_price, 'pw') ||
		str_contains($formatted_price, 'per calendar month') ||
		str_contains($formatted_price, 'per week')
	) {
		$show_calculator = false;
	}
}
?>

		<?php if ( $show_calculator ) : ?>


		<div class="calculator-cta" data-anim="fade" data-delay="0.75">


			<?php
$property_id = get_the_ID();
$price = (float) get_post_meta($property_id, '_price_actual', true);

$years = 25;
$annual_interest_rate = 5.1;
$monthly_payment = 0;

if ( $price > 0 ) {
	$monthly_interest_rate = ($annual_interest_rate / 100) / 12;
	$total_payments = $years * 12;

	if ( $monthly_interest_rate > 0 ) {
		$monthly_payment = $price * (
			$monthly_interest_rate * pow(1 + $monthly_interest_rate, $total_payments)
		) / (
			pow(1 + $monthly_interest_rate, $total_payments) - 1
		);
	} else {
		$monthly_payment = $price / $total_payments;
	}
}
?>
			<div class="content">
				<p class="title">Mortgage payments from (approx)</p>

				<?php if ( $monthly_payment > 0 ) : ?>
				<p class="monthly-payment">£<?php echo number_format(round($monthly_payment)); ?></p>
				<?php endif; ?>

				<div class="partnership flex">
					<span>In partnership with</span>
					<a href="https://www.mortgageable.co.uk/" target="_blank">
						<svg width="155" height="34" viewBox="0 0 155 34" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_9134_19789)">
								<path
									d="M27.6068 20.0089C23.8495 20.0089 21.5117 17.892 21.5117 13.405C21.5117 8.91798 23.8495 6.76855 27.6068 6.76855C31.3641 6.76855 33.7019 8.88541 33.7019 13.405C33.7019 17.9246 31.3641 20.0089 27.6068 20.0089ZM27.6068 9.30155C25.6019 9.30155 24.5446 10.6766 24.5446 13.405C24.5446 16.1334 25.6092 17.4795 27.6068 17.4795C29.6043 17.4795 30.669 16.1044 30.669 13.405C30.669 10.7055 29.6117 9.30155 27.6068 9.30155Z"
									fill="#194187" />
								<path
									d="M39.1967 8.55647C39.4944 8.0259 39.9295 7.58332 40.4574 7.27423C40.9853 6.96515 41.5869 6.80072 42.2004 6.79785C42.5769 6.79785 42.9379 6.94577 43.2041 7.20907C43.4703 7.47238 43.6199 7.82949 43.6199 8.20185C43.6199 8.57422 43.4703 8.93133 43.2041 9.19463C42.9379 9.45793 42.5769 9.60585 42.2004 9.60585C40.2797 9.60585 39.1967 10.8181 39.1967 12.6635V18.3881C39.1967 18.7825 39.0383 19.1608 38.7563 19.4397C38.4744 19.7186 38.0919 19.8753 37.6931 19.8753C37.2943 19.8753 36.9119 19.7186 36.6299 19.4397C36.3479 19.1608 36.1895 18.7825 36.1895 18.3881V8.42259C36.1895 8.02815 36.3479 7.64987 36.6299 7.37096C36.9119 7.09205 37.2943 6.93536 37.6931 6.93536C38.0919 6.93536 38.4744 7.09205 38.7563 7.37096C39.0383 7.64987 39.1967 8.02815 39.1967 8.42259V8.55647Z"
									fill="#194187" />
								<path
									d="M46.8769 4.84012C46.8769 4.45336 47.0323 4.08244 47.3088 3.80896C47.5853 3.53548 47.9603 3.38184 48.3513 3.38184C48.7423 3.38184 49.1173 3.53548 49.3938 3.80896C49.6703 4.08244 49.8257 4.45336 49.8257 4.84012V7.15599H51.0805C51.4012 7.17314 51.7029 7.31119 51.9238 7.54173C52.1446 7.77227 52.2677 8.07777 52.2677 8.39535C52.2677 8.71293 52.1446 9.01843 51.9238 9.24898C51.7029 9.47952 51.4012 9.61757 51.0805 9.63471H49.8257V16.2929C49.829 16.4267 49.859 16.5586 49.914 16.681C49.969 16.8033 50.0479 16.9137 50.1461 17.0058C50.2443 17.098 50.36 17.17 50.4865 17.2178C50.6129 17.2656 50.7477 17.2882 50.883 17.2843C51.2304 17.2843 51.5635 17.4208 51.8091 17.6638C52.0547 17.9067 52.1927 18.2362 52.1927 18.5798C52.1927 18.9234 52.0547 19.2529 51.8091 19.4958C51.5635 19.7388 51.2304 19.8752 50.883 19.8752C48.4062 19.8752 46.8586 18.3048 46.8586 16.13V9.63471H46.2184C45.8978 9.61757 45.596 9.47952 45.3752 9.24898C45.1543 9.01843 45.0312 8.71293 45.0312 8.39535C45.0312 8.07777 45.1543 7.77227 45.3752 7.54173C45.596 7.31119 45.8978 7.17314 46.2184 7.15599H46.8586L46.8769 4.84012Z"
									fill="#194187" />
								<path
									d="M70.7367 10.4595C70.5412 10.6084 70.3077 10.7006 70.0623 10.7259C69.8169 10.7512 69.5692 10.7085 69.3468 10.6027C69.1245 10.4969 68.9363 10.332 68.8031 10.1266C68.67 9.92108 68.5972 9.68306 68.5928 9.43905C68.5988 9.10233 68.7289 8.77936 68.9587 8.53079C69.7379 7.67681 71.1282 6.76855 73.5245 6.76855C76.9745 6.76855 79.0342 8.45119 79.0342 11.3677V18.4167C79.0342 18.8039 78.8787 19.1753 78.6018 19.4491C78.325 19.723 77.9495 19.8768 77.558 19.8768C77.1665 19.8768 76.791 19.723 76.5142 19.4491C76.2373 19.1753 76.0818 18.8039 76.0818 18.4167C75.3501 19.5964 74.1062 20.0089 72.4233 20.0089C69.694 20.0089 67.8867 18.3299 67.8867 15.8548C67.8867 13.2964 69.9721 11.9757 72.394 11.9757H76.0525V11.4763C76.0525 10.2351 75.1342 9.4101 73.5208 9.4101C72.5008 9.44462 71.5213 9.8138 70.7367 10.4595ZM76.0525 15.0551V14.2843H72.8038C71.5782 14.2843 70.9123 14.8633 70.9123 15.8548C70.9123 16.8462 71.6623 17.5338 73.2208 17.5338C74.6842 17.5338 76.0598 16.5966 76.0598 15.0551"
									fill="#194187" />
								<path
									d="M101.538 6.76855C106.243 6.76855 107.107 10.3473 107.107 12.2507C107.107 13.2639 107.107 14.4508 105.405 14.4508H98.5346C98.5346 16.4301 99.9505 17.3456 101.787 17.3456C102.773 17.3496 103.736 17.0526 104.546 16.4952C104.8 16.2999 105.113 16.1931 105.435 16.1913C105.606 16.1908 105.777 16.2239 105.936 16.2886C106.094 16.3533 106.239 16.4484 106.36 16.5684C106.482 16.6884 106.579 16.8309 106.645 16.9879C106.71 17.1449 106.744 17.3132 106.744 17.4831C106.742 17.6772 106.698 17.8686 106.616 18.045C106.534 18.2213 106.416 18.3788 106.269 18.5072C105.797 18.945 104.322 20.0161 101.787 20.0161C97.92 20.0161 95.5273 17.9571 95.5273 13.3543C95.5273 9.14233 97.7554 6.77579 101.538 6.77579M98.6115 11.9793H104.125C104.125 10.6296 103.346 9.3124 101.535 9.3124C99.9176 9.3124 98.7505 10.217 98.6078 11.9793"
									fill="#194187" />
								<path
									d="M112.089 10.4595C111.849 10.643 111.554 10.74 111.251 10.7345C111.079 10.7345 110.909 10.701 110.75 10.6358C110.591 10.5707 110.447 10.4752 110.326 10.3549C110.205 10.2345 110.108 10.0917 110.043 9.93453C109.978 9.77738 109.944 9.609 109.945 9.43905C109.949 9.10199 110.079 8.77844 110.31 8.53079C111.09 7.67681 112.48 6.76855 114.876 6.76855C118.326 6.76855 120.386 8.45119 120.386 11.3677V18.4167C120.386 18.8035 120.231 19.1744 119.954 19.4479C119.678 19.7213 119.303 19.875 118.912 19.875C118.521 19.875 118.146 19.7213 117.869 19.4479C117.593 19.1744 117.437 18.8035 117.437 18.4167C116.684 19.5964 115.458 20.0089 113.779 20.0089C111.053 20.0089 109.242 18.3299 109.242 15.8548C109.242 13.2964 111.328 11.9757 113.749 11.9757H117.408V11.4763C117.408 10.2351 116.49 9.4101 114.876 9.4101C113.856 9.44462 112.877 9.8138 112.092 10.4595M117.408 15.0551V14.2843H114.145C112.919 14.2843 112.249 14.8633 112.249 15.8548C112.249 16.8462 113.003 17.5338 114.562 17.5338C116.025 17.5338 117.401 16.5966 117.401 15.0551"
									fill="#194187" />
								<path
									d="M134.513 13.4052C134.513 17.8922 132.318 20.0091 128.557 20.0091C125.191 20.0091 122.795 18.1636 122.795 14.5053V1.53996C122.795 1.14553 122.953 0.767243 123.235 0.488334C123.517 0.209424 123.9 0.0527344 124.299 0.0527344C124.697 0.0527344 125.08 0.209424 125.362 0.488334C125.644 0.767243 125.802 1.14553 125.802 1.53996V7.87245C126.65 7.14329 127.741 6.75018 128.864 6.76878C132.373 6.76878 134.513 8.91821 134.513 13.4052ZM125.802 14.4908C125.802 16.3905 126.944 17.4616 128.557 17.4616C130.478 17.4616 131.535 16.0902 131.535 13.3908C131.535 10.6913 130.438 9.29092 128.557 9.29092C126.885 9.29092 125.802 10.6877 125.802 10.6877V14.4908Z"
									fill="#194187" />
								<path
									d="M149.433 6.76855C154.138 6.76855 155.001 10.3473 155.001 12.2507C155.001 13.2639 155.001 14.4508 153.304 14.4508H146.426C146.426 16.4301 147.849 17.3456 149.685 17.3456C150.67 17.3495 151.632 17.0526 152.44 16.4952C152.695 16.3016 153.007 16.1949 153.329 16.1913C153.501 16.1908 153.671 16.2239 153.83 16.2886C153.989 16.3533 154.133 16.4484 154.255 16.5684C154.377 16.6884 154.473 16.8309 154.539 16.9879C154.605 17.1449 154.639 17.3132 154.639 17.4831C154.636 17.6768 154.593 17.8678 154.511 18.0441C154.43 18.2204 154.313 18.378 154.167 18.5072C153.691 18.945 152.217 20.0161 149.685 20.0161C145.815 20.0161 143.422 17.9571 143.422 13.3543C143.422 9.14233 145.65 6.77579 149.433 6.77579M146.506 11.9793H152.019C152.019 10.6296 151.236 9.3124 149.429 9.3124C147.816 9.3124 146.645 10.217 146.502 11.9793"
									fill="#194187" />
								<path
									d="M13.5365 6.89173C12.7826 6.88887 12.0361 7.03969 11.3437 7.33479C10.6513 7.62989 10.0279 8.06294 9.51217 8.60693C8.68795 7.73494 7.59608 7.156 6.40561 6.95975C5.21513 6.76351 3.99245 6.9609 2.92685 7.52136C2.74832 7.22875 2.47756 7.00225 2.1562 6.87667C1.83483 6.7511 1.48066 6.73341 1.14814 6.82632C0.815624 6.91923 0.523165 7.1176 0.315736 7.39093C0.108307 7.66425 -0.00260748 7.99741 4.65445e-05 8.33916V14.3062V18.33C4.65445e-05 18.7446 0.16656 19.1422 0.462957 19.4354C0.759354 19.7285 1.16135 19.8932 1.58052 19.8932C1.99969 19.8932 2.40169 19.7285 2.69809 19.4354C2.99448 19.1422 3.161 18.7446 3.161 18.33V12.3558C3.161 12.0483 3.22222 11.7439 3.34118 11.4598C3.46013 11.1758 3.63449 10.9177 3.85429 10.7003C4.07409 10.4829 4.33503 10.3104 4.62222 10.1928C4.9094 10.0751 5.21721 10.0146 5.52805 10.0146C5.8389 10.0146 6.1467 10.0751 6.43388 10.1928C6.72107 10.3104 6.98201 10.4829 7.20181 10.7003C7.42161 10.9177 7.59597 11.1758 7.71492 11.4598C7.83388 11.7439 7.89511 12.0483 7.89511 12.3558V15.7934C7.8951 16.2083 8.0615 16.6063 8.35779 16.9C8.65409 17.1938 9.05608 17.3593 9.47558 17.3602H9.53412H9.59997C9.80752 17.3598 10.0129 17.3189 10.2045 17.2399C10.3961 17.1609 10.57 17.0453 10.7165 16.8998C10.8629 16.7543 10.9789 16.5817 11.0579 16.3919C11.1369 16.202 11.1773 15.9987 11.1768 15.7934V12.3558C11.1768 12.0469 11.2383 11.741 11.3578 11.4557C11.4773 11.1703 11.6525 10.911 11.8733 10.6926C12.0941 10.4742 12.3563 10.3009 12.6448 10.1827C12.9333 10.0645 13.2425 10.0037 13.5548 10.0037C13.8671 10.0037 14.1763 10.0645 14.4648 10.1827C14.7534 10.3009 15.0155 10.4742 15.2363 10.6926C15.4572 10.911 15.6323 11.1703 15.7518 11.4557C15.8713 11.741 15.9328 12.0469 15.9328 12.3558V13.9335C15.9226 14.1448 15.9558 14.3561 16.0305 14.5544C16.1051 14.7527 16.2198 14.9339 16.3674 15.0871C16.515 15.2403 16.6925 15.3622 16.8892 15.4456C17.0858 15.5289 17.2975 15.5719 17.5115 15.5719C17.7254 15.5719 17.9372 15.5289 18.1338 15.4456C18.3305 15.3622 18.508 15.2403 18.6556 15.0871C18.8032 14.9339 18.9178 14.7527 18.9925 14.5544C19.0672 14.3561 19.1004 14.1448 19.0901 13.9335V12.3558C19.0887 11.6362 18.9439 10.9239 18.6639 10.2598C18.3839 9.59559 17.9743 8.99252 17.4585 8.48504C16.9427 7.97757 16.3309 7.57564 15.6579 7.30224C14.9849 7.02885 14.264 6.88935 13.5365 6.89173Z"
									fill="#194187" />
								<path
									d="M144.083 24.7243C139.616 24.7243 136.953 21.891 136.953 17.1253V1.61617C136.943 1.4077 136.975 1.19934 137.049 1.00373C137.123 0.808125 137.236 0.629342 137.381 0.478222C137.527 0.327103 137.702 0.206794 137.896 0.124591C138.09 0.0423867 138.299 0 138.51 0C138.721 0 138.93 0.0423867 139.124 0.124591C139.317 0.206794 139.493 0.327103 139.638 0.478222C139.784 0.629342 139.897 0.808125 139.97 1.00373C140.044 1.19934 140.077 1.4077 140.066 1.61617V17.1434C140.066 20.212 141.343 21.6449 144.091 21.6449C144.302 21.6348 144.512 21.6671 144.71 21.7399C144.908 21.8128 145.088 21.9245 145.241 22.0685C145.394 22.2125 145.516 22.3856 145.599 22.5775C145.682 22.7693 145.725 22.9759 145.725 23.1846C145.725 23.3933 145.682 23.5999 145.599 23.7917C145.516 23.9836 145.394 24.1567 145.241 24.3007C145.088 24.4447 144.908 24.5565 144.71 24.6293C144.512 24.7021 144.302 24.7344 144.091 24.7243H144.083Z"
									fill="#194187" />
								<path
									d="M143.088 34.0671C141.714 34.0625 140.348 33.8763 139.024 33.5134C136.852 32.9351 134.823 31.9214 133.064 30.5354C132.73 30.2474 132.525 29.84 132.494 29.4026C132.464 28.9653 132.61 28.5338 132.901 28.2032C133.192 27.8726 133.604 27.6699 134.046 27.6397C134.489 27.6095 134.925 27.7543 135.259 28.0422C135.57 28.3027 142.616 34.0815 151.046 27.9626C151.222 27.8345 151.422 27.742 151.634 27.6905C151.847 27.6389 152.067 27.6292 152.284 27.662C152.5 27.6947 152.708 27.7693 152.895 27.8814C153.082 27.9935 153.245 28.141 153.374 28.3154C153.504 28.4898 153.597 28.6877 153.649 28.8978C153.701 29.1079 153.711 29.3262 153.678 29.54C153.645 29.7539 153.57 29.9592 153.456 30.1443C153.343 30.3294 153.194 30.4905 153.017 30.6186C149.403 33.2384 145.975 34.0671 143.088 34.0671Z"
									fill="#E72479" />
								<path
									d="M53.5938 13.3688C53.5938 8.88541 55.7889 6.76855 59.5425 6.76855C62.9083 6.76855 65.301 8.6104 65.301 12.2688V19.2309C65.301 23.0268 63.4095 25.1689 59.2937 25.1689C57.0401 25.1689 55.3718 24.4814 54.4279 23.3597C54.2448 23.1328 54.1465 22.8503 54.1498 22.56C54.1546 22.2111 54.2968 21.8779 54.5462 21.6312C54.7956 21.3845 55.1325 21.2439 55.4852 21.2392C55.8107 21.2492 56.1236 21.3664 56.3742 21.5721C57.2009 22.2453 58.2306 22.6273 59.301 22.6577C61.2766 22.6577 62.2754 21.6408 62.2754 19.9618V18.8944C61.437 19.6157 60.3572 20.0027 59.2461 19.9799C55.734 19.9944 53.5938 17.8522 53.5938 13.3688ZM62.2973 12.2832C62.2973 10.3835 61.1559 9.3124 59.5425 9.3124C57.6254 9.3124 56.5681 10.6875 56.5681 13.3833C56.5681 16.0791 57.6657 17.4795 59.5425 17.4795C61.2108 17.4795 62.2973 16.0791 62.2973 16.0791V12.2832Z"
									fill="#194187" />
								<path
									d="M81.3652 13.3688C81.3652 8.88541 83.5603 6.76855 87.314 6.76855C90.6798 6.76855 93.0688 8.6104 93.0688 12.2688V19.2309C93.0688 23.0268 91.181 25.1689 87.0652 25.1689C84.8115 25.1689 83.1433 24.4814 82.1994 23.3597C82.0163 23.1328 81.918 22.8503 81.9213 22.56C81.9261 22.2111 82.0683 21.8779 82.3177 21.6312C82.5671 21.3845 82.904 21.2439 83.2567 21.2392C83.5822 21.2492 83.8951 21.3664 84.1457 21.5721C84.9724 22.2453 86.0021 22.6273 87.0725 22.6577C89.0444 22.6577 90.0469 21.6408 90.0469 19.9618V18.8944C89.2081 19.6151 88.1285 20.002 87.0176 19.9799C83.5055 19.9944 81.3652 17.8522 81.3652 13.3688ZM90.0688 12.2832C90.0688 10.3835 88.9274 9.3124 87.314 9.3124C85.3969 9.3124 84.3396 10.6875 84.3396 13.3833C84.3396 16.0791 85.4372 17.4795 87.314 17.4795C88.9823 17.4795 90.0688 16.0791 90.0688 16.0791V12.2832Z"
									fill="#194187" />
							</g>
							<defs>
								<clipPath id="clip0_9134_19789">
									<rect width="155" height="34" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>

				<a href="#property-calculator" class="cta-button blue flex square gap-16">
					<span>View calculator</span>

					<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="10.5" cy="10.5" r="10.5" transform="rotate(90 10.5 10.5)" fill="#AFE6EC" />
						<path d="M10.6875 5.24805L10.6875 15.788" stroke="#2D2D35" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M14.5039 12.0879L10.6869 15.8429L6.86988 12.0879" stroke="#2D2D35"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>


				</a>



			</div>

			<!-- <svg class="calculator-icon" width="65" height="72" viewBox="0 0 49 57" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_8455_9202)">
					<path
						d="M48.0844 15.6914C46.4042 14.3074 32.3238 3.84659 26.8157 0.639622C25.3647 -0.200298 23.8755 -0.209842 22.2431 0.610988C16.9832 3.28346 2.50185 14.4029 0.926752 15.6914C-0.0469473 16.4836 -0.276053 17.8293 0.363534 18.8888C0.678554 19.3946 1.02221 19.8719 1.39451 20.3014C1.87181 20.855 2.54004 21.1318 3.22736 21.1318C3.61875 21.1318 4.01968 21.0172 4.39198 20.8263C3.68557 32.0602 3.38964 48.1046 4.0865 52.5237C4.36334 54.2895 5.63297 55.6353 7.38944 56.0266C10.4537 56.7138 17.4796 57.0001 24.4578 57.0001C31.436 57.0001 38.2137 56.7138 41.1253 56.2557C42.8722 55.9884 44.1896 54.6426 44.4855 52.8483C45.2014 48.6009 45.4496 32.2702 45.0105 21.0077C45.946 21.3036 46.9675 21.0554 47.6166 20.3014C47.9889 19.8719 48.3326 19.3946 48.6476 18.8792C49.2872 17.8293 49.0581 16.4836 48.0844 15.6914ZM42.6049 52.5333C42.4426 53.5164 41.7553 54.2322 40.8293 54.3754C35.2258 55.2535 13.6039 55.4539 7.79993 54.1654C6.79759 53.9459 6.12936 53.2396 5.96708 52.2279C5.28931 47.8565 5.63297 30.6286 6.38711 19.5378L43.0536 19.8814C43.5404 30.8576 43.3113 48.3146 42.6049 52.5333ZM31.646 11.4536C32.9443 12.389 34.2616 13.3434 35.5504 14.2883L14.0431 13.8779C15.2745 12.9807 16.5346 12.0644 17.766 11.1863L31.646 11.4536ZM19.0547 10.251C20.9735 8.88611 22.7204 7.6644 24.0378 6.78631C24.2574 6.64314 24.4865 6.55724 24.5437 6.55724C24.6201 6.55724 24.706 6.6145 24.9065 6.74813L24.9733 6.78631C26.4625 7.77894 28.3144 9.06745 30.2714 10.4705L19.0547 10.251ZM36.8868 15.2619C37.7173 15.8823 38.5383 16.474 39.302 17.0371C39.7411 17.3617 40.1516 17.6575 40.543 17.9534L8.88818 17.648C9.28911 17.3521 9.70914 17.0467 10.1578 16.7222C10.9788 16.1209 11.857 15.4718 12.7639 14.8133L36.8868 15.2619ZM47.0152 17.8866C46.7575 18.3161 46.4806 18.7074 46.1751 19.051C45.9651 19.2897 45.6406 19.2515 45.421 19.1083C45.2683 19.0129 45.0105 18.8315 44.6669 18.5834C44.5809 18.4975 44.4855 18.4306 44.3709 18.3734C43.445 17.7148 42.0512 16.6935 40.4284 15.5005C35.9608 12.2171 29.8514 7.73122 26.0234 5.20191L25.9661 5.15419C25.6606 4.95375 25.2788 4.69605 24.706 4.64833C23.9996 4.59106 23.2646 5.01102 22.9877 5.20191C19.6275 7.41625 13.4989 11.9022 9.03137 15.1855C6.41574 17.0944 4.15333 18.7456 3.59011 19.1083C3.37055 19.261 3.04598 19.2897 2.83597 19.051C2.53049 18.7074 2.25366 18.3161 1.99591 17.8962C1.85272 17.6575 1.91 17.3521 2.1391 17.1612C3.68557 15.8918 17.976 4.92512 23.1118 2.30992C23.6369 2.04267 24.1142 1.90905 24.5628 1.90905C25.0115 1.90905 25.422 2.03312 25.8516 2.29083C31.2928 5.45007 45.211 15.7964 46.872 17.1612C47.1011 17.3521 47.1584 17.6575 47.0152 17.8866Z"
						fill="#2D2D35" />
					<path
						d="M41.4679 23.7756C41.3342 22.5252 40.3033 21.504 38.9477 21.3035C33.4683 20.5018 14.5098 20.4731 10.4718 20.9695C9.10668 21.1317 8.08525 22.1053 7.93252 23.3938C7.68432 25.4363 7.6175 27.4884 7.75114 29.5023C7.83706 30.8672 8.95395 31.9648 10.4145 32.1175C13.0206 32.3847 23.2253 32.6043 30.7858 32.6043C34.3942 32.6043 37.4013 32.5565 38.6995 32.4325C40.1028 32.2988 41.2197 31.3348 41.4106 30.075C41.6874 28.1756 41.7065 26.114 41.4679 23.7756ZM39.9882 29.865C39.8832 30.5713 39.1959 30.9531 38.5659 31.0103C34.6902 31.373 14.2043 31.0676 10.5577 30.6858C9.78446 30.6095 9.22124 30.0845 9.18305 29.4164C9.05895 27.4884 9.11623 25.5222 9.35488 23.5656C9.43125 22.9356 9.93719 22.468 10.6436 22.3821C12.2664 22.1912 16.6576 22.0766 21.5643 22.0766C28.1606 22.0766 35.6925 22.2771 38.7377 22.7257C39.4537 22.8307 39.9787 23.3079 40.036 23.9283C40.2651 26.1426 40.2555 28.0801 39.9882 29.865Z"
						fill="#2D2D35" />
					<path
						d="M15.3406 35.6393C15.3024 34.828 14.6724 34.1408 13.8801 34.0644C12.41 33.9022 10.8921 33.8926 9.49841 34.0167C8.72517 34.0931 8.10468 34.7135 8.01876 35.5057C7.9424 36.2215 7.93285 36.9564 7.97103 37.6723C8.01876 38.4549 8.60107 39.0944 9.38385 39.228C9.88979 39.3139 10.9685 39.3712 11.9995 39.3712C12.725 39.3712 13.4314 39.3426 13.8705 39.2758C14.6628 39.1708 15.2642 38.5027 15.312 37.7105C15.3597 36.9755 15.3692 36.2788 15.3406 35.6393ZM13.8896 37.615C13.8801 37.7582 13.775 37.8441 13.67 37.8632C12.7727 37.9872 10.3576 37.9395 9.6225 37.8154C9.5175 37.7964 9.41249 37.72 9.40295 37.5864C9.36476 36.9469 9.37431 36.2979 9.44113 35.6488C9.46022 35.5343 9.54614 35.4484 9.63205 35.4484C10.2144 35.3911 10.8253 35.3625 11.4458 35.3625C12.1999 35.3625 12.9732 35.4007 13.7273 35.4866C13.8132 35.4866 13.9087 35.582 13.9087 35.7061C13.9373 36.2883 13.9278 36.9374 13.8896 37.615Z"
						fill="#2D2D35" />
					<path
						d="M23.989 35.6393C23.9509 34.828 23.3208 34.1408 22.5285 34.0644C21.0584 33.9022 19.5406 33.8926 18.1373 34.0167C17.3736 34.0931 16.7531 34.7135 16.6672 35.5057C16.5908 36.212 16.5813 36.9469 16.6195 37.6818C16.6672 38.4549 17.2495 39.0944 18.0227 39.228C18.5287 39.3139 19.6169 39.3712 20.6479 39.3712C21.3734 39.3712 22.0798 39.3426 22.5189 39.2758C23.3113 39.1708 23.9127 38.5027 23.9604 37.7105C24.0081 36.9564 24.0177 36.2788 23.989 35.6393ZM22.5285 37.6246C22.5285 37.7582 22.4139 37.8441 22.3185 37.8632C21.4211 37.9872 19.006 37.9395 18.2614 37.8154C18.1659 37.7964 18.0609 37.72 18.0514 37.5864C18.0132 36.9374 18.0227 36.2883 18.0896 35.6488C18.1087 35.5343 18.1946 35.4484 18.2709 35.4484C18.8628 35.3911 19.4737 35.3625 20.0942 35.3625C20.8484 35.3625 21.6216 35.4007 22.3758 35.4866C22.4617 35.4866 22.5571 35.582 22.5571 35.7061C22.5858 36.2883 22.5762 36.9183 22.5285 37.6246Z"
						fill="#2D2D35" />
					<path
						d="M15.3406 42.5303C15.3024 41.7095 14.6724 41.0318 13.8801 40.9459C12.41 40.7932 10.8921 40.7741 9.49841 40.9077C8.72517 40.9745 8.10468 41.5949 8.01876 42.3871C7.9424 43.1125 7.93285 43.8379 7.97103 44.5633C8.01876 45.3459 8.60107 45.9854 9.38385 46.1095C9.88979 46.1954 10.9685 46.2527 11.9995 46.2527C12.725 46.2527 13.4314 46.224 13.8705 46.1668C14.6628 46.0522 15.2642 45.3937 15.312 44.5919C15.3597 43.857 15.3692 43.1602 15.3406 42.5303ZM13.8896 44.506C13.8801 44.6396 13.775 44.7351 13.67 44.7446C12.7727 44.8687 10.3576 44.8305 9.6225 44.6969C9.5175 44.6969 9.41249 44.6015 9.40295 44.4774C9.36476 43.8283 9.37431 43.1793 9.44113 42.5398C9.46022 42.4158 9.54614 42.3394 9.63205 42.3299C10.2144 42.2726 10.8253 42.244 11.4458 42.244C12.1999 42.244 12.9732 42.2917 13.7273 42.368C13.8132 42.368 13.9087 42.473 13.9087 42.5876C13.9373 43.1793 13.9278 43.8188 13.8896 44.506Z"
						fill="#2D2D35" />
					<path
						d="M23.989 42.5303C23.9509 41.7095 23.3208 41.0318 22.5285 40.9459C21.0584 40.7932 19.5406 40.7741 18.1373 40.9077C17.3736 40.9745 16.7531 41.6045 16.6672 42.3871C16.5908 43.103 16.5813 43.8283 16.6195 44.5633C16.6672 45.3459 17.2495 45.9854 18.0227 46.1095C18.5287 46.1954 19.6169 46.2527 20.6479 46.2527C21.3734 46.2527 22.0798 46.224 22.5189 46.1668C23.3113 46.0522 23.9127 45.3937 23.9604 44.5919C24.0081 43.8379 24.0177 43.1602 23.989 42.5303ZM22.5285 44.506C22.5285 44.6492 22.4139 44.7351 22.3185 44.7446C21.4211 44.8687 19.006 44.8305 18.2614 44.6969C18.1659 44.6969 18.0609 44.6015 18.0514 44.4774C18.0132 43.8188 18.0227 43.1698 18.0896 42.5398C18.1087 42.4158 18.1946 42.3394 18.2709 42.3299C18.8628 42.2726 19.4737 42.244 20.0942 42.244C20.8484 42.244 21.6216 42.2917 22.3758 42.368C22.4617 42.368 22.5571 42.4635 22.5571 42.5971C22.5858 43.1793 22.5762 43.7997 22.5285 44.506Z"
						fill="#2D2D35" />
					<path
						d="M41.0291 44.3058C40.905 42.5305 39.979 41.4138 38.4325 41.1656C35.5878 40.7266 30.2993 40.7361 27.9605 41.0606C26.9104 41.2038 25.6026 41.8338 25.3449 44.0099C25.1539 45.6134 25.0585 48.1236 25.2303 49.813C25.4021 51.3974 26.4236 52.6286 27.7696 52.8959C28.9437 53.1154 31.5212 53.2586 33.9554 53.2586C35.6833 53.2586 37.3443 53.1918 38.3562 53.0295C39.769 52.8004 40.8381 51.5119 40.9622 49.8893C41.1054 48.1045 41.1341 45.8138 41.0291 44.3058ZM39.5399 49.7748C39.4635 50.7388 38.8812 51.4928 38.1366 51.6074C35.8646 51.9796 29.9174 51.8555 28.0464 51.4833C27.3209 51.3497 26.7577 50.6147 26.6622 49.6603C26.4904 48.0759 26.5858 45.6993 26.7672 44.1722C26.92 42.8264 27.5309 42.5591 28.1514 42.4732C29.1728 42.3301 30.8434 42.2537 32.5999 42.2537C34.6236 42.2537 36.7715 42.3587 38.213 42.5878C38.8048 42.6737 39.5017 42.9696 39.5971 44.4108C39.7022 45.852 39.6735 48.0568 39.5399 49.7748Z"
						fill="#2D2D35" />
					<path
						d="M15.3406 49.4121C15.3024 48.5913 14.6724 47.9136 13.8801 47.8277C12.41 47.675 10.8921 47.6559 9.49841 47.7896C8.72517 47.8564 8.10468 48.4863 8.01876 49.269C7.9424 49.9943 7.93285 50.7197 7.97103 51.4451C8.01876 52.2278 8.60107 52.8672 9.38385 53.0009C9.88979 53.0868 10.9685 53.1345 11.9899 53.1345C12.725 53.1345 13.4314 53.1154 13.8705 53.0486C14.6628 52.9341 15.2642 52.2755 15.312 51.4833C15.3597 50.7388 15.3692 50.0421 15.3406 49.4121ZM13.8896 51.3878C13.8801 51.531 13.775 51.6169 13.67 51.6265C12.7823 51.7601 10.3576 51.7124 9.6225 51.5883C9.5175 51.5692 9.41249 51.4833 9.40295 51.3592C9.36476 50.7102 9.37431 50.0612 9.44113 49.4217C9.46022 49.2976 9.54614 49.2212 9.63205 49.2117C10.2144 49.1544 10.8253 49.1353 11.4458 49.1353C12.1999 49.1353 12.9732 49.1735 13.7273 49.2499C13.8132 49.2499 13.9087 49.3549 13.9087 49.4789C13.9373 50.0612 13.9278 50.7006 13.8896 51.3878Z"
						fill="#2D2D35" />
					<path
						d="M23.989 49.4121C23.9509 48.5913 23.3208 47.9136 22.5285 47.8277C21.0584 47.675 19.5406 47.6559 18.1373 47.7896C17.3736 47.8564 16.7531 48.4863 16.6672 49.269C16.5908 49.9848 16.5813 50.7197 16.6195 51.4451C16.6672 52.2278 17.2495 52.8672 18.0227 53.0009C18.5382 53.0868 19.6169 53.1345 20.6384 53.1345C21.3734 53.1345 22.0798 53.1154 22.5189 53.0486C23.3113 52.9341 23.9127 52.2755 23.9604 51.4833C24.0081 50.7197 24.0177 50.0421 23.989 49.4121ZM22.5285 51.3878C22.5285 51.531 22.4139 51.6169 22.3185 51.6265C21.4307 51.7601 19.006 51.7124 18.2709 51.5883C18.1659 51.5692 18.0609 51.4833 18.0514 51.3592C18.0132 50.7102 18.0227 50.0516 18.0896 49.4217C18.1087 49.2976 18.1946 49.2212 18.2709 49.2117C18.8628 49.1544 19.4737 49.1353 20.0942 49.1353C20.8484 49.1353 21.6216 49.1735 22.3758 49.2499C22.4617 49.2499 22.5571 49.3549 22.5571 49.4789C22.5858 50.0612 22.5762 50.6815 22.5285 51.3878Z"
						fill="#2D2D35" />
					<path
						d="M32.6378 35.6393C32.5996 34.828 31.9696 34.1408 31.1772 34.0644C29.7071 33.9022 28.1893 33.8926 26.786 34.0167C26.0223 34.0931 25.4019 34.7135 25.3159 35.5057C25.2396 36.2215 25.2205 36.9564 25.2682 37.6723C25.3159 38.4549 25.8983 39.0944 26.6715 39.228C27.1774 39.3139 28.2657 39.3712 29.2967 39.3712C30.0222 39.3712 30.7286 39.3426 31.1677 39.2758C31.9505 39.1708 32.5614 38.5027 32.6091 37.7105C32.6569 36.9755 32.6664 36.2788 32.6378 35.6393ZM31.1868 37.615C31.1868 37.7582 31.0627 37.8441 30.9672 37.8632C30.0699 37.9872 27.6452 37.9395 26.9101 37.8154C26.8147 37.7964 26.7097 37.72 26.7001 37.5864C26.6619 36.9469 26.6715 36.2979 26.7383 35.6488C26.7383 35.5343 26.8433 35.4484 26.9197 35.4484C27.5115 35.3911 28.1225 35.3625 28.7334 35.3625C29.4971 35.3625 30.2608 35.4007 31.0245 35.4866C31.1104 35.4866 31.1963 35.582 31.2059 35.7061C31.2345 36.2883 31.225 36.9374 31.1868 37.615Z"
						fill="#2D2D35" />
					<path
						d="M41.2862 35.6393C41.248 34.828 40.618 34.1408 39.8257 34.0644C38.346 33.9022 36.8377 33.8926 35.4345 34.0167C34.6612 34.0931 34.0503 34.7135 33.9644 35.5057C33.888 36.212 33.8689 36.9469 33.9166 37.6818C33.9644 38.4549 34.5467 39.0944 35.3199 39.228C35.8259 39.3139 36.9141 39.3712 37.9355 39.3712C38.6706 39.3712 39.377 39.3426 39.8161 39.2758C40.5989 39.1708 41.2098 38.5027 41.2576 37.7105C41.3053 36.9564 41.3149 36.2788 41.2862 35.6393ZM39.8257 37.6246C39.8257 37.7582 39.7111 37.8441 39.6157 37.8632C38.7183 37.9872 36.2936 37.9395 35.5586 37.8154C35.4631 37.7964 35.3581 37.72 35.3486 37.5864C35.3104 36.9374 35.3199 36.2883 35.3867 35.6488C35.3867 35.5343 35.4917 35.4484 35.5681 35.4484C36.16 35.3911 36.7709 35.3625 37.3819 35.3625C38.1456 35.3625 38.9092 35.4007 39.6729 35.4866C39.7588 35.4866 39.8448 35.582 39.8543 35.7061C39.8829 36.2883 39.8734 36.9183 39.8257 37.6246Z"
						fill="#2D2D35" />
					<path
						d="M36.303 46.9782C36.303 47.5031 35.8734 47.9326 35.3483 47.9326H33.9546L33.9355 49.2689C33.9355 49.7938 33.506 50.2138 32.9809 50.2138C32.4559 50.2138 32.0359 49.7747 32.0359 49.2498L32.055 47.9136H30.728C30.203 47.9136 29.7734 47.465 29.7734 46.94C29.7734 46.4151 30.203 45.9951 30.728 45.9951H32.074V44.6207C32.074 44.0957 32.5132 43.6758 33.0286 43.6758C33.5632 43.6758 33.9833 44.1148 33.9737 44.6398V46.0142H35.3483C35.8734 46.0142 36.2934 46.4437 36.2934 46.9686L36.303 46.9782Z"
						fill="#2D2D35" />
					<path
						d="M34.7772 29.5978C34.529 29.5978 34.3286 29.407 34.2999 29.1683C34.2045 28.1184 34.2713 27.0972 34.5004 26.1236C34.5959 25.7323 34.739 25.236 35.0541 24.8447C35.4359 24.377 35.9991 24.1765 36.5146 24.3102C37.116 24.4724 37.5933 25.0928 37.5933 25.7228C37.5933 25.99 37.3642 26.1714 37.116 26.2C36.8487 26.2 36.6387 25.99 36.6387 25.7228C36.6387 25.5128 36.4382 25.2742 36.2664 25.2264C36.0278 25.1692 35.8464 25.3696 35.7891 25.4364C35.5886 25.675 35.4836 26.0473 35.4168 26.3336C35.245 27.0495 35.1782 27.8321 35.2068 28.6148L37.1637 28.5575C37.4119 28.5289 37.6506 28.7579 37.6601 29.0156C37.6601 29.2829 37.4597 29.5024 37.2019 29.5119L34.7868 29.5883C34.7868 29.5883 34.7772 29.5883 34.7677 29.5883L34.7772 29.5978Z"
						fill="#2D2D35" />
					<path
						d="M36.4083 27.6123H36.3988L34.4896 27.5741C34.2223 27.5741 34.0123 27.3546 34.0218 27.0873C34.0218 26.8296 34.2414 26.6196 34.4991 26.6196H34.5086L36.4179 26.6578C36.6852 26.6578 36.8952 26.8773 36.8856 27.1446C36.8856 27.4023 36.6661 27.6123 36.4083 27.6123Z"
						fill="#2D2D35" />
				</g>
				<defs>
					<clipPath id="clip0_8455_9202">
						<rect width="49" height="57" fill="white" />
					</clipPath>
				</defs>
			</svg> -->
		</div>
		<?php endif; ?>
	</div>




</aside>
<script>
document.addEventListener("DOMContentLoaded", function() {
	const sidebar = document.querySelector(".property-sidebar");
	const inner = document.querySelector(".property-sidebar__inner");

	if (!sidebar || !inner) return;

	function setSidebarWidth() {
		const width = sidebar.offsetWidth;
		inner.style.setProperty("--property-sidebar-width", `${width}px`);
		inner.classList.add("is-ready");
	}

	setSidebarWidth();
	window.addEventListener("resize", setSidebarWidth);

	if ("ResizeObserver" in window) {
		const observer = new ResizeObserver(setSidebarWidth);
		observer.observe(sidebar);
	}
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {

	const arrangeViewingTrigger = document.querySelector(".js-open-viewing-modal");
	const arrangeViewingModal = document.getElementById("viewingModal");
	const arrangeViewingCloseButtons = document.querySelectorAll(".js-close-viewing-modal");

	if (arrangeViewingTrigger && arrangeViewingModal) {
		const openArrangeViewingModal = () => {
			arrangeViewingModal.classList.add("is-open");
			arrangeViewingModal.setAttribute("aria-hidden", "false");
			document.body.style.overflow = "hidden";
		};

		const closeArrangeViewingModal = () => {
			arrangeViewingModal.classList.remove("is-open");
			arrangeViewingModal.setAttribute("aria-hidden", "true");
			document.body.style.overflow = "";
		};

		arrangeViewingTrigger.addEventListener("click", function(e) {
			e.preventDefault();
			openArrangeViewingModal();
		});

		arrangeViewingCloseButtons.forEach((btn) => {
			btn.addEventListener("click", closeArrangeViewingModal);
		});

		document.addEventListener("keydown", function(e) {
			if (e.key === "Escape" && arrangeViewingModal.classList.contains("is-open")) {
				closeArrangeViewingModal();
			}
		});
	}

	const shareTrigger = document.querySelector(".share-trigger");
	const shareModal = document.querySelector("#shareModal");
	const closeButtons = document.querySelectorAll(".js-close-share-modal");
	const copyBtn = document.querySelector(".js-copy-link");
	const feedback = document.querySelector(".share-feedback");

	// if (shareTrigger && shareModal) {

	// 	function openShareModal() {
	// 		shareModal.classList.add("is-open");
	// 		shareModal.setAttribute("aria-hidden", "false");
	// 		document.body.style.overflow = "hidden";
	// 		console.log('open');
	// 	}

	// 	function closeShareModal() {
	// 		shareModal.classList.remove("is-open");
	// 		shareModal.setAttribute("aria-hidden", "true");
	// 		document.body.style.overflow = "";
	// 	}

	// 	shareTrigger.addEventListener("click", (e) => {
	// 		e.preventDefault();
	// 		console.log('click');
	// 		openShareModal();
	// 	});

	// 	closeButtons.forEach(function(btn) {
	// 		btn.addEventListener("click", closeShareModal);
	// 	});

	// 	document.addEventListener("keydown", function(e) {
	// 		if (e.key === "Escape" && shareModal.classList.contains("is-open")) {
	// 			closeShareModal();
	// 		}
	// 	});
	// }

	function openShareModal() {
		if (!shareModal) return;

		shareModal.classList.add("is-open");
		shareModal.setAttribute("aria-hidden", "false");

		document.body.style.overflow = "hidden";
	}

	function closeShareModal() {
		if (!shareModal) return;

		shareModal.classList.remove("is-open");
		shareModal.setAttribute("aria-hidden", "true");

		document.body.style.overflow = "";
	}

	// Open modal using delegated click
	document.addEventListener("click", (e) => {

		const shareTrigger = e.target.closest(".js-open-share-modal");

		if (!shareTrigger) return;

		e.preventDefault();
		openShareModal();
	});

	// Close modal buttons
	closeButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			closeShareModal();
		});
	});

	// ESC key close
	document.addEventListener("keydown", (e) => {

		if (e.key === "Escape" && shareModal?.classList.contains("is-open")) {
			closeShareModal();
		}

	});

	function fallbackCopyText(text) {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.setAttribute("readonly", "");
		textArea.style.position = "fixed";
		textArea.style.top = "-9999px";
		textArea.style.left = "-9999px";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		let successful = false;

		try {
			successful = document.execCommand("copy");
		} catch (err) {
			successful = false;
		}

		document.body.removeChild(textArea);
		return successful;
	}

	if (copyBtn) {
		copyBtn.addEventListener("click", async function() {
			const textToCopy = window.location.href;
			let copied = false;

			if (navigator.clipboard && window.isSecureContext) {
				try {
					await navigator.clipboard.writeText(textToCopy);
					copied = true;
				} catch (err) {
					copied = fallbackCopyText(textToCopy);
				}
			} else {
				copied = fallbackCopyText(textToCopy);
			}

			if (copied) {
				copyBtn.classList.add("copied");

				if (feedback) {
					feedback.textContent = "Copied to clipboard.";
				}

				setTimeout(() => {
					copyBtn.classList.remove("copied");
					if (feedback) {
						feedback.textContent = "";
					}
				}, 2000);
			} else {
				if (feedback) {
					feedback.textContent = "Unable to copy link.";
				}
			}
		});
	}

});
</script>