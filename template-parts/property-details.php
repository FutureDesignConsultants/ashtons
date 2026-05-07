<section class="property-details text-dark-grey" data-anim="fade">
	<div class="title flex gap-16">
		<h2>Details</h2>
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)" fill="#C1D42F" />
			<path d="M22.0498 10.8267L22.0498 32.5708" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
	<div class="description">
		<?php
    $property_id = get_the_ID();

    // Primary: full description
    $desc = get_post_meta($property_id, '_descriptions_concatenated', true);

    // Fallback: first room/description block
    if (empty($desc)) {
      $desc = get_post_meta($property_id, '_room_description_0', true);
    }

    if (!empty($desc)) {
      // If it’s one long string without paragraphs, this will add <p> formatting
      $desc = wp_kses_post($desc);
      echo wpautop($desc);
    }
    ?>
	</div>
</section>