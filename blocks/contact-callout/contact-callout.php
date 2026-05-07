
<?php
/**
 * Block template for Contact Callout
 */

$block_classes = get_block_classes('contact-callout');
$display_type = get_field('contact_display_type');
$subtitle = get_field('subtitle');
$title = get_field('title');
$email = get_field('email_address', 'option'); 
$form_shortcode = get_field('form_shortcode'); 
?>

<section class="block contact-callout <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
		<?php if ($subtitle): ?>
				<h3 class="mar-btm-32"><?php echo esc_html($subtitle); ?></h3>
			<?php endif; ?>

			<?php if ($title): ?>
				<h2 class="mar-btm-32"><?php echo nl2br(esc_html($title)); ?></h2>
			<?php endif; ?>

        <?php if ($display_type === 'email' && $email): ?>
            <p class="contact-email">
                <a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
            </p>

        <?php elseif ($display_type === 'form' && $form_shortcode): ?>
            <div class="contact-form">
                <?php echo do_shortcode($form_shortcode); ?>
            </div>

        <?php else: ?>
            <p class="contact-message">No contact method selected or missing data.</p>
        <?php endif; ?>
    </div>
</section>




