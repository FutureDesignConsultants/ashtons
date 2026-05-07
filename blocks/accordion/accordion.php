<?php
/**
 * Block template for Accordion
 */

$block_classes = get_block_classes('accordion');

$background_colour = get_field('background_colour') ?: 'green';

$bg_classes = [
	'green'  => 'bg-green-tint',
	'orange' => 'bg-orange-tint',
	'yellow' => 'bg-yellow-tint',
	'pink' => 'bg-pink-tint',
	'blue' => 'bg-blue-tint',
];


$bg_class = $bg_classes[$background_colour] ?? 'bg-green-tint';

$cta_classes = [
	'green'  => 'green',
	'grey'   => 'dark-grey',
	'blue'   => 'blue',
	'orange' => 'orange',
	'pink'   => 'pink',
	'blue'   => 'blue',
];

$cta_class = $cta_classes[$background_colour] ?? 'green';

$title = get_field('title');
$anchor_id               = get_field('anchor_id');


?>

<section class="block accordion text-dark-grey bg-off-white <?php echo esc_attr($block_classes); ?>"
	id="<?php echo ($anchor_id); ?>">
	<div class="wrap">
		<?php if ($title) : ?>
		<h2>
			<?php echo esc_html($title); ?>
		</h2>
		<?php endif; ?>

		<?php if (have_rows('accordion')) : ?>
		<div class="accordion__items grid grid-cols-12 gap-0 sm:gap-32 <?php echo esc_attr($bg_class); ?>"
			data-parallax-accordion>

			<?php while (have_rows('accordion')) : the_row(); 
				$title       = get_sub_field('title');
				$content     = get_sub_field('content');
				$display_cta = get_sub_field('display_cta');
				$cta         = get_sub_field('cta');
				$image_type  = get_sub_field('image_type') ?: 'no-image';
				$image       = get_sub_field('image');

				$display_table = get_sub_field('display_table');
$table = get_sub_field('table');

$content_classes = 'accordion__content';

if ($display_table) {
	$content_classes .= ' accordion__content--has-table';
}



				$image_type_class = '';
				if (in_array($image_type, ['image', 'icon'], true)) {
					$image_type_class = 'accordion__media--' . sanitize_html_class($image_type);
				}

				$has_media = ($image && in_array($image_type, ['image', 'icon'], true));
$item_class = $has_media ? 'has-media' : 'no-media';
			?>
			<div class="accordion__item <?php echo esc_attr($item_class); ?>">

				<?php if ($title) : ?>
				<div class="title-wrap flex justify-between">
					<h3 class="accordion__title">
						<?php echo esc_html($title); ?>
					</h3>
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

							<div class="accordion__content-wrap <?php echo esc_attr($content_classes); ?>">

								<?php if ($content) : ?>
								<div class="accordion__content">
									<?php echo wp_kses_post($content); ?>
								</div>
								<?php endif; ?>

								<?php
if ($display_table && $table) {
	get_template_part(
		'partials/accordion-table',
		null,
		[
			'table' => $table,
		]
	);
}
?>

								<?php if ($display_cta && $cta) : ?>
								<a class="cta-button square <?php echo esc_attr($cta_class); ?>"
									href="<?php echo esc_url($cta['url']); ?>" <?php if (!empty($cta['target'])) : ?>
									target="<?php echo esc_attr($cta['target']); ?>" <?php endif; ?>>
									<span><?php echo esc_html($cta['title']); ?></span>
								</a>
								<?php endif; ?>
							</div>
							<?php if ($image && in_array($image_type, ['image', 'icon'], true)) : ?>
							<div class="accordion__media <?php echo esc_attr($image_type_class); ?>">
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
	const accordions = document.querySelectorAll('.accordion');

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