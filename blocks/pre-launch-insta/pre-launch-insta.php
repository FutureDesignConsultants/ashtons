
<?php
/**
* Block template for Pre Launch Insta
*/

$block_classes = get_block_classes('pre-launch-insta');


?>

<section class="block pre-launch-insta <?php echo esc_attr($block_classes); ?> bg-off-white">
    <div class="wrap">

        <div class="insta-accounts">

            <?php 
            // $args = array(
            //     'post_type'      => 'office',
            //     'posts_per_page' => -1,
            //     'post_status'    => 'publish'
            // );

            // $accounts = new WP_Query($args);
            ?>

            <div class="insta-inner-wrap">
                <p>Pre-Launch Listings From:</p>
                <select id="account-select">
                    
                    <?php
                        $accounts = array(
                            "Stockton Health" => 3,
                            "Newton" => 4,
                            "Padgate" => 5,
                            "Widnes" => 6,
                            "Warrington Lettings Department" => 7,
                            "St Helens Lettings" => 8,
                            "St Helens" => 9,
                            "Newton-Le-Willows" => 10,
                            "Leigh" => 11,
                            "Land and New Homes" => 12,
                            "Great Sankey" => 13,
                            "Eccleston" => 14,
                            "Culcheth" => 15,
                            "Ashton-In-Makerfield" => 16
                        )
                    ?>

                    <option value="2">All Branches</option>

                    <?php foreach($accounts as $name => $feed_id) : ?>

                        <option value="<?php echo esc_attr($feed_id); ?>">
                            <?php echo esc_html($name); ?>
                        </option>

                    <?php endforeach; ?>
                </select>
            </div>

            <div id="instagram-feed-container" class="insta-wrap">
                <?php echo do_shortcode('[instagram-feed feed=2]'); ?>
            </div>
        </div>
    </div>
</section>

<script>
    document.getElementById('account-select').addEventListener('change', function() {

        const feedID = this.value;

        fetch('/wp-admin/admin-ajax.php?action=load_instagram_feed&feed_id=' + feedID)
            .then(response => response.text())
            .then(html => {

                const container = document.getElementById('instagram-feed-container');

                container.innerHTML = html;

                // Reinitialize Smash Balloon feed
                if (typeof sbi_init === 'function') {
                    sbi_init();
                }

            });

    });
</script>



