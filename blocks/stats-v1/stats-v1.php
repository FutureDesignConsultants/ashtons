<?php
/**
 * Block template for Stats V1
 */

$block_classes = get_block_classes('stats-v1');
$title = get_field('title');
$anchor_id               = get_field('anchor_id');

?>

<section class="block stats-v1 bg-off-white <?php echo esc_attr($block_classes); ?>" id="<?php echo ($anchor_id); ?>">
	<svg class="bg-ribbon" viewBox="0 0 1920 982" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M-288.276 930.722C-288.276 930.722 -12.0807 572.602 -324.153 793.618C-595.928 986.095 -322.359 984.963 -415.763 735.365C-489.187 539.156 -288.098 339.89 18.0614 225.32C878.578 -96.6986 991.022 502.605 2208.97 46.8285"
			stroke="url(#paint0_linear_10364_72300)" stroke-width="100" />
		<defs>
			<linearGradient id="paint0_linear_10364_72300" x1="1071.93" y1="859.593" x2="734.282" y2="-42.6988"
				gradientUnits="userSpaceOnUse">
				<stop offset="0.0673077" stop-color="#FF2E69" />
				<stop offset="0.528846" stop-color="#FCBBCA" />
				<stop offset="1" stop-color="#FF2E69" />
			</linearGradient>
		</defs>
	</svg>

	<div class="wrap">

		<?php if ($title) : ?>
		<h2 class="hero-title">
			<?php echo esc_html($title); ?>
		</h2>
		<?php endif; ?>

		<?php if (have_rows('stats')) : ?>
		<div class="stats-grid grid grid-cols-12">
			<?php while (have_rows('stats')) : the_row();

					$icon     = get_sub_field('icon');
					$value    = get_sub_field('value');
					$prefix   = get_sub_field('prefix');
					$suffix   = get_sub_field('suffix');
					$label    = get_sub_field('label');
					$decimals = get_sub_field('decimals');

					$decimals = ($decimals !== null && $decimals !== '') ? (int) $decimals : 0;
				?>

			<div class="stat-item">
				<?php if ($icon) : ?>
				<div class="stat-icon">
					<?php echo wp_get_attachment_image($icon['ID'], 'medium'); ?>
				</div>
				<?php endif; ?>

				<div class="stat-value">
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

			<?php endwhile; ?>
		</div>
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