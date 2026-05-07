<?php
/**
 * Block template for History Accordion
 */

$block_classes = get_block_classes('history-accordion');

$anchor_id               = get_field('anchor_id');


?>

<section class="block history-accordion text-dark-grey bg-off-white <?php echo esc_attr($block_classes); ?>"
	id="<?php echo ($anchor_id); ?>">
	<div class="wrap">

		<?php if (have_rows('accordion')) : ?>
		<div class="accordion__items grid grid-cols-1 sm:grid-cols-12 sm:gap-32 gap-0 bg-green-tint"
			data-parallax-accordion>

			<?php while (have_rows('accordion')) : the_row(); 
					$year = get_sub_field('year');
					$title = get_sub_field('title');
					$content = get_sub_field('content');
					$image = get_sub_field('image');

					$has_media = !empty($image);
					$item_class = $has_media ? 'has-media' : 'no-media';
				?>
			<div class="accordion__item <?php echo esc_attr($item_class); ?>">

				<?php if ($year || $title) : ?>
				<div class="title-wrap grid grid-cols-12">
					<h3 class="accordion__title">
						<?php echo esc_html($year); ?>
					</h3>
					<div class="title">
						<?php echo esc_html($title); ?>
					</div>
					<button>
						<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="23.3516" cy="23.3516" r="22.8516" fill="transparent" stroke="#2D2D35" />
							<path d="M32.808 19.3245L23.4219 27.8717L14.0357 19.3245" stroke="#2D2D35" />
						</svg>
					</button>
				</div>
				<?php endif; ?>

				<div class="accordion__panel">
					<div class="accordion__panel-inner">
						<div class="accordion__master-wrap">

							<div class="accordion__content-wrap">
								<?php if ($content) : ?>
								<div class="accordion__content">
									<?php echo wp_kses_post($content); ?>
								</div>
								<?php endif; ?>
							</div>

							<?php if ($image) : ?>
							<div class="accordion__media accordion__media--image">
								<?php echo wp_get_attachment_image($image['ID'], 'full', false, ['class' => 'accordion__media-image']); ?>
							</div>
							<?php endif; ?>

						</div>
					</div>
				</div>

			</div>
			<?php endwhile; ?>

		</div>
		<?php endif; ?>

	</div>
</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.history-accordion');

	accordions.forEach((accordion) => {
		const items = accordion.querySelectorAll('.accordion__item');

		if (!items.length) return;

		const closeItem = (item) => {
			const button = item.querySelector('button');
			item.classList.remove('is-open');

			if (button) {
				button.setAttribute('aria-expanded', 'false');
			}
		};

		const openItem = (item) => {
			const button = item.querySelector('button');
			item.classList.add('is-open');

			if (button) {
				button.setAttribute('aria-expanded', 'true');
			}
		};

		const toggleItem = (item) => {
			const isOpen = item.classList.contains('is-open');

			items.forEach((otherItem) => {
				if (otherItem !== item) {
					closeItem(otherItem);
				}
			});

			if (isOpen) {
				closeItem(item);
			} else {
				openItem(item);
			}
		};

		items.forEach((item, index) => {
			const button = item.querySelector('button');

			if (button) {
				button.setAttribute('type', 'button');
				button.setAttribute('aria-expanded', 'false');
			}

			item.addEventListener('click', (event) => {
				if (
					event.target.closest('a') ||
					event.target.closest('.cta-button') ||
					event.target.closest('button')
				) {
					return;
				}

				toggleItem(item);
			});

			if (button) {
				button.addEventListener('click', (event) => {
					event.preventDefault();
					event.stopPropagation();
					toggleItem(item);
				});
			}

			if (index === 0) {
				openItem(item);
			}
		});
	});
});
</script>