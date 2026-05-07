<?php
get_header();

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

<section class="area-guide-hero">
	<div class="wrap">
		<div class="area-guide-hero__inner">
			<div class="area-guide-hero__title">
				<h2>
					<span data-anim="fade" data-duration="0.5" data-y="60">Area</span>
					<span data-anim="fade" data-duration="0.5" data-y="60" data-delay="0.2">Guides</span>
				</h2>
			</div>

			<div class="area-guide-hero__media">
				<!-- hero image / slider -->
			</div>
		</div>
	</div>
</section>

<section class="area-guide-content bg-off-white">
	<div class="wrap">

		<div class="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-32 align-start">

			<aside class="area-guide-sidebar">

				<a href="/area-guides" class="search-link flex align-center gap-8">
					<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="10.5" cy="10.5" r="10.5" transform="rotate(-180 10.5 10.5)" fill="#C1D42F" />
						<path d="M15.752 10.687L5.21196 10.687" stroke="#2D2D35" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M8.91211 14.5039L5.15711 10.6869L8.91211 6.86988" stroke="#2D2D35"
							stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>Back to Area Guides</span>
				</a>
				<hr>

				<h1 class="area-guide-sidebar__title text-dark-grey"><?php the_title(); ?></h1>

				<div class="area-guide-sidebar__intro">
					<?php the_field('intro_text'); ?>
				</div>

				<?php
$property_cta = get_field('property_cta');
$branch_cta   = get_field('branch_cta');

if ($property_cta || $branch_cta) :
?>
				<div class="area-guide-sidebar__actions flex flex-col gap-16">

					<?php if ($property_cta) : ?>
					<a href="<?php echo esc_url($property_cta['url']); ?>" class="cta-button square grey"
						target="<?php echo esc_attr($property_cta['target'] ?: '_self'); ?>">
						<span><?php echo esc_html($property_cta['title']); ?></span>
					</a>
					<?php endif; ?>

					<?php if ($branch_cta) : ?>
					<a href="<?php echo esc_url($branch_cta['url']); ?>" class="cta-button square green"
						target="<?php echo esc_attr($branch_cta['target'] ?: '_self'); ?>">
						<span><?php echo esc_html($branch_cta['title']); ?></span>
					</a>
					<?php endif; ?>

				</div>
				<?php endif; ?>
			</aside>

			<main class="area-guide-main">
				<?php get_template_part( 'template-parts/area-guides/area-guide', 'gallery' ); ?>
				<?php get_template_part( 'template-parts/area-guides/area-guide', 'details' ); ?>
				<?php get_template_part( 'template-parts/area-guides/area-guide', 'interest' ); ?>
				<?php get_template_part( 'template-parts/area-guides/area-guide', 'schools' ); ?>
			</main>


		</div>
	</div>
</section>

<section class="area-guide-footer">
	<svg class="ribbon" viewBox="0 0 1920 315" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M-86.475 49.9306C211.949 65.6372 277.49 245.917 582.121 261.95C1093.11 288.844 1244.28 77.3184 1584.59 95.2299C1840.09 108.677 1970.51 251.821 1970.51 251.821"
			stroke="url(#ribbonGradient-buy)" stroke-width="100"></path>
		<defs>
			<linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(-498.503192 0)">
				<stop offset="0" stop-color="#C1D42F"></stop>
				<stop offset="0.28" stop-color="#9FD76A"></stop>
				<stop offset="0.538462" stop-color="#56C9B8"></stop>
				<stop offset="0.78" stop-color="#96D78A"></stop>
				<stop offset="1" stop-color="#C1D42F"></stop>
			</linearGradient>
		</defs>
	</svg>
	<div class="wrap">

		<?php get_template_part( 'template-parts/area-guides/area-guide', 'local-properties' ); ?>
	</div>
</section>

<?php
    endwhile;
endif;

get_footer();