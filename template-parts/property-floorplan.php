<section class="floorplan" id="floorplan" data-anim="fade">
	<div class="title flex gap-16">
		<h2>Floorplan</h2>
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)" fill="#C1D42F" />
			<path d="M22.0498 10.8267L22.0498 32.5708" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>

	<div class="property-floorplan">
		<?php
		$floorplans = get_post_meta( get_the_ID(), '_floorplan_urls', true );

		if ( is_string($floorplans) ) {
			$floorplans = maybe_unserialize($floorplans);
		}

		if ( ! empty($floorplans) && is_array($floorplans) ) {
			foreach ( $floorplans as $fp ) {
				$url = $fp['url'] ?? null;
				if ( ! $url ) continue;

				echo '<img class="floorplan-trigger" src="' . esc_url($url) . '" alt="Floorplan" loading="lazy" style="max-width:100%;cursor:pointer;" />';
			}
		}
		?>
	</div>
</section>

<!-- Modal -->
<div class="floorplan-modal" id="floorplanModal" aria-hidden="true">
	<div class="floorplan-modal__overlay"></div>

	<div class="floorplan-modal__content" role="dialog" aria-modal="true" aria-label="Floorplan image">
		<button type="button" class="floorplan-modal__close" id="floorplanModalClose" aria-label="Close modal">
			<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="1.41421" y1="1" x2="29.0015" y2="28.5873" stroke="#2D2D35" stroke-width="2"
					stroke-linecap="round" />
				<line x1="29.002" y1="2.41958" x2="1.41469" y2="30.0068" stroke="#2D2D35" stroke-width="2"
					stroke-linecap="round" />
			</svg>
		</button>

		<img id="floorplanModalImage" src="" alt="Floorplan enlarged" />
	</div>
</div>


<script>
document.addEventListener('DOMContentLoaded', function() {

	const modal = document.getElementById('floorplanModal');
	const modalImage = document.getElementById('floorplanModalImage');
	const closeBtn = document.getElementById('floorplanModalClose');
	const overlay = modal.querySelector('.floorplan-modal__overlay');
	const triggers = document.querySelectorAll('.floorplan-trigger');

	function openModal(src, alt = 'Floorplan enlarged') {
		modalImage.src = src;
		modalImage.alt = alt;

		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');

		document.body.classList.add('floorplan-modal-open');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');

		modalImage.src = '';

		document.body.classList.remove('floorplan-modal-open');
		document.body.style.overflow = '';
	}

	triggers.forEach(function(img) {
		img.addEventListener('click', function() {
			openModal(this.src, this.alt);
		});
	});

	closeBtn.addEventListener('click', closeModal);
	overlay.addEventListener('click', closeModal);

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && modal.classList.contains('is-open')) {
			closeModal();
		}
	});
});
</script>