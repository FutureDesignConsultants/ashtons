<?php
/**
* Block template for News Hero
*/

$block_classes = get_block_classes('news-hero');
$titleOverride = get_field('title_override');
$subText = get_field('sub_text');

?>

<section class="block news-hero <?php echo esc_attr($block_classes); ?> bg-dark-grey pad-btm-40"
	style="padding-top: 138px;">

	<div class="background-svg">
		<svg xmlns="http://www.w3.org/2000/svg" width="1367" height="667" viewBox="0 0 1367 667" fill="none">
			<path
				d="M26.9492 -610.447C278.665 -449.38 178.739 -150.038 435.69 14.3791C866.705 290.175 1149.42 107.795 1436.47 291.473C1651.98 429.371 1665.62 663.665 1665.62 663.665"
				stroke="url(#paint0_linear_9134_22098)" stroke-width="100" />
			<defs>
				<linearGradient id="paint0_linear_9134_22098" x1="-55.5147" y1="-481.573" x2="1685.56" y2="632.499"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#C1D42F" />
					<stop offset="0.538462" stop-color="#56C9B8" />
					<stop offset="1" stop-color="#C1D42F" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="wrap">
		<h1><?php echo $titleOverride ? $titleOverride : the_title(); ?></h1>

		<?php if ( $subText ) : ?>
		<p><?php echo $subText; ?></p>
		<?php endif; ?>
	</div>
</section>


<script>
// Remove Body padding on news page
window.addEventListener("load", () => {
	const newsHero = document.querySelector(".news-hero");
	if (newsHero) {
		console.log(newsHero);
		document.body.classList.add("pad-0");
		document.header.classList.remove("bg-dark-grey");
		document.header.classList.add("bg-transparent");
	}
});
</script>