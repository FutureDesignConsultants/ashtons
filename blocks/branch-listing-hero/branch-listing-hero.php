<?php
/**
* Block template for Branch Listing Hero
*/

$block_classes = get_block_classes('branch-listing-hero');
$titleOverride = get_field('title_override');

?>

<section class="block branch-listing-hero <?php echo esc_attr($block_classes); ?> bg-dark-grey pad-btm-40">

	<div class="background-svg">
		<svg width="629" height="581" viewBox="0 0 629 581" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M833.824 546.051C708.844 473.894 802.296 269.396 663.654 183C490.332 74.9934 276.504 224.282 133.979 141.995C26.9774 80.2176 40.5569 -76.3622 40.5569 -76.3622"
				stroke="url(#paint0_linear_10529_18844)" stroke-width="80" />
			<defs>
				<linearGradient id="paint0_linear_10529_18844" x1="891.156" y1="446.75" x2="26.6924" y2="-52.3482"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#C1D42F" stop-opacity="0" />
					<stop offset="0.538462" stop-color="#56C9B8" />
					<stop offset="1" stop-color="#C1D42F" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="wrap">
		<div class="grid grid-cols-12 gap-16">

			<div class="form-wrap">
				<h1><?php echo $titleOverride ? esc_html($titleOverride) : esc_html(get_the_title()); ?></h1>

			</div>

			<div class="right">
				<div class="flex align-center gap-16">
					<p>Unsure on the area you're interested in? <br />Our friendly team can help</p>
					<a data-anim="fade" data-duration="1" data-delay="0.3" class="cta-button square green"
						href="#enquiry">
						<span>Get in Touch</span>
					</a>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- <script>
    const input = document.getElementById('filter-office');

    input.addEventListener('change', (e) => {
        e.preventDefault();

        const value = input.value.trim();
        console.log('Search value:', value);

        window.location.href = `/find-a-branch?office_id=${encodeURIComponent(value)}`;
    });
</script> -->