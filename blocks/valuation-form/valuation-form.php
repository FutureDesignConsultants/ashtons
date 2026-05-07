<?php
/**
* Block template for Valuation Form
*/

$block_classes = get_block_classes('valuation-form');


?>

<section class="block valuation-form <?php echo esc_attr($block_classes); ?> bg-off-white">
	<div class="wrap flex align-center justify-center">
		<div class="form-wrap">
			<div class="title">
				<h1>
					Achieve the best price for
					<br /><span id="valuationLocation"></span><br />
					WITH ASHTONS
				</h1>

				<p>Tell us a little about your home and time that suits you. If you want us to come out sooner, contact
					your local office and we will do our best to fit you in.</p>
			</div>
			<?php echo do_shortcode('[gravityform id="5" title="false"]'); ?>
		</div>
	</div>
</section>