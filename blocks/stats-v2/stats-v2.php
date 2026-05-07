<?php
/**
 * Block template for Stats V2
 */

$block_classes = get_block_classes('stats-v2');
$title = get_field('title');
$anchor_id = get_field('anchor_id');
$cta = get_field('cta');

$stats = get_field('stats');
$has_slider = !empty($stats) && count($stats) > 4;
?>

<section class="block stats-v2 bg-off-white <?php echo esc_attr($block_classes); ?>"
	id="<?php echo esc_attr($anchor_id); ?>">

	<div class="wrap">

		<?php if ($title) : ?>
		<h2 class="hero-title">
			<?php echo esc_html($title); ?>
		</h2>
		<?php endif; ?>

		<?php if (have_rows('stats')) : ?>

		<div class="<?php echo $has_slider ? 'swiper stats-swiper' : 'stats-grid'; ?>">

			<?php if ($has_slider) : ?>
			<div class="stats-swiper-nav">
				<button type="button" class="swiper-button-prev stats-swiper__prev" aria-label="Previous">
					<svg width="75" height="75" viewBox="0 0 75 75" fill="none">
						<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)"
							stroke="#2D2D35" />
						<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#2D2D35" stroke-width="2"
							stroke-linecap="round" />
						<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#2D2D35" stroke-width="2"
							stroke-linecap="round" />
					</svg>
				</button>

				<button type="button" class="swiper-button-next stats-swiper__next" aria-label="Next">
					<svg width="75" height="75" viewBox="0 0 75 75" fill="none">
						<circle cx="37.1768" cy="37.1768" r="36.6768" stroke="#2D2D35" />
						<path d="M18.584 36.5146H55.9024" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" />
						<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#2D2D35" stroke-width="2"
							stroke-linecap="round" />
					</svg>
				</button>
			</div>
			<?php endif; ?>

			<?php if ($has_slider) : ?>
			<div class="swiper-wrapper">
				<?php endif; ?>

				<?php
				$i = 0;
				while (have_rows('stats')) : the_row();

					$icon     = get_sub_field('icon');
					$value    = get_sub_field('value');
					$prefix   = get_sub_field('prefix');
					$suffix   = get_sub_field('suffix');
					$label    = get_sub_field('label');
					$decimals = get_sub_field('decimals');

					$decimals = ($decimals !== null && $decimals !== '') ? (int) $decimals : 0;

					// 🔑 Color cycle (1–4 looping)
					$color_pattern = [1, 2, 3, 4, 3, 2];
$color_index = $color_pattern[$i % count($color_pattern)];
$i++;
				?>

				<div class="<?php echo $has_slider ? 'swiper-slide' : ''; ?>">

					<div class="stat-item stat-item--color-<?php echo esc_attr($color_index); ?>">

						<?php if ($icon) : ?>
						<div class="stat-icon">
							<?php echo wp_get_attachment_image($icon['ID'], 'medium'); ?>
						</div>
						<?php endif; ?>

						<div class="stat-value">
							<div class="stat-wrap">
								<?php if ($prefix) : ?>
								<span class="stat-prefix"><?php echo esc_html($prefix); ?></span>
								<?php endif; ?>

								<span class="js-count-up" data-target="<?php echo esc_attr($value); ?>"
									data-decimals="<?php echo esc_attr($decimals); ?>">
									0
								</span>

								<?php if ($suffix) : ?>
								<span class="stat-suffix"><?php echo esc_html($suffix); ?></span>
								<?php endif; ?>
							</div>
							<?php if ($label) : ?>
							<p class="stat-label"><?php echo esc_html($label); ?></p>
							<?php endif; ?>
						</div>



					</div>

				</div>

				<?php endwhile; ?>

				<?php if ($has_slider) : ?>
			</div>
			<?php endif; ?>

		</div>

		<?php endif; ?>

		<?php if ($cta) : ?>
		<a class="cta-button square green" href="<?php echo esc_url($cta['url']); ?>"
			<?php echo !empty($cta['target']) ? 'target="' . esc_attr($cta['target']) . '"' : ''; ?>>
			<?php echo esc_html($cta['title']); ?>
		</a>
		<?php endif; ?>

	</div>
</section>


<script>
document.addEventListener("DOMContentLoaded", () => {

	const counters = document.querySelectorAll(".js-count-up");

	const formatNumber = (value, decimals) => {
		return Number(value).toLocaleString("en-GB", {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		});
	};

	const animateCounter = (el) => {
		const target = parseFloat(el.dataset.target);
		const decimals = parseInt(el.dataset.decimals || 0, 10);
		const duration = 1500;

		let startTime = null;

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp;

			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = target * progress;

			el.textContent = formatNumber(current, decimals);

			if (progress < 1) {
				requestAnimationFrame(step);
			} else {
				el.textContent = formatNumber(target, decimals);
			}
		};

		requestAnimationFrame(step);
	};

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {

			if (entry.isIntersecting) {
				animateCounter(entry.target);
				obs.unobserve(entry.target);
			}

		});
	}, {
		threshold: 0.4
	});

	counters.forEach(counter => {
		observer.observe(counter);
	});

});
</script>