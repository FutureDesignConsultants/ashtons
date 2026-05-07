<?php
/**
 * Block template for Checklist Grid
 */

$block_classes = get_block_classes('checklist-grid');

$title = get_field('title');
$text = get_field('text');
$checklist = get_field('checklist');
$cta = get_field('cta');

$cta_url = $cta['url'] ?? '';
$cta_title = $cta['title'] ?? '';
$cta_target = $cta['target'] ?? '';

$downloadable_extensions = [
	'pdf',
	'doc',
	'docx',
	'xls',
	'xlsx',
	'ppt',
	'pptx',
	'zip',
	'jpg',
	'jpeg',
	'png',
	'webp',
	'svg',
	'txt',
	'csv',
];

$is_download = false;

if ($cta_url) {
	$path = wp_parse_url($cta_url, PHP_URL_PATH);
	$ext = strtolower(pathinfo($path ?? '', PATHINFO_EXTENSION));

	if (in_array($ext, $downloadable_extensions, true)) {
		$is_download = true;
	}
}
?>

<section class="block checklist-grid bg-off-white text-dark-grey <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<?php if ($title || $text) : ?>
		<div class="checklist-grid__intro">
			<?php if ($title) : ?>
			<h2 class="checklist-grid__title"><?php echo esc_html($title); ?></h2>
			<?php endif; ?>

			<?php if ($text) : ?>
			<div class="checklist-grid__text">
				<?php echo wpautop(esc_html($text)); ?>
			</div>
			<?php endif; ?>
		</div>
		<?php endif; ?>

		<?php if ($checklist) : ?>
		<div class="checklist-grid__items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-32">
			<?php foreach ($checklist as $item) : ?>
			<?php if (!empty($item['text'])) : ?>
			<div class="checklist-grid__item flex align-center gap-16 sm:gap-32">
				<svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_10529_18905)">
						<path
							d="M5.71077 15.3765C5.09141 14.7549 4.26124 14.4065 3.37344 14.3937C2.48827 14.3784 1.645 14.7064 1.00731 15.3101C-0.308667 16.5558 -0.338784 18.612 0.937908 19.8947L16.0055 35.0166C16.6222 35.6356 17.4825 35.9943 18.3677 35.9994H18.3926C19.2817 35.9994 20.1158 35.6624 20.7443 35.0498L51.0275 5.53223C52.3238 4.26867 52.3238 2.21123 51.0275 0.947671C49.7311 -0.31589 47.6203 -0.31589 46.324 0.947671L18.4279 28.1398L5.71077 15.3765Z"
							fill="#FF8D28" />
					</g>
					<defs>
						<clipPath id="clip0_10529_18905">
							<rect width="52" height="36" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<span class="checklist-grid__item-text">
					<?php echo esc_html($item['text']); ?>
				</span>
			</div>
			<?php endif; ?>
			<?php endforeach; ?>
		</div>
		<?php endif; ?>

		<?php if ($cta_url && $cta_title) : ?>
		<div class="checklist-grid__cta">
			<a class="cta-button square orange" href="<?php echo esc_url($cta_url); ?>"
				<?php echo $cta_target ? 'target="' . esc_attr($cta_target) . '"' : ''; ?>
				<?php echo $is_download ? 'download' : ''; ?>>
				<span><?php echo esc_html($cta_title); ?></span>
			</a>
		</div>
		<?php endif; ?>
	</div>
</section>