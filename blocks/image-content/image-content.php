
<?php
/**
* Block template for Image Content
*/

$block_classes = get_block_classes('image-content');

$title = get_field('title');
$subtitle = get_field('subtitle');
$paragraph = get_field('paragraph_text');
$image = get_field('image');
$cta = get_field('cta');

?>

<section class="block image-content <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="grid grid-cols-1 gap-64 sm:grid-cols-2">
			<?php 
			if( !empty( $image ) ): ?>
				<div class="img-wrap">
					<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
				</div>
			<?php endif; ?>

			<div class="content text-white flex flex-col justify-between">
				<div class="title">
					<?php if ($subtitle): ?>
						<h3 class="mar-btm-8 sm-mar-btm-32"><?php echo esc_html($subtitle); ?></h3>
					<?php endif; ?>
					<?php if ($title): ?>
						<h2 class="mar-btm-16"><?php echo esc_html($title); ?></h2>
					<?php endif; ?>
				</div>
				<div class="text">
					<?php if ($paragraph): ?>
						<p><?php echo esc_html($paragraph); ?></p>
					<?php endif; ?>

					<?php 
						if ($cta):
							$url = esc_url($cta['url']);
							$title = esc_html($cta['title']);
							$target = $cta['target'] ? esc_attr($cta['target']) : '_self';
						?>
						<a href="<?php echo $url; ?>" class="cta-button black mar-btm-16 lg-mar-btm-32" target="<?php echo $target; ?>">
							<span class="cta-text"><?php echo $title; ?></span>
							<svg class="cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
							<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
					<?php endif; ?>
				</div>
			</div>

		</div>
    </div>
</section>



