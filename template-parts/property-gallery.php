<?php
$post_id = get_the_ID();

$photos_raw = get_post_meta($post_id, '_photo_urls', true);
$photos     = maybe_unserialize($photos_raw);

$image_urls = [];
if ( is_array($photos) ) {
  foreach ( $photos as $item ) {
    if ( is_array($item) && ! empty($item['url']) ) {
      $image_urls[] = $item['url'];
    }
  }
}
$image_urls = array_values(array_unique(array_filter($image_urls)));
?>

<section class="property-gallery">
	<div class="flex justify-between align-center back-search back-search-mobile">
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
		<button class="flex gap-8 share-trigger js-open-share-modal" data-anim="fade" data-delay="0.75">
			<span>Share</span>

			<svg class="share-icon" width="22" height="24" viewBox="0 0 29 31" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20.9588 22.3736C22.883 20.9271 25.2748 20.7559 27.1502 22.335C28.7565 23.6876 29.325 26.1428 28.1493 28.1817C27.093 30.0142 24.7971 31.0127 22.5718 30.2341C20.5349 29.5225 19.1792 27.4131 19.519 25.1124L7.77022 18.7102C5.80228 20.3766 3.0539 20.2541 1.31303 18.4753C-0.402608 16.7233 -0.442976 13.9007 1.22725 12.1084C2.90924 10.3027 5.71145 10.0241 7.74667 11.7912L19.5291 5.37901C19.1742 3.05645 20.5332 0.990651 22.5516 0.274082C24.7332 -0.501223 27.0526 0.428471 28.1443 2.30464C29.2981 4.28821 28.807 6.7467 27.1653 8.14964C25.3505 9.70025 22.8174 9.63983 21.0159 8.09929L9.28906 14.4914V16.0084L20.9588 22.377V22.3736Z"
					fill="#C1D42F" />
			</svg>
		</button>
	</div>
	<?php if ( ! empty($image_urls) ) : ?>

	<div class="swiper property-gallery-swiper" data-property-gallery-swiper data-open-gallery-modal data-anim="fade"
		data-delay="0.75">

		<div class="swiper-wrapper">
			<?php foreach ( $image_urls as $src ) : ?>
			<div class="swiper-slide">
				<img src="<?php echo esc_url($src); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy"
					class="property-gallery__img" />
			</div>
			<?php endforeach; ?>
		</div>

		<div class="swiper-buttons">
			<button class="slider-cta gallery-btn" type="button" data-open-gallery-modal>
				<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.3178 3.14036H15.2612L14.3944 1.24642C14.2564 0.944532 13.9546 0.75 13.6237 0.75H6.40966C6.07776 0.75 5.77695 0.943615 5.63889 1.24642L4.77211 3.14036H1.71552C1.18247 3.14036 0.75 3.57439 0.75 4.10935V13.4102C0.75 13.9452 1.18247 14.3792 1.71552 14.3792H18.3196C18.8527 14.3792 19.2852 13.9452 19.2852 13.4102V4.10935C19.2852 3.57439 18.8527 3.14036 18.3196 3.14036H18.3178Z"
						stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M10.0159 12.0101C11.8045 12.0101 13.2544 10.5549 13.2544 8.75992C13.2544 6.96491 11.8045 5.50977 10.0159 5.50977C8.22729 5.50977 6.77734 6.96491 6.77734 8.75992C6.77734 10.5549 8.22729 12.0101 10.0159 12.0101Z"
						stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M15.6855 5.14795H17.6587" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<span>Gallery</span>
			</button>

			<a href="#tour" class="slider-cta js-tour-cta" data-gallery-ignore style="text-decoration: none;">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.71762 18.7496C14.6703 18.7496 18.6852 14.7203 18.6852 9.74981C18.6852 4.77935 14.6703 0.75 9.71762 0.75C4.76494 0.75 0.75 4.77935 0.75 9.74981C0.75 14.7203 4.76494 18.7496 9.71762 18.7496Z"
						stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M13.3648 9.74985L7.49609 6.3501V13.1506L13.3648 9.74985Z" stroke="#2D2D35"
						stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<span>Video Tour</span>
			</a>

			<a href="#floorplan" class="slider-cta js-floorplan-cta" data-gallery-ignore>
				<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.917 16.1053L9.81722 20.087H0.75V0.75H20.0178V20.087H16.0504" stroke="#2D2D35"
						stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M0.75 10.418H9.81722" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M14.9648 10.418H20.018" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M9.81836 0.75V3.92077" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M9.81836 7.90137V13.2622" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<span>Floorplan</span>
			</a>
		</div>

		<?php if ( count($image_urls) > 1 ) : ?>
		<div class="swiper-pagination property-gallery__pagination" data-gallery-ignore></div>
		<?php endif; ?>

	</div>

	<?php if ( count($image_urls) > 1 ) : ?>
	<!-- PREV -->
	<button data-anim="fade" data-delay="0.75" class="property-gallery__nav property-gallery__nav--prev" type="button"
		aria-label="Previous image" data-gallery-ignore>
		<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)" fill="#2D2D35"
				fill-opacity="0.75" />
			<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#FAF8F4" stroke-width="2"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>

	<!-- NEXT -->
	<button data-anim="fade" data-delay="0.75" class="property-gallery__nav property-gallery__nav--next" type="button"
		aria-label="Next image" data-gallery-ignore>
		<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
			<path d="M18.584 36.5147L55.9024 36.5147" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
	</button>
	<?php endif; ?>

	<!-- =========================
         MODAL (UPDATED FOR GRID)
         ========================= -->
	<div class="property-gallery-modal" data-gallery-modal aria-hidden="true">
		<div class="property-gallery-modal__backdrop" data-gallery-modal-close></div>

		<div class="property-gallery-modal__panel" role="dialog" aria-modal="true" aria-label="Gallery">
			<button class="property-gallery-modal__close" type="button" aria-label="Close gallery"
				data-gallery-modal-close>
				<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="1.41421" y1="1" x2="29.0015" y2="28.5873" stroke="#2D2D35" stroke-width="2"
						stroke-linecap="round" />
					<line x1="29.002" y1="2.41958" x2="1.41469" y2="30.0068" stroke="#2D2D35" stroke-width="2"
						stroke-linecap="round" />
				</svg>
			</button>

			<div class="property-gallery-modal__layout property-gallery-modal__layout--fourup">

				<!-- LEFT: SIDEBAR (3 stacked) -->
				<?php if ( count($image_urls) > 1 ) : ?>
				<aside class="property-gallery-modal__side" data-property-gallery-modal-side>
					<?php foreach ( $image_urls as $src ) : ?>
					<button class="property-gallery-modal__side-item" type="button" data-modal-side-item>
						<img src="<?php echo esc_url($src); ?>" alt="<?php echo esc_attr(get_the_title()); ?>"
							loading="lazy" class="property-gallery-modal__side-img" />
					</button>
					<?php endforeach; ?>
				</aside>
				<?php endif; ?>

				<!-- RIGHT: MAIN -->
				<div class="swiper property-gallery-modal-swiper" data-property-gallery-modal-swiper>
					<div class="swiper-wrapper">
						<?php foreach ( $image_urls as $src ) : ?>
						<div class="swiper-slide">
							<img src="<?php echo esc_url($src); ?>" alt="<?php echo esc_attr(get_the_title()); ?>"
								loading="lazy" class="property-gallery-modal__img" />
						</div>
						<?php endforeach; ?>
					</div>

					<?php if ( count($image_urls) > 1 ) : ?>
					<button class="property-gallery-modal__nav property-gallery-modal__nav--prev" type="button"
						aria-label="Previous">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="37.1768" transform="rotate(-180 37.1768 37.1768)"
								fill="#2D2D35" fill-opacity="0.75" />
							<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg></button>
					<button class="property-gallery-modal__nav property-gallery-modal__nav--next" type="button"
						aria-label="Next">
						<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="37.1768" cy="37.1768" r="37.1768" fill="#2D2D35" fill-opacity="0.75" />
							<path d="M18.584 36.5147L55.9024 36.5147" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
							<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#FAF8F4" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg></button>
					<?php endif; ?>
				</div>

				<div class="modal__footer flex justify-between align-center" type="button">
					<button class="back flex align-center gap-8" type="button" data-gallery-modal-close>
						<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="10.5" cy="10.5" r="10.5" transform="rotate(-180 10.5 10.5)" fill="#C1D42F" />
							<path d="M15.752 10.687L5.21196 10.687" stroke="#2D2D35" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M8.91211 14.5039L5.15711 10.6869L8.91211 6.86988" stroke="#2D2D35"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<p>Back to listing</p>
					</button>

					<div class="property-gallery-modal__count" data-gallery-count>
						Showing 1 of <?php echo count($image_urls); ?>
					</div>


				</div>

			</div>

		</div>
	</div>
	<?php endif; ?>
