<?php
/**
* Block template for CTA Cards
*/

$block_classes = get_block_classes('cta-cards');


?>

<section class="block cta-cards bg-off-white <?php echo esc_attr($block_classes); ?>">
	<div class="wrap">
		<?php
$selected_cards = get_field('cards');
?>

		<?php if ($selected_cards) : ?>
		<div class="cards-grid grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-32">
			<?php foreach ($selected_cards as $card_post) : 
			$card_id = is_object($card_post) ? $card_post->ID : $card_post;
			$card_type = get_field('card_type', $card_id);

			get_template_part('template-parts/cards/card', $card_type, [
				'card_id' => $card_id,
			]);
		endforeach; ?>
		</div>
		<?php endif; ?>
	</div>
</section>