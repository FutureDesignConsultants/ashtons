<?php
if ( ! defined( 'ABSPATH' ) ) exit;

global $wp_query;

$max_num_pages = ! empty($max_num_pages) ? (int) $max_num_pages : (int) ($wp_query->max_num_pages ?? 0);

$total    = (int) ($wp_query->found_posts ?? 0);
$per_page = (int) ($wp_query->get('posts_per_page') ?: get_option('posts_per_page'));
$paged    = max(1, (int) get_query_var('paged'));

$first = $total ? (($paged - 1) * $per_page) + 1 : 0;
$last  = $total ? min($total, $paged * $per_page) : 0;
$label = ($total === 1) ? 'property' : 'properties';

$prev_icon = '<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="37.1768" cy="37.1768" r="36.6768" transform="rotate(-180 37.1768 37.1768)" stroke="#2D2D35"/>
<path d="M55.7695 37.8389L18.4512 37.8389" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.5586 51.3535L18.2635 37.8388L31.5586 24.3242" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>';
$next_icon = '<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="37.1768" cy="37.1768" r="37.1768" stroke="#2D2D35"/>
<path d="M18.584 36.5146H55.9024" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.7949 23L56.09 36.5147L42.7949 50.0294" stroke="#2D2D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

';

$links = [];
if ( $max_num_pages > 1 ) {
  $links = paginate_links([
    'base'      => esc_url_raw( str_replace( 999999999, '%#%', get_pagenum_link( 999999999, false ) ) ),
    'format'    => '',
    'current'   => $paged,
    'total'     => $max_num_pages,
    'prev_text' => $prev_icon,
    'next_text' => $next_icon,
    'type'      => 'array',
    'end_size'  => 1,
    'mid_size'  => 1,
  ]);
}

$prev_link = '';
$next_link = '';

if ( is_array($links) ) {
  foreach ( $links as $html ) {
    if ( strpos($html, 'prev page-numbers') !== false ) $prev_link = $html;
    if ( strpos($html, 'next page-numbers') !== false ) $next_link = $html;
  }
}
?>

<div class="propertyhive-pagination two">


  <div class="propertyhive-pagination__controls" aria-label="Pagination">

    <!-- PREV -->
    <div class="propertyhive-pagination__prev">
      <?php if ( $paged > 1 && $prev_link ) : ?>
        <?php echo $prev_link; ?>
      <?php else : ?>
        <span class="page-numbers prev is-disabled" aria-disabled="true">
          <?php echo $prev_icon; ?>
        </span>
      <?php endif; ?>
    </div>

	<div class="propertyhive-pagination__meta" aria-live="polite">
    <?php if ( $total > 0 ) : ?>
      <?php echo esc_html("Showing {$first}–{$last} of {$total} {$label}"); ?>
    <?php else : ?>
      <?php echo esc_html("Showing 0 {$label}"); ?>
    <?php endif; ?>
  </div>

    <!-- NEXT -->
    <div class="propertyhive-pagination__next">
      <?php if ( $paged < $max_num_pages && $next_link ) : ?>
        <?php echo $next_link; ?>
      <?php else : ?>
        <span class="page-numbers next is-disabled" aria-disabled="true">
          <?php echo $next_icon; ?>
        </span>
      <?php endif; ?>
    </div>

  </div>

</div>
