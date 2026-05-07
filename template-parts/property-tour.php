<?php
$property_id = get_the_ID();

// Collect virtual tour URLs stored as _virtual_tour_0, _virtual_tour_1, ...
$urls = [];
for ($i = 0; $i < 20; $i++) {
  $u = get_post_meta($property_id, "_virtual_tour_{$i}", true);
  if (is_string($u) && filter_var(trim($u), FILTER_VALIDATE_URL)) {
    $urls[] = trim($u);
  } elseif (!empty($urls)) {
    // Stop after first gap once we've started finding items
    break;
  }
}

if (!empty($urls)) :
  // Use the first tour as the main embed
  $url = $urls[0];
?>
<section class="property-tour text-dark-grey" id="tour" data-anim="fade">
	<div class="title flex gap-16">
		<h2>Video Tour</h2>
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="21.6616" cy="21.6616" r="21.6616" transform="rotate(90 21.6616 21.6616)" fill="#C1D42F" />
			<path d="M22.0498 10.8267L22.0498 32.5708" stroke="#2D2D35" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round" />
			<path d="M29.9228 24.9375L22.0483 32.6841L14.1738 24.9375" stroke="#2D2D35" stroke-width="1.5"
				stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>

	<div class="video-embed">
		<?php
$embed = wp_oembed_get($url);

if ($embed) {
  // Add enablejsapi=1 to YouTube embeds so we can pause the video with JS
  $embed = preg_replace(
    '/src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)(.*?)"/',
    'src="https://www.youtube.com/embed/$1?enablejsapi=1&rel=0"',
    $embed
  );

  echo $embed;
} else {
  ?>
		<iframe src="<?php echo esc_url($url); ?>" loading="lazy"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen style="width:100%; aspect-ratio:16/9; border:0;">
		</iframe>
		<?php
}
?>
	</div>
</section>
<?php endif; ?>

<script src="https://www.youtube.com/iframe_api"></script>
<script>
(() => {
	let player = null;
	let wasFullscreen = false;

	const section = document.querySelector('.property-tour');
	const iframe = document.querySelector('.property-tour iframe');

	if (!section || !iframe) return;

	function isYouTubeIframe(src) {
		return src && src.includes('youtube.com/embed/');
	}

	function getFullscreenElement() {
		return (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.msFullscreenElement ||
			null
		);
	}

	function keepSectionVisible() {
		section.scrollIntoView({
			behavior: 'auto',
			block: 'start'
		});
	}

	function pauseVideo() {
		try {
			if (player && typeof player.pauseVideo === 'function') {
				player.pauseVideo();
			}
		} catch (err) {}
	}

	function handleFullscreenChange() {
		const fsEl = getFullscreenElement();

		if (fsEl) {
			wasFullscreen = true;
			return;
		}

		if (wasFullscreen) {
			setTimeout(() => {
				pauseVideo();
				keepSectionVisible();
			}, 100);

			wasFullscreen = false;
		}
	}

	document.addEventListener('fullscreenchange', handleFullscreenChange);
	document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
	document.addEventListener('msfullscreenchange', handleFullscreenChange);

	// YouTube API setup
	if (isYouTubeIframe(iframe.src)) {
		window.onYouTubeIframeAPIReady = function() {
			player = new YT.Player(iframe, {
				events: {
					onReady: function() {}
				}
			});
		};

		// If API already loaded for some reason
		if (window.YT && window.YT.Player) {
			player = new YT.Player(iframe, {
				events: {
					onReady: function() {}
				}
			});
		}
	}
})();
</script>