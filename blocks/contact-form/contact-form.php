
<?php
/**
* Block template for Contact Form
*/

$block_classes = get_block_classes('contact-form');

$title = get_field('title');
$subtitle = get_field('subtitle');
$contact_details = get_field('contact_details');
$form_shortcode = get_field('form_shortcode');

$email = get_field('email_address', 'option'); 
$address = get_field('address', 'option');
$phone = get_field('phone_number', 'option'); 

?>

<section class="block contact-form <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<div class="w-100">
			<?php if ($subtitle): ?>
				<h3 class="mar-btm-32"><?php echo esc_html($subtitle); ?></h3>
			<?php endif; ?>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="title">
				<?php if ($title): ?>
					<h2 class="mar-btm-32"><?php echo esc_html($title); ?></h2>
				<?php endif; ?>
				<?php if ($contact_details): ?>
					<div class="contact-details flex flex-col gap-16">
						<?php if ($address): ?>
							<p class="mar-btm-64"><?php echo nl2br(esc_html($address)); ?></p>
						<?php endif; ?>
						<?php if ($email): ?>
							<a class="underline" href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
						<?php endif; ?>
						<?php if ($phone): ?>
							<a class="underline" href="tel:<?php echo esc_attr($phone); ?>"><?php echo esc_html($phone); ?></a>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>
			<div class="form">
				<?php echo do_shortcode('[gravityform id="1" title="true" ajax="true"]'); ?>
			</div>
		</div>
    </div>
</section>



