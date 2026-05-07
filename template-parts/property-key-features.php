<?php
/**
 * Get Property Hive-style key features for a property post.
 * Prefers individual _feature_0..N (actual text), falls back to concatenated/meta arrays.
 */
function ph_get_key_features(int $property_id): array
{
    $features = [];

    // 1) BEST SOURCE: _feature_0.._feature_99 (actual bullet strings)
    for ($i = 0; $i < 100; $i++) {
        $val = get_post_meta($property_id, "_feature_{$i}", true);

        if ($val === '' || $val === null) {
            if (!empty($features)) break; // stop after first gap once started
            continue;
        }

        $val = trim(wp_strip_all_tags((string) $val));

        // skip junk / numeric-only (e.g. "5")
        if ($val === '' || ctype_digit($val)) continue;

        $features[] = $val;
    }

    // 2) Fallback: _features_concatenated
    if (empty($features)) {
        $raw = get_post_meta($property_id, '_features_concatenated', true);
        if (is_string($raw) && trim($raw) !== '') {
            $parts = preg_split('/\r\n|\r|\n|\|/', $raw);
            foreach (($parts ?: []) as $p) {
                $p = trim(wp_strip_all_tags((string) $p));
                if ($p === '' || ctype_digit($p)) continue;
                $features[] = $p;
            }
        }
    }

    // 3) Last fallback: _features (might be array/serialized; sometimes not usable)
    if (empty($features)) {
        $raw = get_post_meta($property_id, '_features', true);

        if (is_array($raw)) {
            foreach ($raw as $item) {
                $item = trim(wp_strip_all_tags((string) $item));
                if ($item === '' || ctype_digit($item)) continue;
                $features[] = $item;
            }
        } elseif (is_string($raw) && trim($raw) !== '') {
            $parts = preg_split('/\r\n|\r|\n|\|/', $raw);
            foreach (($parts ?: []) as $p) {
                $p = trim(wp_strip_all_tags((string) $p));
                if ($p === '' || ctype_digit($p)) continue;
                $features[] = $p;
            }
        }
    }

    // De-dupe + reindex
    $features = array_values(array_unique($features));

    return $features;
}

$property_id = get_the_ID();
$features    = ph_get_key_features($property_id);

if (!empty($features)) : ?>
<section class="key-features text-dark-grey" data-anim="fade">
	<div class="title flex gap-16">
		<h2>Key Features</h2>
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)" fill="#C1D42F" />
			<path d="M22.0498 10.8267L22.0498 32.5708" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>

	<ul class="feature-list grid grid-cols-2">
		<?php foreach ($features as $feature) : ?>
		<li class="feature-item">
			<span class="feature-bullet" aria-hidden="true">
				<svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="1" y1="1" x2="14" y2="1" stroke="#C1D42F" stroke-width="2" stroke-linecap="round" />
				</svg>
			</span>
			<span class="feature-text">
				<?php echo esc_html($feature); ?>
			</span>
		</li>
		<?php endforeach; ?>
	</ul>
</section>
<?php endif; ?>