<?php
/**
 * Block template for Secondary Hero
 */

$title       = get_field('title');
$wave_colour = get_field('wave_colour');
$icon        = get_field('icon');

$wave_svg = '';

if ( $wave_colour === 'orange' ) {
	$wave_svg = get_template_directory_uri() . '/assets/images/svg/orange-sub-wave.svg';
} elseif ( $wave_colour === 'green' ) {
	$wave_svg = get_template_directory_uri() . '/assets/images/svg/green-sub-wave.svg';
}
?>

<section class="block secondary-hero bg-dark-grey text-white">
	<?php if ( $wave_svg ) : ?>
	<div class="wave">
		<img src="<?php echo esc_url( $wave_svg ); ?>" alt="" aria-hidden="true">
	</div>
	<?php endif; ?>
	<div class="wrap">

		<div class="flex content-wrap">

			<?php if ( $title ) : ?>
			<h1 data-anim="fade" data-duration="1" data-y="60"><?php echo esc_html( $title ); ?></h1>
			<?php endif; ?>

			<?php if ( $icon ) : ?>
			<div class="icon">
				<img src="<?php echo esc_url( $icon['url'] ); ?>" alt="<?php echo esc_attr( $icon['alt'] ); ?>">
			</div>
			<?php endif; ?>

		</div>



	</div>
</section>