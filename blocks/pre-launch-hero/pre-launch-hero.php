
<?php
/**
* Block template for Pre-Launch Hero
*/

$block_classes = get_block_classes('pre-launch-hero');
$titleOverride = get_field('title_override');
$text = get_field('text');

?>

<section class="block pre-launch-hero <?php echo esc_attr($block_classes); ?> bg-dark-grey">
    	<div class="background-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1365" height="667" viewBox="0 0 1365 667" fill="none">
                <path d="M26.9492 -610.447C278.665 -449.38 178.739 -150.038 435.69 14.3791C866.705 290.175 1149.42 107.795 1436.47 291.473C1651.98 429.371 1665.62 663.665 1665.62 663.665" stroke="url(#paint0_linear_11730_10687)" stroke-width="100"/>
                <defs>
                    <linearGradient id="paint0_linear_11730_10687" x1="-55.5147" y1="-481.573" x2="1685.56" y2="632.499" gradientUnits="userSpaceOnUse">
                    <stop offset="0.288462" stop-color="#FAF8F4"/>
                    <stop offset="0.807692" stop-color="#FF2E69"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    <div class="wrap">
        <div class="grid grid-cols-12 gap-16 mar-btm-32">
            <div class="title">
                <h1 class="mar-btm-16"><?php echo $titleOverride ? esc_html($titleOverride) : esc_html(get_the_title()); ?></h1>
                <p><?php echo $text ?></p>
            </div>
        </div>
    </div>
</section>



