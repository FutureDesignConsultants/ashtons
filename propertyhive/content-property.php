<?php
if ( ! defined( 'ABSPATH' ) ) exit;

global $property, $propertyhive_loop;

if ( empty( $propertyhive_loop['loop'] ) ) $propertyhive_loop['loop'] = 0;
if ( empty( $propertyhive_loop['columns'] ) ) $propertyhive_loop['columns'] = apply_filters( 'loop_search_results_columns', 1 );
if ( ! $property ) return;

++$propertyhive_loop['loop'];

$classes = array('clear');
if ( 0 == ( $propertyhive_loop['loop'] - 1 ) % $propertyhive_loop['columns'] || 1 == $propertyhive_loop['columns'] ) $classes[] = 'first';
if ( 0 == $propertyhive_loop['loop'] % $propertyhive_loop['columns'] ) $classes[] = 'last';
if ( $property->featured === 'yes' ) $classes[] = 'featured';

$partial = locate_template('partials/card.php');
?>
<li <?php post_class( $classes ); ?>>
  <?php
    if ( $partial ) {
      // Make variables available inside the partial
      include $partial;
    } else {
      echo '<!-- Missing partials/propertyhive/card.php -->';
    }
  ?>
</li>
