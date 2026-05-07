
<?php
/**
* Block template for Case Study Overview
*/

$block_classes = get_block_classes('case-study-overview');


?>

<section class="block case-study-overview <?php echo esc_attr($block_classes); ?>">
    <div class="wrap">
        <div class="facet-toggle-wrapper pad-block-32 flex flex-col gap-24 align-center md:flex-row">
			<button id="toggle-facet" class="facet-toggle-btn">
				Filter
				<svg
					id="facet-toggle-icon"
					class="facet-icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="16"
					height="16"
				>
					<path d="M12 5v14M5 12h14" />
				</svg>
			</button>

			<div id="facet-panel" class="facet-panel hidden">
				<?php echo do_shortcode('[facetwp facet="case_study_category" operator="or" preserve_filter_choices="true"]'); ?>

			</div>
		</div>


        <?php echo do_shortcode('[facetwp template="case_studies"]'); ?>
    </div>
</section>




