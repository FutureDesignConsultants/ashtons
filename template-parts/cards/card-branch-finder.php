<?php
$card_id = $args['card_id'];

$heading = get_field('heading', $card_id);
?>

<div class="card card--branch-finder bg-dark-grey text-off-white">



	<?php if ($heading) : ?>
	<h3><?php echo esc_html($heading); ?></h3>
	<?php endif; ?>



	<form class="branch-finder-form" action="#" method="get">
		<div class="branch-finder-form__field">


			<a href="/find-a-branch/" class="cta-button green square" target="_self">
				<span>Search</span>

			</a>


		</div>
	</form>




	<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/svg/branch-icon.svg'); ?>" alt=""
		aria-hidden="true">



</div>