</section>

<script>
document.addEventListener("DOMContentLoaded", () => {
	const tourCta = document.querySelector(".js-tour-cta");
	const floorplanCta = document.querySelector(".js-floorplan-cta");

	const tourSection = document.querySelector("#tour");
	const floorplanSection = document.querySelector("#floorplan");

	const hasVisibleContent = (el) => {
		if (!el) return false;
		const text = (el.textContent || "").trim();
		const hasMedia =
			el.querySelector("iframe, video, embed, object, img, a[href], source") !== null;
		return text.length > 0 || hasMedia;
	};

	if (tourCta && !hasVisibleContent(tourSection)) {
		tourCta.style.display = "none";
	}

	if (floorplanCta && !hasVisibleContent(floorplanSection)) {
		floorplanCta.style.display = "none";
	}
});
</script>
<script>
document.addEventListener("DOMContentLoaded", () => {
	const modal = document.querySelector("[data-gallery-modal]");
	const closeBtns = document.querySelectorAll("[data-gallery-modal-close]");
	const openTriggers = document.querySelectorAll("[data-open-gallery-modal]");
	const ignored = document.querySelectorAll("[data-gallery-ignore]");

	if (!modal || !openTriggers.length) return;

	const openModal = () => {
		modal.classList.add("is-open");
		modal.setAttribute("aria-hidden", "false");
		document.body.classList.add("gallery-modal-open");
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		modal.classList.remove("is-open");
		modal.setAttribute("aria-hidden", "true");
		document.body.classList.remove("gallery-modal-open");
		document.body.style.overflow = "";
	};

	ignored.forEach(el => {
		el.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	});

	openTriggers.forEach(trigger => {
		trigger.addEventListener("click", (e) => {
			openModal();
		});
	});

	closeBtns.forEach(btn => {
		btn.addEventListener("click", closeModal);
	});

	document.addEventListener("keydown", e => {
		if (e.key === "Escape" && modal.classList.contains("is-open")) {
			closeModal();
		}
	});
});
</script>