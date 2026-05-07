<?php
/**
 * The Template for displaying the mortgage calculator form and results
 *
 * Override this template by copying it to yourtheme/propertyhive/mortgage-calculator.php
 *
 * NOTE: For the calculation to still occur it's important that most classes, ids and input names remain unchanged
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$current_property_id = get_the_ID();
$price = 0;

// First try shortcode/template attr if available
if ( isset($atts['price']) && ! empty($atts['price']) ) {
	$raw_price = preg_replace('/[^\d.]/', '', (string) $atts['price']);
	$price = $raw_price !== '' ? (float) $raw_price : 0;
}

// Fallback to Property Hive price meta
if ( empty($price) ) {
	$meta_price = get_post_meta( $current_property_id, '_price_actual', true );

	if ( ! empty($meta_price) ) {
		$price = (float) $meta_price;
	}
}

// Final fallback
if ( empty($price) ) {
	$price = 500000;
}
?>

<div class="mortgage-calculator flex gap-16 justify-between align-end">
	<div class="mortgage-input-wrap flex align-end gap-16">

		<div>
			<label><?php echo esc_html( __( 'Purchase Price', 'propertyhive' ) ); ?> (&pound;)</label>
			<input type="text" name="purchase_price" value="<?php echo esc_attr( number_format($price) ); ?>"
				placeholder="e.g. 500,000" autocomplete="off">
		</div>

		<div>
			<label><?php echo esc_html( __( 'Deposit Amount', 'propertyhive' ) ); ?> (&pound;)</label>
			<input type="text" name="deposit_amount" value="<?php echo esc_attr( $deposit ); ?>"
				placeholder="e.g. 75,000">
		</div>

		<div>
			<label><?php echo esc_html( __( 'Interest Rate', 'propertyhive' ) ); ?> (%)</label>
			<input type="text" name="interest_rate" value="5.1">
		</div>

		<div>
			<label><?php echo esc_html( __( 'Repayment Period', 'propertyhive' ) ); ?>
				(<?php echo esc_html( __( 'Yrs', 'propertyhive' ) ); ?>)</label>
			<input type="text" name="repayment_period" value="25">
		</div>

		<!-- <button type="button"><span><?php echo esc_html( __( 'Calculate', 'propertyhive' ) ); ?></span></button> -->
	</div>

	<div class="mortgage-calculator-results" id="results">
		<label>Monthly Costs (approx):</label>
		<input type="text" name="repayment" value="" placeholder="" disabled>
	</div>
</div>
<script>
(function($) {
	function parseNumber(value) {
		if (!value) return 0;
		return parseFloat(String(value).replace(/,/g, '').replace(/[^\d.]/g, '')) || 0;
	}

	function formatNumber(value) {
		return new Intl.NumberFormat('en-GB', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value);
	}

	function calculateMortgage() {
		const $wrap = $('.mortgage-calculator');
		if (!$wrap.length) return;

		const price = parseNumber($wrap.find('input[name="purchase_price"]').val());
		const deposit = parseNumber($wrap.find('input[name="deposit_amount"]').val());
		const annualRate = parseNumber($wrap.find('input[name="interest_rate"]').val());
		const years = parseNumber($wrap.find('input[name="repayment_period"]').val());
		const $repayment = $wrap.find('input[name="repayment"]');

		if (!$repayment.length) return;

		const loanAmount = price - deposit;

		if (loanAmount <= 0 || years <= 0) {
			$repayment.val('');
			return;
		}

		const monthlyRate = (annualRate / 100) / 12;
		const numberOfPayments = years * 12;

		let monthlyPayment = 0;

		if (monthlyRate === 0) {
			monthlyPayment = loanAmount / numberOfPayments;
		} else {
			monthlyPayment =
				loanAmount *
				(monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
				(Math.pow(1 + monthlyRate, numberOfPayments) - 1);
		}

		$repayment.val(formatNumber(monthlyPayment));
		$wrap.find('.mortgage-calculator-results').show();
	}

	function addMortgagePoundSymbol() {
		const input = document.querySelector('.mortgage-calculator input[name="repayment"]');
		if (!input) return;

		// already done
		if (input.dataset.poundInjected === 'true') {
			const pound = input.parentNode.querySelector('.mortgage-pound');
			if (pound) {
				const styles = window.getComputedStyle(input);
				pound.style.fontFamily = styles.fontFamily;
				pound.style.fontSize = styles.fontSize;
				pound.style.fontWeight = styles.fontWeight;
				pound.style.lineHeight = styles.lineHeight;
				pound.style.color = styles.color;
				pound.style.letterSpacing = styles.letterSpacing;
				pound.style.textTransform = styles.textTransform;
				pound.style.fontStyle = styles.fontStyle;
			}
			return;
		}

		const styles = window.getComputedStyle(input);

		// wrap the input
		const wrapper = document.createElement('div');
		wrapper.style.position = 'relative';
		wrapper.style.display = 'inline-block';
		wrapper.style.width = styles.width;
		wrapper.className = 'mortgage-pound-wrap';

		input.parentNode.insertBefore(wrapper, input);
		wrapper.appendChild(input);

		// create pound sign
		const pound = document.createElement('span');
		pound.className = 'mortgage-pound';
		pound.textContent = '£';
		pound.style.position = 'absolute';
		pound.style.left = '0px';
		pound.style.top = '50%';
		pound.style.transform = 'translateY(-50%)';
		pound.style.pointerEvents = 'none';
		pound.style.zIndex = '2';
		pound.style.fontFamily = 'IvyJournal, serif';
		pound.style.fontSize = '32px';
		pound.style.fontWeight = '600';
		pound.style.lineHeight = '64px';
		pound.style.color = 'rgb(51, 51, 51)';
		pound.style.letterSpacing = 'normal';
		pound.style.textTransform = 'none';
		pound.style.fontStyle = 'normal';

		// copy input typography
		pound.style.fontFamily = styles.fontFamily;
		pound.style.fontSize = styles.fontSize;
		pound.style.fontWeight = styles.fontWeight;
		pound.style.lineHeight = styles.lineHeight;
		pound.style.color = styles.color;
		pound.style.letterSpacing = styles.letterSpacing;
		pound.style.textTransform = styles.textTransform;
		pound.style.fontStyle = styles.fontStyle;

		wrapper.appendChild(pound);

		// adjust input padding so text doesn't overlap the £
		const currentPaddingLeft = parseFloat(styles.paddingLeft) || 0;
		input.style.paddingLeft = (currentPaddingLeft + 18) + 'px';

		input.dataset.poundInjected = 'true';
	}

	$(document).ready(function() {
		addMortgagePoundSymbol();
		calculateMortgage();

		$('.mortgage-calculator').on('click', 'button', function(e) {
			e.preventDefault();
			calculateMortgage();
		});

		$('.mortgage-calculator').on(
			'input change',
			'input[name="purchase_price"], input[name="deposit_amount"], input[name="interest_rate"], input[name="repayment_period"]',
			function() {
				calculateMortgage();
			}
		);
	});

	$(window).on('load', function() {
		addMortgagePoundSymbol();
		calculateMortgage();
		setTimeout(function() {
			addMortgagePoundSymbol();
			calculateMortgage();
		}, 300);
	});
})(jQuery);
</script>