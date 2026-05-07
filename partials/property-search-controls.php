<?php
$action = get_post_type_archive_link('property');

$department = isset($_GET['department']) ? sanitize_text_field($_GET['department']) : 'residential-sales';
$min_price  = isset($_GET['minimum_price']) ? sanitize_text_field($_GET['minimum_price']) : '';
$max_price  = isset($_GET['maximum_price']) ? sanitize_text_field($_GET['maximum_price']) : '';
$min_rent   = isset($_GET['minimum_rent']) ? sanitize_text_field($_GET['minimum_rent']) : '';
$max_rent   = isset($_GET['maximum_rent']) ? sanitize_text_field($_GET['maximum_rent']) : '';
$min_floor  = isset($_GET['minimum_floor_area']) ? sanitize_text_field($_GET['minimum_floor_area']) : '';
$max_floor  = isset($_GET['maximum_floor_area']) ? sanitize_text_field($_GET['maximum_floor_area']) : '';
$beds       = isset($_GET['minimum_bedrooms']) ? sanitize_text_field($_GET['minimum_bedrooms']) : '';
$type       = isset($_GET['property_type']) ? sanitize_text_field($_GET['property_type']) : '';
$office_id  = isset($_GET['office_id']) ? sanitize_text_field($_GET['office_id']) : '';
$addr       = isset($_GET['address_keyword']) ? sanitize_text_field($_GET['address_keyword']) : '';
$radius     = isset($_GET['radius']) ? sanitize_text_field($_GET['radius']) : '';

$offices = get_posts([
  'post_type' => 'office',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  'orderby' => 'title',
  'order' => 'ASC',
]);

$offices = array_filter($offices, function ($office) {
	$title = strtolower($office->post_title);

	return (
		strpos($title, 'mortgageable') === false &&
		strpos($title, 'lettings') === false
	);
});

$property_types = [
  '' => 'Property type',
  '26' => 'Bungalow',
  '27' => 'Detached Bungalow',
  '28' => 'Semi-Detached Bungalow',
  '31' => 'Flat / Apartment',
  '17' => 'House',
  '25' => 'Cottage',
  '18' => 'Detached House',
  '19' => 'Semi-Detached House',
  '20' => 'Terraced House',
  '39' => 'Other',
];

// which budget set is active on initial PHP render
$budget_active =
  ($department === 'residential-sales') ? 'sales' :
  (($department === 'residential-lettings') ? 'lettings' :
  (($department === 'commercial') ? 'commercial' : 'sales'));
  
?>

