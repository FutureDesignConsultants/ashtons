<?php
/**
* Block template for Team Callout
*/

$block_classes = get_block_classes('team-callout');
$heading = get_field('heading');
$text = get_field('text');
$button = get_field('button');
?>

<section class="block team-callout <?php echo esc_attr($block_classes); ?> bg-off-white">
	<div class="wrap">
		<!-- <svg class="desktop" xmlns="http://www.w3.org/2000/svg" width="1677" height="543" viewBox="0 0 1677 543"
            fill="none">
            <path
                d="M1099.02 120.352C1099.02 120.352 993.019 139.852 1226.02 71.3518C1428.93 11.6972 1626.21 77.3518 1626.21 264.352C1626.21 411.352 1463.52 492.852 1257.52 492.852C678.519 492.852 744.519 71.3518 -74.9822 71.3518"
                stroke="url(#paint0_linear_9134_19439)" stroke-width="100" />
            <defs>
                <linearGradient id="paint0_linear_9134_19439" x1="675.616" y1="-183.148" x2="875.616" y2="492.852"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#faf8f4" />
                    <stop offset="0.25" stop-color="#faf8f4" />
                    <stop offset="1" stop-color="#c1d42f" />
                </linearGradient>
            </defs>
        </svg> -->


		<svg class="mobile" width="338" height="266" viewBox="0 0 338 266" fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M-21 240.477C115.283 240.095 352.642 191.069 306.448 6.05623"
				stroke="url(#paint0_linear_8488_9800)" stroke-width="50" />
			<defs>
				<linearGradient id="paint0_linear_8488_9800" x1="-141.21" y1="436.235" x2="170.618" y2="-63.3004"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#00BBD8" />
					<stop offset="1" stop-color="#C3D535" stop-opacity="0" />
				</linearGradient>
			</defs>

		</svg>


		<div class="inner-wrap grid grid-cols-12 gap-16">

			<svg class="desktop" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1745.4 651.2">
				<defs>
					<style>
					.st0 {
						fill: url(#linear-gradient2);
					}

					.st1 {
						fill: url(#linear-gradient1);
					}

					.st2 {
						fill: none;
						stroke: url(#linear-gradient);
						stroke-width: 100px;
					}
					</style>
					<linearGradient id="linear-gradient" x1="872.7" y1="822.4" x2="872.7" y2="145.8"
						gradientTransform="translate(0 747) scale(1 -1)" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c1d42f" stop-opacity="0" />
						<stop offset=".5" stop-color="#e0e997" />
						<stop offset="1" stop-color="#c1d42f" />
					</linearGradient>
					<linearGradient id="linear-gradient1" x1="0" y1="305.8" x2="838.4" y2="305.8"
						gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#faf8f4" />
						<stop offset="1" stop-color="#faf8f4" stop-opacity="0" />
					</linearGradient>
					<linearGradient id="linear-gradient2" x1="1176.1" y1="143.7" x2="1423" y2="143.7"
						gradientTransform="translate(-264.6 34) scale(1.2 1)" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#faf8f4" />
						<stop offset="1" stop-color="#faf8f4" stop-opacity="0" />
					</linearGradient>
				</defs>
				<path class="st2"
					d="M1159.6,225.5c69.4-28.5,147.2-55.2,225.2-64.3,60.2-7,120.5-3.5,177.3,17.6,46.4,17.6,87,50.2,110,94.5,28.3,53.4,31.6,119.8,6,174.7-68.9,139.9-249.4,159.8-390.1,151.7C784.3,562.8,785,182.5.6,172.8" />
				<rect class="st1" y="10.4" width="838.4" height="590.8" />
				<rect class="st0" x="1149.2" y="87.6" width="296.8" height="180.2"
					transform="translate(42.1 550.7) rotate(-24.3)" />
			</svg>

			<div class="left">
				<h2 class=""><?php echo $heading; ?></h2>
				<p class=""><?php echo $text; ?></p>
				<div class="button-wrap flex align-center">
					<a class="cta-button square green" href="<?php echo $button['url']; ?>"><span
							class="cta-text"><?php echo $button['title']; ?></span></a>
				</div>
			</div>

			<div class="right">
				<div class="img-group">
					<?php if ( have_rows('images') ) {
                    $count = 0;
                    while ( have_rows('images') ) : the_row() ;
                    $count++; 
                    $img = get_sub_field('image');
					$displayName = get_sub_field('display_name');
					$name = get_sub_field('name');
                    ?>

					<div class="img-wrapper img-wrapper-<?php echo $count; ?>" data-index="<?php echo $count; ?>">
						<?php if ( $displayName == 'true' && $count <= 4 ) : ?>
						<div class="name-wrapper">
							<div class="inner-wrap">
								<p><?php echo $name; ?></p>
								<?php if ( $count == 1 ) : ?>
								<svg class="line-1" width="50" height="66" viewBox="0 0 50 66" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M47.2686 64.9023C48.4589 65.5428 49.8019 64.5005 49.2879 63.1847C48.0618 60.0317 45.6307 57.2253 43.5062 54.6089C41.4233 52.0437 39.2461 49.5632 37.1334 47.0179C32.8465 41.8464 28.6506 36.6068 24.4547 31.3672C20.2588 26.1276 16.1936 20.7933 12.0904 15.4774C10.0769 12.8657 8.1329 10.2075 6.07974 7.62245C5.13532 6.43658 4.16942 5.27221 3.23493 4.0797C2.5079 3.14355 1.50766 2.2393 2.24926 1.06047C2.62585 0.46359 1.80291 -0.379584 1.27722 0.187741C-1.70336 3.41086 1.22176 7.41713 3.08007 10.3338C6.1407 15.1332 9.4727 19.7796 12.8311 24.3797C19.5296 33.5419 26.4961 42.4817 33.7752 51.1907C35.8215 53.6367 37.8331 56.1275 40.0034 58.4689C42.1588 60.7988 44.4521 63.3884 47.267 64.9106L47.2686 64.9023Z"
										fill="#2D2D35" />
								</svg>
								<?php elseif ( $count == 2 ) : ?>
								<svg class="line-2" xmlns="http://www.w3.org/2000/svg" width="52" height="35"
									viewBox="0 0 52 35" fill="none">
									<path
										d="M5.09207 26.9943C4.31909 27.7004 3.57178 28.4249 2.8105 29.1471C2.32806 29.6064 1.7677 30.0603 1.32849 30.5624C0.828016 31.1334 0.722524 31.6536 0.238698 32.2989C-0.448298 33.2266 0.454903 34.5972 1.59083 34.1718C2.61191 33.7923 3.3916 33.7105 4.36767 33.1661C5.4712 32.5421 6.58053 31.9263 7.68992 31.3104C9.78124 30.1582 11.7073 28.743 13.6838 27.4148C17.6427 24.7664 21.6601 22.1991 25.7243 19.6966C29.661 17.2739 33.5685 14.8106 37.5521 12.4528C41.7478 9.97871 46.271 7.87258 50.0322 4.76252C52.3232 2.8619 50.4669 -0.768408 47.5618 0.144868C43.0353 1.56272 38.9917 4.24756 34.927 6.66398C30.7128 9.16369 26.5081 11.6935 22.4497 14.4261C18.4967 17.0826 14.6022 19.8202 10.7604 22.6307C8.83661 24.0319 6.85561 25.3882 5.10604 26.9966L5.09207 26.9943Z"
										fill="#2D2D35" />
								</svg>
								<?php elseif ( $count == 3 ) : ?>
								<svg class="line-3" xmlns="http://www.w3.org/2000/svg" width="43" height="40"
									viewBox="0 0 43 40" fill="none">
									<path
										d="M7.66587 3.29796C6.82587 2.75796 5.97587 2.23796 5.13587 1.70796C4.59587 1.36796 4.04587 0.967961 3.47587 0.677961C2.83587 0.347961 2.32587 0.377964 1.61587 0.0879645C0.595873 -0.332035 -0.454127 0.837952 0.205873 1.77795C0.805873 2.62795 1.06587 3.32796 1.79587 4.09796C2.63587 4.96796 3.47587 5.83795 4.30587 6.71795C5.86587 8.36795 7.63587 9.80796 9.32587 11.318C12.7159 14.338 16.0459 17.428 19.3159 20.578C22.4959 23.628 25.7059 26.648 28.8159 29.758C32.1059 33.038 35.1259 36.708 38.8859 39.438C41.1859 41.098 44.0959 38.5179 42.5559 36.0579C40.1659 32.2179 36.7259 29.138 33.5259 25.948C30.2159 22.658 26.8759 19.378 23.3859 16.288C19.9959 13.278 16.5359 10.338 13.0259 7.46795C11.2759 6.02795 9.54587 4.52796 7.64587 3.28796L7.66587 3.29796Z"
										fill="#2D2D35" />
								</svg>
								<?php elseif ( $count == 4 ) : ?>
								<svg class="line-4" xmlns="http://www.w3.org/2000/svg" width="62" height="54"
									viewBox="0 0 62 54" fill="none">
									<path
										d="M59.4622 53.6465C60.762 54.0174 61.8507 52.7116 61.0669 51.5364C59.1941 48.7191 56.2185 46.4983 53.5831 44.3974C50.9992 42.3377 48.3414 40.3809 45.7327 38.3471C40.4379 34.2133 35.2174 29.9937 29.997 25.774C24.7765 21.5543 19.6634 17.2142 14.5171 12.9001C11.9911 10.7801 9.52306 8.59986 6.964 6.51433C5.78757 5.55818 4.59477 4.62763 3.42661 3.66287C2.516 2.90409 1.34534 2.23499 1.81734 0.924706C2.05738 0.261036 1.073 -0.386379 0.680971 0.280348C-1.54036 4.06691 2.17473 7.35395 4.61445 9.80509C8.63172 13.8378 12.8813 17.6631 17.1468 21.4374C25.6518 28.9528 34.3708 36.1937 43.3458 43.1421C45.8684 45.0932 48.3666 47.0955 50.988 48.918C53.5923 50.7323 56.3869 52.7708 59.4624 53.655L59.4622 53.6465Z"
										fill="#2D2D35" />
								</svg>
								<?php endif; ?>

							</div>
						</div>
						<?php endif; ?>
						<img src="<?php echo esc_url($img['url']); ?>" alt="<?php echo esc_attr($img['alt']); ?>"
							width="<?php echo esc_attr($img['width']); ?>"
							height="<?php echo esc_attr($img['height']); ?>" loading="eager" decoding="async">
					</div>
					<?php endwhile;
                }
                ?>
				</div>
			</div>

		</div>

	</div>
</section>

<script>
	document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".team-callout");
  if (!section) return;

  const group = section.querySelector(".img-group");
  if (!group) return;

  const allWrappers = Array.from(group.querySelectorAll(".img-wrapper"));
  const images = Array.from(group.querySelectorAll("img"));

  let ticking = false;

  function getVisibleWrappers() {
    return allWrappers.filter((el) => {
      const style = window.getComputedStyle(el);

      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        el.offsetWidth > 0 &&
        el.offsetHeight > 0
      );
    });
  }

  function updateParallax() {
    const visibleWrappers = getVisibleWrappers();

    if (!visibleWrappers.length) {
      ticking = false;
      return;
    }

    const rects = visibleWrappers.map((el) => el.getBoundingClientRect());

    const top = Math.min(...rects.map((r) => r.top));
    const bottom = Math.max(...rects.map((r) => r.bottom));
    const groupCenter = (top + bottom) / 2;

    const viewportCenter = window.innerHeight / 2;
    const offset = groupCenter - viewportCenter;

    const intensity = window.innerWidth < 768 ? 18 : 32;
    const parallaxY = (offset / viewportCenter) * intensity;

    group.style.transform = `translate3d(0, ${-parallaxY}px, 0)`;

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateParallax);
    }
  }

  function runInitialUpdates() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestUpdate();
      });
    });

    setTimeout(requestUpdate, 100);
    setTimeout(requestUpdate, 250);
    setTimeout(requestUpdate, 500);
  }

  window.addEventListener("load", runInitialUpdates);
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("orientationchange", requestUpdate);

  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", requestUpdate);
      img.addEventListener("error", requestUpdate);
    }
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      requestUpdate();
    });

    resizeObserver.observe(group);
    visibleParents(section).forEach((el) => resizeObserver.observe(el));
  }

  function visibleParents(el) {
    const parents = [];
    let current = el.parentElement;

    while (current && current !== document.body) {
      parents.push(current);
      current = current.parentElement;
    }

    return parents;
  }

  runInitialUpdates();
});
</script>