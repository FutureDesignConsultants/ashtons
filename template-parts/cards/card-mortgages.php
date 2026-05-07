<?php
$card_id = $args['card_id'];

$heading = get_field('heading', $card_id);
$text    = get_field('text', $card_id);
$cta     = get_field('cta', $card_id);
?>

<div class="card card--mortgages bg-blue-tint text-dark-grey">
	<?php if ($heading) : ?>
	<div class="title-wrap">


		<h3><?php echo esc_html($heading); ?>



	</div>
	<?php endif; ?>

	<div class="flex content justify-between flex-col md:flex-row">
		<?php if ($text) : ?>
		<div class="card__text">
			<?php echo wp_kses_post($text); ?>
		</div>
		<?php endif; ?>
		<?php if ($cta) : ?>
		<a class="cta-button square blue" href="<?php echo esc_url($cta['url']); ?>">
			<span><?php echo esc_html($cta['title']); ?></span>


		</a>
		<?php endif; ?>
	</div>




</div>