<form
	class="property-search-form property-search-form-custom department-<?php echo esc_attr($department); ?> <?php echo (!empty($_GET['sold']) && $_GET['sold'] === '1') ? 'is-sold-active' : ''; ?>"
	action="<?php echo esc_url($action); ?>" method="get">
	<div class="control control-department">
		<div class="control-main-wrap">
			<label class="label-buy <?php echo $department === 'residential-sales' ? 'is-active' : ''; ?>">
				<input type="radio" name="department" value="residential-sales"
					<?php checked($department, 'residential-sales'); ?>>
				BUY
			</label>

			<label class="label-rent <?php echo $department === 'residential-lettings' ? 'is-active' : ''; ?>">
				<input type="radio" name="department" value="residential-lettings"
					<?php checked($department, 'residential-lettings'); ?>>
				RENT
			</label>

			<label class="label-commercial <?php echo $department === 'commercial' ? 'is-active' : ''; ?>">
				<input type="radio" name="department" value="commercial" <?php checked($department, 'commercial'); ?>>
				COMMERCIAL
			</label>

			<label
				class="label-sold property-sold <?php echo (!empty($_GET['sold']) && $_GET['sold'] === '1') ? 'is-active' : ''; ?>">
				<input type="checkbox" name="sold" value="1"
					<?php checked(!empty($_GET['sold']) && $_GET['sold'] === '1'); ?>>
				SOLD
			</label>
		</div>
		<label class="include-sold">
			<input type="checkbox" name="include_sold" value="1">

			<span class="include-sold__text">Include sold</span>

			<span class="include-sold__box">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="0.5" width="14" height="14" rx="0.5" stroke="#FAF8F4" />
				</svg>

			</span>
		</label>



	</div>


	<div class="sticky-controls">

		<div class="control-geo-wrap">
			<div class="control control-address_keyword location-search-field">
				<label class="visually-hidden" for="address_keyword">Location</label>

				<input id="address_keyword" class="location-search" name="address_keyword"
					value="<?php echo esc_attr($addr); ?>" placeholder="Enter location or postcode" autocomplete="off">

				<ul class="location-suggestions" aria-label="Location suggestions"></ul>

				<span class="input-icon" aria-hidden="true">
					<svg width="23" height="24" viewBox="0 0 23 24" fill="none">
						<path
							d="M9.26701 18.034C14.1089 18.034 18.034 14.1089 18.034 9.26701C18.034 4.42513 14.1089 0.5 9.26701 0.5C4.42513 0.5 0.5 4.42513 0.5 9.26701C0.5 14.1089 4.42513 18.034 9.26701 18.034Z"
							stroke-miterlimit="10" />
						<path d="M15.2305 15.2285L22.2441 22.9435" stroke-miterlimit="10" />
					</svg>
				</span>
			</div>

			<script>
			(() => {
				const fields = document.querySelectorAll('.location-search-field');
				if (!fields.length) return;

				const allowedTypes = [
					'city',
					'town',
					'village',
					'hamlet',
					'suburb',
					'locality',
					'postcode'
				];

				fields.forEach((field) => {
					const input = field.querySelector('.location-search');
					const suggestions = field.querySelector('.location-suggestions');

					if (!input || !suggestions) return;

					let timeout;
					let controller;

					const clearSuggestions = () => {
						suggestions.innerHTML = '';
						suggestions.classList.remove('is-visible');
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
								if (controller) controller.abort();
								controller = new AbortController();

								const url =
									`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}` +
									`&limit=8` +
									`&lang=en` +
									`&countrycode=GB`;

								const res = await fetch(url, {
									signal: controller.signal
								});

								const data = await res.json();

								suggestions.innerHTML = '';

								data.features
									.filter((place) => {
										const props = place.properties || {};
										return (
											props.countrycode === 'GB' &&
											(
												allowedTypes.includes(props.osm_value) ||
												props.postcode
											)
										);
									})
									.forEach((place) => {
										const props = place.properties || {};
										const name = props.name || props.postcode;

										if (!name) return;

										const area =
											props.city ||
											props.town ||
											props.village ||
											props.district ||
											props.county ||
											'';

										const full =
											area && area !== name ?
											`${name}, ${area}` :
											name;

										const li = document.createElement('li');
										li.textContent = full;

										li.addEventListener('click', () => {
											input.value = name;
											clearSuggestions();
										});

										suggestions.appendChild(li);
									});

								suggestions.classList.toggle(
									'is-visible',
									suggestions.children.length > 0
								);
							} catch (err) {
								if (err.name !== 'AbortError') {
									console.error('Autocomplete error:', err);
								}

								clearSuggestions();
							}
						}, 250);
					});

					input.addEventListener('keydown', (e) => {
						if (e.key === 'Escape') clearSuggestions();
					});
				});

				document.addEventListener('click', (e) => {
					if (!e.target.closest('.location-search-field')) {
						document.querySelectorAll('.location-suggestions').forEach((list) => {
							list.innerHTML = '';
							list.classList.remove('is-visible');
						});
					}
				});
			})();
			</script>

			<div class="control control-radius">
				<label class="visually-hidden" for="radius">Radius</label>
				<div class="select-wrap">
					<select name="radius" id="radius">
						<option value="" <?php selected($radius, ''); ?>>Search radius</option>
						<option value="1" <?php selected($radius, '1'); ?>>1 mile</option>
						<option value="3" <?php selected($radius, '3'); ?>>3 miles</option>
						<option value="5" <?php selected($radius, '5'); ?>>5 miles</option>
						<option value="10" <?php selected($radius, '10'); ?>>10 miles</option>
						<option value="15" <?php selected($radius, '15'); ?>>15 miles</option>
						<option value="20" <?php selected($radius, '20'); ?>>20 miles</option>
					</select>
				</div>
			</div>
		</div>

		<button class="filter-icon" type="button" aria-label="Open filters">
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" y="0.5" width="47" height="47" rx="4.5" />
				<line x1="13.5" y1="16.5" x2="35.5" y2="16.5" stroke-linecap="round" />
				<line x1="13.5" y1="24.5" x2="35.5" y2="24.5" stroke-linecap="round" />
				<line x1="13.5" y1="32.5" x2="35.5" y2="32.5" stroke-linecap="round" />
				<circle cx="17.5" cy="16.5" r="2.5" />
				<circle cx="20.5" cy="32.5" r="2.5" />
				<circle cx="31.5" cy="24.5" r="2.5" />
			</svg>
		</button>

		<div class="control-other-filters">

			<div class="control control-office">
				<label class="visually-hidden" for="office_id">Office</label>
				<div class="select-wrap">
					<select name="office_id" id="office_id">
						<option value="">Listings from</option>
						<?php foreach ($offices as $office): ?>
						<option value="<?php echo esc_attr($office->ID); ?>"
							<?php selected($office_id, (string)$office->ID); ?>>
							<?php echo esc_html($office->post_title); ?>
						</option>
						<?php endforeach; ?>
					</select>
				</div>
			</div>



			<!-- IMPORTANT: render ALL sets, then hide/disable by initial $department -->
			<div class="control-group control-group-budget" data-budget-group>

				<!-- SALES: min/max price -->
				<div class="budget-set" data-budget-set="sales"
					<?php echo ($budget_active !== 'sales') ? 'hidden' : ''; ?>>
					<div class="control control-minimum_price">
						<label class="visually-hidden" for="minimum_price">Min price</label>
						<div class="select-wrap">
							<select name="minimum_price" id="minimum_price"
								<?php echo ($budget_active !== 'sales') ? 'disabled' : ''; ?>>
								<option value="">Min price</option>
								<option value="100000" <?php selected($min_price, '100000'); ?>>£100,000</option>
								<option value="150000" <?php selected($min_price, '150000'); ?>>£150,000</option>
								<option value="200000" <?php selected($min_price, '200000'); ?>>£200,000</option>
								<option value="250000" <?php selected($min_price, '250000'); ?>>£250,000</option>
								<option value="300000" <?php selected($min_price, '300000'); ?>>£300,000</option>
								<option value="500000" <?php selected($min_price, '500000'); ?>>£500,000</option>
								<option value="750000" <?php selected($min_price, '750000'); ?>>£750,000</option>
								<option value="1000000" <?php selected($min_price, '1000000'); ?>>£1,000,000</option>
							</select>
						</div>
					</div>

					<span class="budget-separator" aria-hidden="true">-</span>


					<div class="control control-maximum_price">
						<label class="visually-hidden" for="maximum_price">Max price</label>
						<div class="select-wrap">
							<select name="maximum_price" id="maximum_price"
								<?php echo ($budget_active !== 'sales') ? 'disabled' : ''; ?>>
								<option value="">Max price</option>
								<option value="100000" <?php selected($max_price, '100000'); ?>>£100,000</option>
								<option value="150000" <?php selected($max_price, '150000'); ?>>£150,000</option>
								<option value="200000" <?php selected($max_price, '200000'); ?>>£200,000</option>
								<option value="250000" <?php selected($max_price, '250000'); ?>>£250,000</option>
								<option value="300000" <?php selected($max_price, '300000'); ?>>£300,000</option>
								<option value="500000" <?php selected($max_price, '500000'); ?>>£500,000</option>
								<option value="750000" <?php selected($max_price, '750000'); ?>>£750,000</option>
								<option value="1000000" <?php selected($max_price, '1000000'); ?>>£1,000,000</option>
							</select>
						</div>
					</div>

				</div>

				<!-- LETTINGS: min/max rent -->
				<div class="budget-set" data-budget-set="lettings"
					<?php echo ($budget_active !== 'lettings') ? 'hidden' : ''; ?>>
					<div class="control control-minimum_rent">
						<label class="visually-hidden" for="minimum_rent">Min rent</label>
						<div class="select-wrap">
							<select name="minimum_rent" id="minimum_rent"
								<?php echo ($budget_active !== 'lettings') ? 'disabled' : ''; ?>>
								<option value="">Min rent</option>
								<option value="500" <?php selected($min_rent, '500'); ?>>£500 pcm</option>
								<option value="600" <?php selected($min_rent, '600'); ?>>£600 pcm</option>
								<option value="750" <?php selected($min_rent, '750'); ?>>£750 pcm</option>
								<option value="1000" <?php selected($min_rent, '1000'); ?>>£1,000 pcm</option>
								<option value="1250" <?php selected($min_rent, '1250'); ?>>£1,250 pcm</option>
								<option value="1500" <?php selected($min_rent, '1500'); ?>>£1,500 pcm</option>
								<option value="2000" <?php selected($min_rent, '2000'); ?>>£2,000 pcm</option>
							</select>
						</div>
					</div>

					<span class="budget-separator" aria-hidden="true">-</span>


					<div class="control control-maximum_rent">
						<label class="visually-hidden" for="maximum_rent">Max rent</label>
						<div class="select-wrap">
							<select name="maximum_rent" id="maximum_rent"
								<?php echo ($budget_active !== 'lettings') ? 'disabled' : ''; ?>>
								<option value="">Max rent</option>
								<option value="500" <?php selected($max_rent, '500'); ?>>£500 pcm</option>
								<option value="600" <?php selected($max_rent, '600'); ?>>£600 pcm</option>
								<option value="750" <?php selected($max_rent, '750'); ?>>£750 pcm</option>
								<option value="1000" <?php selected($max_rent, '1000'); ?>>£1,000 pcm</option>
								<option value="1250" <?php selected($max_rent, '1250'); ?>>£1,250 pcm</option>
								<option value="1500" <?php selected($max_rent, '1500'); ?>>£1,500 pcm</option>
								<option value="2000" <?php selected($max_rent, '2000'); ?>>£2,000 pcm</option>
							</select>
						</div>
					</div>

				</div>

				<!-- COMMERCIAL: min/max floor area -->
				<div class="budget-set" data-budget-set="commercial"
					<?php echo ($budget_active !== 'commercial') ? 'hidden' : ''; ?>>
					<div class="control control-minimum_floor_area">
						<label class="visually-hidden" for="minimum_floor_area">Min floor area</label>
						<div class="select-wrap">
							<select name="minimum_floor_area" id="minimum_floor_area"
								<?php echo ($budget_active !== 'commercial') ? 'disabled' : ''; ?>>
								<option value="">Min floor area</option>
								<option value="250" <?php selected($min_floor, '250'); ?>>250 sq ft</option>
								<option value="500" <?php selected($min_floor, '500'); ?>>500 sq ft</option>
								<option value="1000" <?php selected($min_floor, '1000'); ?>>1,000 sq ft</option>
								<option value="2500" <?php selected($min_floor, '2500'); ?>>2,500 sq ft</option>
								<option value="5000" <?php selected($min_floor, '5000'); ?>>5,000 sq ft</option>
								<option value="10000" <?php selected($min_floor, '10000'); ?>>10,000 sq ft</option>
								<option value="25000" <?php selected($min_floor, '25000'); ?>>25,000 sq ft</option>
								<option value="50000" <?php selected($min_floor, '50000'); ?>>50,000 sq ft</option>
							</select>
						</div>
					</div>

					<span class="budget-separator" aria-hidden="true">-</span>


					<div class="control control-maximum_floor_area">
						<label class="visually-hidden" for="maximum_floor_area">Max floor area</label>
						<div class="select-wrap">
							<select name="maximum_floor_area" id="maximum_floor_area"
								<?php echo ($budget_active !== 'commercial') ? 'disabled' : ''; ?>>
								<option value="">Max floor area</option>
								<option value="250" <?php selected($max_floor, '250'); ?>>250 sq ft</option>
								<option value="500" <?php selected($max_floor, '500'); ?>>500 sq ft</option>
								<option value="1000" <?php selected($max_floor, '1000'); ?>>1,000 sq ft</option>
								<option value="2500" <?php selected($max_floor, '2500'); ?>>2,500 sq ft</option>
								<option value="5000" <?php selected($max_floor, '5000'); ?>>5,000 sq ft</option>
								<option value="10000" <?php selected($max_floor, '10000'); ?>>10,000 sq ft</option>
								<option value="25000" <?php selected($max_floor, '25000'); ?>>25,000 sq ft</option>
								<option value="50000" <?php selected($max_floor, '50000'); ?>>50,000 sq ft</option>
							</select>
						</div>
					</div>

				</div>

			</div>

			<div class="control control-minimum_bedrooms">
				<label class="visually-hidden" for="minimum_bedrooms">Beds</label>
				<div class="select-wrap">
					<select name="minimum_bedrooms" id="minimum_bedrooms">
						<option value="">Beds</option>
						<?php for ($i=1; $i<=6; $i++): ?>
						<option value="<?php echo $i; ?>" <?php selected($beds, (string)$i); ?>>
							<?php echo $i; ?>
						</option>
						<?php endfor; ?>
					</select>
				</div>
			</div>

			<!-- ✅ Always show Property type on desktop (including commercial) -->
			<div class="control control-property_type">
				<label class="visually-hidden" for="property_type">Property type</label>
				<div class="select-wrap">
					<select name="property_type" id="property_type">
						<?php foreach ($property_types as $val => $label): ?>
						<option value="<?php echo esc_attr($val); ?>" <?php selected($type, (string)$val); ?>>
							<?php echo esc_html($label); ?>
						</option>
						<?php endforeach; ?>
					</select>
				</div>
			</div>

			<button class="search-submit" type="submit" aria-label="Search">
				<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="54" height="54" rx="10" />
					<path
						d="M24.4838 34.5483C30.2739 34.5483 34.9677 29.8547 34.9677 24.0649C34.9677 18.2751 30.2739 13.5815 24.4838 13.5815C18.6938 13.5815 14 18.2751 14 24.0649C14 29.8547 18.6938 34.5483 24.4838 34.5483Z"
						stroke-width="2" />
					<path d="M31.6113 31.1934L39.9984 40.4187" stroke-width=" 2" />
				</svg>
			</button>
		</div>

	</div>






	<!-- Mobile filter panel -->

	<div id="filters-panel" class="filters-panel" hidden>
		<div class="filters-panel__inner">
			<div class="filter-panel__header flex justify-between align-center">
				<div class="filters-panel__content">
					<h3>FILTERS</h3>
				</div>
				<button class="filters-panel__close" type="button" aria-label="Close filters">
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="1.78906" width="40.1098" height="2.52945" rx="1.26472" transform="rotate(45 1.78906 0)"
							fill="#FAF8F4" />
						<rect x="30.2988" y="1.93359" width="40.1098" height="2.52945" rx="1.26472"
							transform="rotate(135 30.2988 1.93359)" fill="#FAF8F4" />
					</svg>
				</button>
			</div>

			<div class="filters-panel__body">


				<div class="filters-panel__body">

					<div class="m-control m-control-radius">
						<label class="visually-hidden" for="m_radius">Search radius</label>
						<div class="select-wrap">
							<select name="radius" id="m_radius">
								<option value="" <?php selected($radius, ''); ?>>Search radius</option>
								<option value="1" <?php selected($radius, '1'); ?>>1 mile</option>
								<option value="3" <?php selected($radius, '3'); ?>>3 miles</option>
								<option value="5" <?php selected($radius, '5'); ?>>5 miles</option>
								<option value="10" <?php selected($radius, '10'); ?>>10 miles</option>
								<option value="15" <?php selected($radius, '15'); ?>>15 miles</option>
								<option value="20" <?php selected($radius, '20'); ?>>20 miles</option>
							</select>
						</div>
					</div>

				</div>


				<div class="control control-office control-office--mobile">
					<label class="visually-hidden" for="m_office_id">Office</label>

					<div class="select-wrap">
						<select name="office_id" id="m_office_id">
							<option value="">Listings from</option>

							<?php foreach ($offices as $office): ?>
							<option value="<?php echo esc_attr($office->ID); ?>"
								<?php selected($office_id, (string) $office->ID); ?>>
								<?php echo esc_html($office->post_title); ?>
							</option>
							<?php endforeach; ?>
						</select>
					</div>
				</div>

				<!-- MOBILE: Budget group -->
				<div class="control-group control-group-budget control-group-budget--mobile" data-budget-group>

					<!-- SALES: min/max price -->
					<div class="budget-set" data-budget-set="sales"
						<?php echo ($budget_active !== 'sales') ? 'hidden' : ''; ?>>

						<div class="control control-minimum_price control-minimum_price--mobile">
							<label class="visually-hidden" for="m_minimum_price">Min price</label>

							<div class="select-wrap">
								<select name="minimum_price" id="m_minimum_price"
									<?php echo ($budget_active !== 'sales') ? 'disabled' : ''; ?>>
									<option value="">Min price</option>
									<option value="100000" <?php selected($min_price, '100000'); ?>>£100,000</option>
									<option value="150000" <?php selected($min_price, '150000'); ?>>£150,000</option>
									<option value="200000" <?php selected($min_price, '200000'); ?>>£200,000</option>
									<option value="250000" <?php selected($min_price, '250000'); ?>>£250,000</option>
									<option value="300000" <?php selected($min_price, '300000'); ?>>£300,000</option>
									<option value="500000" <?php selected($min_price, '500000'); ?>>£500,000</option>
									<option value="750000" <?php selected($min_price, '750000'); ?>>£750,000</option>
									<option value="1000000" <?php selected($min_price, '1000000'); ?>>£1,000,000
									</option>
								</select>
							</div>
						</div>


						<div class="control control-maximum_price control-maximum_price--mobile">
							<label class="visually-hidden" for="m_maximum_price">Max price</label>

							<div class="select-wrap">
								<select name="maximum_price" id="m_maximum_price"
									<?php echo ($budget_active !== 'sales') ? 'disabled' : ''; ?>>
									<option value="">Max price</option>
									<option value="100000" <?php selected($max_price, '100000'); ?>>£100,000</option>
									<option value="150000" <?php selected($max_price, '150000'); ?>>£150,000</option>
									<option value="200000" <?php selected($max_price, '200000'); ?>>£200,000</option>
									<option value="250000" <?php selected($max_price, '250000'); ?>>£250,000</option>
									<option value="300000" <?php selected($max_price, '300000'); ?>>£300,000</option>
									<option value="500000" <?php selected($max_price, '500000'); ?>>£500,000</option>
									<option value="750000" <?php selected($max_price, '750000'); ?>>£750,000</option>
									<option value="1000000" <?php selected($max_price, '1000000'); ?>>£1,000,000
									</option>
								</select>
							</div>
						</div>

					</div>
				</div>


				<div class="budget-set" data-budget-set="lettings"
					<?php echo ($budget_active !== 'lettings') ? 'hidden' : ''; ?>>

					<div class="control control-minimum_rent">
						<label class="visually-hidden" for="minimum_rent_mobile">Min rent</label>
						<div class="select-wrap">
							<select name="minimum_rent" id="minimum_rent_mobile"
								<?php echo ($budget_active !== 'lettings') ? 'disabled' : ''; ?>>
								<option value="">Min rent</option>
								<option value="500" <?php selected($min_rent, '500'); ?>>£500 pcm</option>
								<option value="600" <?php selected($min_rent, '600'); ?>>£600 pcm</option>
								<option value="750" <?php selected($min_rent, '750'); ?>>£750 pcm</option>
								<option value="1000" <?php selected($min_rent, '1000'); ?>>£1,000 pcm</option>
								<option value="1250" <?php selected($min_rent, '1250'); ?>>£1,250 pcm</option>
								<option value="1500" <?php selected($min_rent, '1500'); ?>>£1,500 pcm</option>
								<option value="2000" <?php selected($min_rent, '2000'); ?>>£2,000 pcm</option>
							</select>
						</div>
					</div>


					<div class="control control-maximum_rent">
						<label class="visually-hidden" for="maximum_rent_mobile">Max rent</label>
						<div class="select-wrap">
							<select name="maximum_rent" id="maximum_rent_mobile"
								<?php echo ($budget_active !== 'lettings') ? 'disabled' : ''; ?>>
								<option value="">Max rent</option>
								<option value="500" <?php selected($max_rent, '500'); ?>>£500 pcm</option>
								<option value="600" <?php selected($max_rent, '600'); ?>>£600 pcm</option>
								<option value="750" <?php selected($max_rent, '750'); ?>>£750 pcm</option>
								<option value="1000" <?php selected($max_rent, '1000'); ?>>£1,000 pcm</option>
								<option value="1250" <?php selected($max_rent, '1250'); ?>>£1,250 pcm</option>
								<option value="1500" <?php selected($max_rent, '1500'); ?>>£1,500 pcm</option>
								<option value="2000" <?php selected($max_rent, '2000'); ?>>£2,000 pcm</option>
							</select>
						</div>
					</div>

				</div>


				<div class="budget-set" data-budget-set="commercial"
					<?php echo ($budget_active !== 'commercial') ? 'hidden' : ''; ?>>
					<div class="control control-minimum_floor_area">
						<label class="visually-hidden" for="minimum_floor_area">Min floor area</label>
						<div class="select-wrap">
							<select name="minimum_floor_area" id="minimum_floor_area"
								<?php echo ($budget_active !== 'commercial') ? 'disabled' : ''; ?>>
								<option value="">Min floor area</option>
								<option value="250" <?php selected($min_floor, '250'); ?>>250 sq ft</option>
								<option value="500" <?php selected($min_floor, '500'); ?>>500 sq ft</option>
								<option value="1000" <?php selected($min_floor, '1000'); ?>>1,000 sq ft</option>
								<option value="2500" <?php selected($min_floor, '2500'); ?>>2,500 sq ft</option>
								<option value="5000" <?php selected($min_floor, '5000'); ?>>5,000 sq ft</option>
								<option value="10000" <?php selected($min_floor, '10000'); ?>>10,000 sq ft</option>
								<option value="25000" <?php selected($min_floor, '25000'); ?>>25,000 sq ft</option>
								<option value="50000" <?php selected($min_floor, '50000'); ?>>50,000 sq ft</option>
							</select>
						</div>
					</div>



					<div class="control control-maximum_floor_area">
						<label class="visually-hidden" for="maximum_floor_area">Max floor area</label>
						<div class="select-wrap">
							<select name="maximum_floor_area" id="maximum_floor_area"
								<?php echo ($budget_active !== 'commercial') ? 'disabled' : ''; ?>>
								<option value="">Max floor area</option>
								<option value="250" <?php selected($max_floor, '250'); ?>>250 sq ft</option>
								<option value="500" <?php selected($max_floor, '500'); ?>>500 sq ft</option>
								<option value="1000" <?php selected($max_floor, '1000'); ?>>1,000 sq ft</option>
								<option value="2500" <?php selected($max_floor, '2500'); ?>>2,500 sq ft</option>
								<option value="5000" <?php selected($max_floor, '5000'); ?>>5,000 sq ft</option>
								<option value="10000" <?php selected($max_floor, '10000'); ?>>10,000 sq ft</option>
								<option value="25000" <?php selected($max_floor, '25000'); ?>>25,000 sq ft</option>
								<option value="50000" <?php selected($max_floor, '50000'); ?>>50,000 sq ft</option>
							</select>
						</div>
					</div>

				</div>





				<div class="control control-minimum_bedrooms">
					<label class="visually-hidden" for="minimum_bedrooms_mobile">Beds</label>
					<div class="select-wrap">
						<select name="minimum_bedrooms" id="minimum_bedrooms_mobile">
							<option value="">Beds</option>
							<?php for ($i=1; $i<=6; $i++): ?>
							<option value="<?php echo $i; ?>" <?php selected($beds, (string)$i); ?>>
								<?php echo $i; ?>
							</option>
							<?php endfor; ?>
						</select>
					</div>
				</div>

				<div class="control control-property_type">
					<label class="visually-hidden" for="property_type_mobile">Property type</label>
					<div class="select-wrap">
						<select name="property_type" id="property_type_mobile">
							<?php foreach ($property_types as $val => $label): ?>
							<option value="<?php echo esc_attr($val); ?>" <?php selected($type, (string)$val); ?>>
								<?php echo esc_html($label); ?>
							</option>
							<?php endforeach; ?>
						</select>
					</div>
				</div>


				<label class="include-sold include-sold-mobile">
					<input type="checkbox" name="include_sold" value="1">

					<span class="include-sold__text">Include sold</span>

					<span class="include-sold__box">
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.5" y="0.5" width="14" height="14" rx="0.5" stroke="#FAF8F4" />
						</svg>

					</span>
				</label>


				<button class="search-submit search-submit--mobile " type="submit" aria-label="Search">

					<a class="cta-button green large mar-top-16 mega-cta">
						<span class="cta-text">Apply filters</span>
					</a>
				</button>



			</div>


		</div>
	</div>
</form>