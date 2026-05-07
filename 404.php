<?php get_header(); ?>

<section class="error-page bg-dark-grey text-white">
	<div class="wrap">
		<div class="content flex align-center justify-center flex-col gap-32 sm:gap-64">
			<h1>404</h1>

			<svg class="ribbon" width="520" height="362" data-anim="fade" data-duration="1" data-y="90"
				viewBox="0 0 520 362" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M101.5 359V306H2.71946e-07V258L73.5 2.99999H127.5L51 258H101.5V156.5H152.5V258H177V306H152.5V359H101.5ZM183.535 76.5C183.535 64.5 185.535 53.8333 189.535 44.5C193.868 35.1667 199.535 27.1667 206.535 20.5C213.535 13.8333 221.535 8.83332 230.535 5.49999C239.868 1.83331 249.535 -2.71797e-05 259.535 -2.71797e-05C269.535 -2.71797e-05 279.035 1.83331 288.035 5.49999C297.369 8.83332 305.535 13.8333 312.535 20.5C319.535 27.1667 325.035 35.1667 329.035 44.5C333.369 53.8333 335.535 64.5 335.535 76.5V285.5C335.535 297.5 333.369 308.167 329.035 317.5C325.035 326.833 319.535 334.833 312.535 341.5C305.535 348.167 297.369 353.333 288.035 357C279.035 360.333 269.535 362 259.535 362C249.535 362 239.868 360.333 230.535 357C221.535 353.333 213.535 348.167 206.535 341.5C199.535 334.833 193.868 326.833 189.535 317.5C185.535 308.167 183.535 297.5 183.535 285.5V76.5ZM234.535 285.5C234.535 292.833 236.868 299 241.535 304C246.202 308.667 252.202 311 259.535 311C266.868 311 272.868 308.667 277.535 304C282.202 299 284.535 292.833 284.535 285.5V76.5C284.535 69.1667 282.202 63.1667 277.535 58.5C272.868 53.5 266.868 51 259.535 51C252.202 51 246.202 53.5 241.535 58.5C236.868 63.1667 234.535 69.1667 234.535 76.5V285.5ZM443.57 359V306H342.07V258L415.57 2.99999H469.57L393.07 258H443.57V156.5H494.57V258H519.07V306H494.57V359H443.57Z"
					fill="url(#ribbonGradient-buy)" />
				<defs>
					<linearGradient id="ribbonGradient-buy" x1="-8" y1="203" x2="2059" y2="203"
						gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
						<stop offset="0" stop-color="#C1D42F" />
						<stop offset="0.28" stop-color="#9FD76A" />
						<stop offset="0.538462" stop-color="#56C9B8" />
						<stop offset="0.78" stop-color="#96D78A" />
						<stop offset="1" stop-color="#C1D42F" />
					</linearGradient>
				</defs>
			</svg>


			<p data-anim="fade" data-duration="1" data-y="90" data-delay="0.3">Woops! <br>The page you are looking for
				doesn't exist or has been moved.</p>


			<a data-anim="fade" data-duration="1" data-delay="0.3" class="cta-button square green"
				href="<?php echo esc_url(home_url('/')); ?>">
				<span>Back to home</span>
			</a>

		</div>
</section>


<?php get_footer(); ?>