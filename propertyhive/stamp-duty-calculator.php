<div class="stamp-duty-calculator">

	<label><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
	<div class="flex gap-16 input-wrap">
		<?php
$current_property_id = get_the_ID();
$price = 0;

if ( isset($atts['price']) && ! empty($atts['price']) ) {
	$raw_price = preg_replace('/[^\d.]/', '', (string) $atts['price']);
	$price = $raw_price !== '' ? (float) $raw_price : 0;
}

if ( empty($price) ) {
	$meta_price = get_post_meta( $current_property_id, '_price_actual', true );

	if ( ! empty($meta_price) ) {
		$price = (float) $meta_price;
	}
}

if ( empty($price) ) {
	$meta_price = get_post_meta( $current_property_id, '_price', true );

	if ( ! empty($meta_price) ) {
		$price = (float) $meta_price;
	}
}

if ( empty($price) ) {
	$price = 500000;
}
?>

		<input type="text" name="purchase_price" value="<?php echo esc_attr( number_format($price) ); ?>"
			placeholder="500,000" autocomplete="off" />


		<select id="buyer_type">
			<option value="standard"><?php echo __( 'Standard Purchase', 'propertyhive' ); ?></option>
			<option value="ftb"><?php echo __( 'First Time Buyer', 'propertyhive' ); ?></option>
			<option value="btl"><?php echo __( 'Buy-to-let / Second Home', 'propertyhive' ); ?></option>
			<option value="overseas"><?php echo __( 'Non-UK Resident', 'propertyhive' ); ?></option>
		</select>

		<!-- Hidden inputs required for Property Hive JS -->
		<input type="hidden" name="ftb" value="0">
		<input type="hidden" name="btl_second" value="0">
		<input type="hidden" name="buyer_overseas" value="0">

		<!-- <button type="button"><span>Calculate</span></button> -->
		<svg width="103" height="123" viewBox="0 0 123 143" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_9134_19876)">
				<path
					d="M120.7 39.3658C116.482 35.8937 81.1373 9.64995 67.3109 1.6044C63.6686 -0.502767 59.9304 -0.526712 55.8328 1.53256C42.6294 8.23719 6.27817 36.1332 2.32434 39.3658C-0.11984 41.3532 -0.694943 44.7295 0.910551 47.3874C1.70132 48.6565 2.56397 49.8537 3.49851 50.9313C4.69664 52.3201 6.37402 53.0145 8.09933 53.0145C9.0818 53.0145 10.0882 52.7271 11.0228 52.2482C9.24953 80.4316 8.50669 120.683 10.256 131.77C10.9509 136.2 14.1379 139.576 18.547 140.558C26.239 142.282 43.8755 143 61.3921 143C78.9088 143 95.9222 142.282 103.231 141.132C107.616 140.462 110.923 137.086 111.666 132.584C113.463 121.928 114.086 80.9584 112.984 52.7032C115.332 53.4455 117.896 52.8229 119.525 50.9313C120.46 49.8537 121.323 48.6565 122.113 47.3634C123.719 44.7295 123.144 41.3532 120.7 39.3658ZM106.945 131.794C106.538 134.26 104.812 136.056 102.488 136.415C88.4219 138.618 34.1467 139.121 19.5774 135.888C17.0613 135.338 15.384 133.566 14.9766 131.028C13.2752 120.061 14.1379 76.8398 16.0309 49.0156L108.071 49.8777C109.293 77.4145 108.718 121.21 106.945 131.794ZM79.436 28.7342C82.6949 31.0808 86.0017 33.4753 89.2367 35.8459L35.2489 34.8162C38.3401 32.5654 41.5032 30.2667 44.5944 28.0637L79.436 28.7342ZM47.8293 25.7171C52.6458 22.2929 57.0309 19.228 60.3378 17.025C60.8889 16.6659 61.464 16.4503 61.6078 16.4503C61.7995 16.4503 62.0152 16.594 62.5184 16.9292L62.6861 17.025C66.4243 19.5153 71.073 22.7479 75.9854 26.2678L47.8293 25.7171ZM92.5914 38.2883C94.6762 39.8447 96.737 41.3293 98.654 42.742C99.7562 43.5562 100.787 44.2985 101.769 45.0408L22.3091 44.2745C23.3156 43.5322 24.3699 42.766 25.4962 41.9519C27.557 40.4433 29.7615 38.815 32.038 37.1628L92.5914 38.2883ZM118.016 44.8731C117.369 45.9507 116.674 46.9324 115.907 47.7944C115.38 48.3931 114.565 48.2973 114.014 47.9381C113.631 47.6987 112.984 47.2437 112.121 46.6211C111.905 46.4056 111.666 46.238 111.378 46.0943C109.054 44.4421 105.555 41.88 101.482 38.8869C90.2671 30.6498 74.931 19.3956 65.322 13.0501L65.1782 12.9304C64.4114 12.4276 63.4529 11.7811 62.0152 11.6613C60.2419 11.5177 58.3968 12.5712 57.7019 13.0501C49.2671 18.6054 33.8831 29.8596 22.6686 38.0967C16.1028 42.8857 10.4237 47.0282 9.00991 47.9381C8.45877 48.3212 7.64404 48.3931 7.11686 47.7944C6.35006 46.9324 5.65514 45.9507 5.00815 44.8971C4.64872 44.2985 4.79249 43.5322 5.36759 43.0533C9.24953 39.8686 45.1215 12.3557 58.0134 5.79479C59.3314 5.12433 60.5295 4.78909 61.6557 4.78909C62.782 4.78909 63.8124 5.10038 64.8907 5.7469C78.5494 13.6727 113.487 39.6292 117.656 43.0533C118.231 43.5322 118.375 44.2985 118.016 44.8731Z"
					fill="#2D2D35" />
				<path
					d="M104.093 59.6473C103.757 56.5105 101.169 53.9484 97.7664 53.4455C84.0119 51.4342 36.4222 51.3623 26.286 52.6075C22.8594 53.0145 20.2954 55.4569 19.912 58.6895C19.2889 63.8138 19.1212 68.9619 19.4567 74.0144C19.6723 77.4385 22.476 80.1922 26.1422 80.5753C32.684 81.2458 58.3 81.7965 77.2784 81.7965C86.3363 81.7965 93.8845 81.6768 97.1434 81.3655C100.666 81.0303 103.47 78.6118 103.949 75.4511C104.644 70.686 104.692 65.5139 104.093 59.6473ZM100.378 74.9243C100.115 76.6962 98.3895 77.654 96.8079 77.7977C87.0791 78.7076 35.6554 77.9414 26.5017 76.9836C24.5607 76.792 23.1469 75.475 23.0511 73.7989C22.7395 68.9619 22.8833 64.0293 23.4824 59.1205C23.6741 57.5401 24.9441 56.3668 26.7173 56.1513C30.791 55.6724 41.8138 55.3851 54.1305 55.3851C70.6887 55.3851 89.5952 55.8879 97.2393 57.0134C99.0365 57.2768 100.354 58.474 100.498 60.0304C101.073 65.5857 101.049 70.4465 100.378 74.9243Z"
					fill="#2D2D35" />
				<path
					d="M38.507 89.4108C38.4112 87.3755 36.8296 85.6514 34.8407 85.4599C31.1505 85.0528 27.3404 85.0289 23.8419 85.3401C21.9009 85.5317 20.3434 87.0881 20.1277 89.0756C19.936 90.8715 19.912 92.7152 20.0079 94.5111C20.1277 96.4746 21.5894 98.0789 23.5543 98.4142C24.8244 98.6297 27.5321 98.7733 30.1201 98.7733C31.9413 98.7733 33.7145 98.7015 34.8168 98.5339C36.8057 98.2705 38.3153 96.5943 38.4351 94.6069C38.5549 92.7631 38.5789 91.0151 38.507 89.4108ZM34.8647 94.3674C34.8407 94.7266 34.5771 94.9421 34.3136 94.99C32.0611 95.3013 25.9985 95.1816 24.1534 94.8703C23.8898 94.8224 23.6262 94.6308 23.6023 94.2956C23.5064 92.6913 23.5304 91.063 23.6981 89.4348C23.7461 89.1474 23.9617 88.9319 24.1774 88.9319C25.6391 88.7882 27.1727 88.7164 28.7303 88.7164C30.6233 88.7164 32.5643 88.8122 34.4573 89.0277C34.673 89.0277 34.9126 89.2671 34.9126 89.5784C34.9845 91.0391 34.9605 92.6673 34.8647 94.3674Z"
					fill="#2D2D35" />
				<path
					d="M60.2179 89.4108C60.1221 87.3755 58.5406 85.6514 56.5517 85.4599C52.8614 85.0528 49.0514 85.0289 45.5289 85.3401C43.6119 85.5317 42.0543 87.0881 41.8386 89.0756C41.6469 90.8475 41.623 92.6913 41.7188 94.5351C41.8386 96.4746 43.3004 98.0789 45.2413 98.4142C46.5113 98.6297 49.2431 98.7733 51.831 98.7733C53.6522 98.7733 55.4254 98.7015 56.5277 98.5339C58.5166 98.2705 60.0262 96.5943 60.1461 94.6069C60.2659 92.7152 60.2898 91.0151 60.2179 89.4108ZM56.5517 94.3914C56.5517 94.7266 56.2641 94.9421 56.0245 94.99C53.772 95.3013 47.7095 95.1816 45.8404 94.8703C45.6008 94.8224 45.3372 94.6308 45.3132 94.2956C45.2174 92.6673 45.2413 91.0391 45.4091 89.4348C45.457 89.1474 45.6727 88.9319 45.8644 88.9319C47.35 88.7882 48.8836 88.7164 50.4412 88.7164C52.3343 88.7164 54.2752 88.8122 56.1683 89.0277C56.3839 89.0277 56.6236 89.2671 56.6236 89.5784C56.6954 91.0391 56.6715 92.6195 56.5517 94.3914Z"
					fill="#2D2D35" />
				<path
					d="M38.507 106.699C38.4112 104.64 36.8296 102.94 34.8407 102.724C31.1505 102.341 27.3404 102.293 23.8419 102.628C21.9009 102.796 20.3434 104.353 20.1277 106.34C19.936 108.16 19.912 109.98 20.0079 111.799C20.1277 113.763 21.5894 115.367 23.5543 115.679C24.8244 115.894 27.5321 116.038 30.1201 116.038C31.9413 116.038 33.7145 115.966 34.8168 115.822C36.8057 115.535 38.3153 113.883 38.4351 111.871C38.5549 110.028 38.5789 108.28 38.507 106.699ZM34.8647 111.656C34.8407 111.991 34.5771 112.23 34.3136 112.254C32.0611 112.566 25.9985 112.47 24.1534 112.135C23.8898 112.135 23.6262 111.895 23.6023 111.584C23.5064 109.956 23.5304 108.327 23.6981 106.723C23.7461 106.412 23.9617 106.22 24.1774 106.196C25.6391 106.053 27.1727 105.981 28.7303 105.981C30.6233 105.981 32.5643 106.101 34.4573 106.292C34.673 106.292 34.9126 106.555 34.9126 106.843C34.9845 108.327 34.9605 109.932 34.8647 111.656Z"
					fill="#2D2D35" />
				<path
					d="M60.2179 106.699C60.1221 104.64 58.5406 102.94 56.5517 102.724C52.8614 102.341 49.0514 102.293 45.5289 102.628C43.6119 102.796 42.0543 104.376 41.8386 106.34C41.6469 108.136 41.623 109.956 41.7188 111.799C41.8386 113.763 43.3004 115.367 45.2413 115.679C46.5113 115.894 49.2431 116.038 51.831 116.038C53.6522 116.038 55.4254 115.966 56.5277 115.822C58.5166 115.535 60.0262 113.883 60.1461 111.871C60.2659 109.98 60.2898 108.28 60.2179 106.699ZM56.5517 111.656C56.5517 112.015 56.2641 112.23 56.0245 112.254C53.772 112.566 47.7095 112.47 45.8404 112.135C45.6008 112.135 45.3372 111.895 45.3132 111.584C45.2174 109.932 45.2413 108.303 45.4091 106.723C45.457 106.412 45.6727 106.22 45.8644 106.196C47.35 106.053 48.8836 105.981 50.4412 105.981C52.3343 105.981 54.2752 106.101 56.1683 106.292C56.3839 106.292 56.6236 106.532 56.6236 106.867C56.6954 108.327 56.6715 109.884 56.5517 111.656Z"
					fill="#2D2D35" />
				<path
					d="M102.991 111.153C102.679 106.699 100.355 103.897 96.4728 103.275C89.3319 102.173 76.0567 102.197 70.1858 103.011C67.55 103.371 64.2671 104.951 63.6201 110.41C63.1408 114.433 62.9012 120.731 63.3325 124.969C63.7639 128.944 66.3279 132.033 69.7066 132.703C72.654 133.254 79.1239 133.613 85.2343 133.613C89.5716 133.613 93.7411 133.446 96.2811 133.038C99.8276 132.464 102.511 129.231 102.823 125.161C103.182 120.683 103.254 114.936 102.991 111.153ZM99.2525 124.873C99.0608 127.292 97.599 129.183 95.73 129.471C90.0269 130.405 75.0982 130.093 70.4015 129.159C68.5803 128.824 67.1666 126.98 66.9269 124.586C66.4956 120.611 66.7352 114.649 67.1905 110.817C67.5739 107.441 69.1075 106.771 70.6651 106.555C73.2291 106.196 77.4225 106.004 81.8317 106.004C86.9117 106.004 92.3033 106.268 95.9217 106.843C97.4073 107.058 99.1566 107.8 99.3962 111.416C99.6598 115.032 99.5879 120.563 99.2525 124.873Z"
					fill="#2D2D35" />
				<path
					d="M38.507 123.964C38.4112 121.905 36.8296 120.204 34.8407 119.989C31.1505 119.606 27.3404 119.558 23.8419 119.893C21.9009 120.061 20.3434 121.641 20.1277 123.605C19.936 125.424 19.912 127.244 20.0079 129.064C20.1277 131.028 21.5894 132.632 23.5543 132.967C24.8244 133.183 27.5321 133.302 30.0961 133.302C31.9413 133.302 33.7145 133.254 34.8168 133.087C36.8057 132.8 38.3153 131.147 38.4351 129.16C38.5549 127.292 38.5789 125.544 38.507 123.964ZM34.8647 128.92C34.8407 129.28 34.5771 129.495 34.3136 129.519C32.085 129.854 25.9985 129.735 24.1534 129.423C23.8898 129.375 23.6262 129.16 23.6023 128.849C23.5064 127.22 23.5304 125.592 23.6981 123.988C23.7461 123.676 23.9617 123.485 24.1774 123.461C25.6391 123.317 27.1727 123.269 28.7303 123.269C30.6233 123.269 32.5643 123.365 34.4573 123.557C34.673 123.557 34.9126 123.82 34.9126 124.131C34.9845 125.592 34.9605 127.196 34.8647 128.92Z"
					fill="#2D2D35" />
				<path
					d="M60.2179 123.964C60.1221 121.905 58.5406 120.204 56.5517 119.989C52.8614 119.606 49.0514 119.558 45.5289 119.893C43.6119 120.061 42.0543 121.641 41.8386 123.605C41.6469 125.4 41.623 127.244 41.7188 129.064C41.8386 131.028 43.3004 132.632 45.2413 132.967C46.5353 133.183 49.2431 133.302 51.8071 133.302C53.6522 133.302 55.4254 133.254 56.5277 133.087C58.5166 132.8 60.0262 131.147 60.1461 129.16C60.2659 127.244 60.2898 125.544 60.2179 123.964ZM56.5517 128.92C56.5517 129.28 56.2641 129.495 56.0245 129.519C53.796 129.854 47.7095 129.735 45.8644 129.423C45.6008 129.375 45.3372 129.16 45.3132 128.849C45.2174 127.22 45.2413 125.568 45.4091 123.988C45.457 123.676 45.6727 123.485 45.8644 123.461C47.35 123.317 48.8836 123.269 50.4412 123.269C52.3343 123.269 54.2752 123.365 56.1683 123.557C56.3839 123.557 56.6236 123.82 56.6236 124.131C56.6954 125.592 56.6715 127.148 56.5517 128.92Z"
					fill="#2D2D35" />
				<path
					d="M81.9277 89.4108C81.8319 87.3755 80.2503 85.6514 78.2614 85.4599C74.5712 85.0528 70.7612 85.0289 67.2387 85.3401C65.3216 85.5317 63.7641 87.0881 63.5484 89.0756C63.3567 90.8715 63.3088 92.7152 63.4286 94.5111C63.5484 96.4746 65.0101 98.0789 66.9511 98.4142C68.2211 98.6297 70.9529 98.7733 73.5408 98.7733C75.362 98.7733 77.1352 98.7015 78.2375 98.5339C80.2024 98.2705 81.736 96.5943 81.8558 94.6069C81.9757 92.7631 81.9996 91.0151 81.9277 89.4108ZM78.2854 94.3674C78.2854 94.7266 77.9739 94.9421 77.7343 94.99C75.4818 95.3013 69.3953 95.1816 67.5502 94.8703C67.3105 94.8224 67.047 94.6308 67.023 94.2956C66.9271 92.6913 66.9511 91.063 67.1188 89.4348C67.1188 89.1474 67.3824 88.9319 67.5741 88.9319C69.0598 88.7882 70.5934 88.7164 72.127 88.7164C74.044 88.7164 75.961 88.8122 77.878 89.0277C78.0937 89.0277 78.3094 89.2671 78.3333 89.5784C78.4052 91.0391 78.3813 92.6673 78.2854 94.3674Z"
					fill="#2D2D35" />
				<path
					d="M103.639 89.4108C103.543 87.3755 101.961 85.6514 99.9724 85.4599C96.2582 85.0528 92.4721 85.0289 88.9496 85.3401C87.0086 85.5317 85.475 87.0881 85.2594 89.0756C85.0677 90.8475 85.0197 92.6913 85.1395 94.5351C85.2594 96.4746 86.7211 98.0789 88.662 98.4142C89.9321 98.6297 92.6638 98.7733 95.2278 98.7733C97.0729 98.7733 98.8461 98.7015 99.9484 98.5339C101.913 98.2705 103.447 96.5943 103.567 94.6069C103.687 92.7152 103.711 91.0151 103.639 89.4108ZM99.9724 94.3914C99.9724 94.7266 99.6848 94.9421 99.4452 94.99C97.1927 95.3013 91.1062 95.1816 89.2611 94.8703C89.0215 94.8224 88.7579 94.6308 88.7339 94.2956C88.6381 92.6673 88.662 91.0391 88.8298 89.4348C88.8298 89.1474 89.0934 88.9319 89.2851 88.9319C90.7707 88.7882 92.3044 88.7164 93.838 88.7164C95.755 88.7164 97.672 88.8122 99.589 89.0277C99.8047 89.0277 100.02 89.2671 100.044 89.5784C100.116 91.0391 100.092 92.6195 99.9724 94.3914Z"
					fill="#2D2D35" />
				<path
					d="M91.1306 117.857C91.1306 119.174 90.0523 120.252 88.7344 120.252H85.2358L85.1879 123.604C85.1879 124.921 84.1096 125.975 82.7917 125.975C81.4737 125.975 80.4194 124.873 80.4194 123.556L80.4673 120.204H77.1365C75.8185 120.204 74.7402 119.078 74.7402 117.761C74.7402 116.445 75.8185 115.391 77.1365 115.391H80.5152V111.943C80.5152 110.626 81.6175 109.572 82.9115 109.572C84.2534 109.572 85.3077 110.674 85.2838 111.991V115.439H88.7344C90.0523 115.439 91.1067 116.516 91.1067 117.833L91.1306 117.857Z"
					fill="#2D2D35" />
				<path
					d="M87.296 74.2533C86.673 74.2533 86.1698 73.7744 86.0979 73.1757C85.8583 70.5418 86.026 67.9797 86.6011 65.5373C86.8407 64.5555 87.2002 63.3104 87.991 62.3286C88.9495 61.1553 90.3632 60.6525 91.6572 60.9877C93.1669 61.3948 94.365 62.9512 94.365 64.5316C94.365 65.202 93.7899 65.657 93.1669 65.7288C92.4959 65.7288 91.9687 65.202 91.9687 64.5316C91.9687 64.0048 91.4655 63.4061 91.0342 63.2864C90.4351 63.1428 89.9798 63.6456 89.8361 63.8132C89.3329 64.4118 89.0693 65.3457 88.9015 66.0641C88.4702 67.8599 88.3025 69.8234 88.3744 71.7869L93.2867 71.6433C93.9097 71.5714 94.5088 72.1461 94.5327 72.7926C94.5327 73.4631 94.0295 74.0138 93.3825 74.0378L87.32 74.2293C87.32 74.2293 87.296 74.2293 87.2721 74.2293L87.296 74.2533Z"
					fill="#2D2D35" />
				<path
					d="M91.3938 69.2735H91.3698L86.5773 69.1777C85.9063 69.1777 85.3792 68.627 85.4031 67.9565C85.4031 67.31 85.9543 66.7832 86.6013 66.7832H86.6252L91.4177 66.879C92.0887 66.879 92.6159 67.4297 92.5919 68.1002C92.5919 68.7467 92.0408 69.2735 91.3938 69.2735Z"
					fill="#2D2D35" />
			</g>
			<defs>
				<clipPath id="clip0_9134_19876">
					<rect width="123" height="143" fill="white" />
				</clipPath>
			</defs>
		</svg>


	</div>

	<div class="stamp-duty-calculator-results" id="results">



		<h4><?php echo __( 'Stamp Duty', 'propertyhive' ); ?>:</h4>

		<label><?php echo __( 'Stamp Duty', 'propertyhive' ); ?> (&pound;)</label>
		<div class="flex gap-16 align-center results">
			<input type="text" name="stamp_duty" value="" placeholder="" disabled>
			<p>This calculator is for guidance only and does not constitute tax or financial advice. SDLT rates and reliefs depend on your individual circumstances. Please seek independent advice and check the latest information directly with HMRC before proceeding. <a href="https://www.gov.uk/stamp-duty-land-tax/residential-property-rates" target="_blank">View current HMRC Stamp Duty rates</a></p>
		</div>
	</div>



</div>
<script>
(function($) {
	function parseMoney(value) {
		if (!value) return 0;
		const cleaned = String(value).replace(/[^0-9.]/g, '');
		const number = parseFloat(cleaned);
		return isNaN(number) ? 0 : number;
	}

	function formatNumber(value) {
		return Math.round(value).toLocaleString('en-GB');
	}

	function calculateProgressiveTax(price, bands) {
		let tax = 0;

		for (let i = 0; i < bands.length; i++) {
			const band = bands[i];
			const lower = band.min;
			const upper = band.max;
			const rate = band.rate;

			if (price <= lower) continue;

			const taxableAmount = Math.min(price, upper) - lower;

			if (taxableAmount > 0) {
				tax += taxableAmount * rate;
			}
		}

		return tax;
	}

	function calculateStampDuty(price, buyerType) {
		if (price <= 0) return 0;

		// Standard residential rates from 1 April 2025
		const standardBands = [{
				min: 0,
				max: 125000,
				rate: 0.00
			},
			{
				min: 125000,
				max: 250000,
				rate: 0.02
			},
			{
				min: 250000,
				max: 925000,
				rate: 0.05
			},
			{
				min: 925000,
				max: 1500000,
				rate: 0.10
			},
			{
				min: 1500000,
				max: Infinity,
				rate: 0.12
			}
		];

		// First-time buyer relief from 1 April 2025
		const ftbBands = [{
				min: 0,
				max: 300000,
				rate: 0.00
			},
			{
				min: 300000,
				max: 500000,
				rate: 0.05
			}
		];

		// Additional dwelling / second home rates from 31 October 2024 onwards
		const btlBands = [{
				min: 0,
				max: 125000,
				rate: 0.05
			},
			{
				min: 125000,
				max: 250000,
				rate: 0.07
			},
			{
				min: 250000,
				max: 925000,
				rate: 0.10
			},
			{
				min: 925000,
				max: 1500000,
				rate: 0.15
			},
			{
				min: 1500000,
				max: Infinity,
				rate: 0.17
			}
		];

		// Non-UK resident surcharge added to standard rates
		const overseasBands = [{
				min: 0,
				max: 125000,
				rate: 0.02
			},
			{
				min: 125000,
				max: 250000,
				rate: 0.04
			},
			{
				min: 250000,
				max: 925000,
				rate: 0.07
			},
			{
				min: 925000,
				max: 1500000,
				rate: 0.12
			},
			{
				min: 1500000,
				max: Infinity,
				rate: 0.14
			}
		];

		if (buyerType === 'ftb') {
			if (price <= 500000) {
				return calculateProgressiveTax(price, ftbBands);
			}
			return calculateProgressiveTax(price, standardBands);
		}

		if (buyerType === 'btl') {
			return calculateProgressiveTax(price, btlBands);
		}

		if (buyerType === 'overseas') {
			return calculateProgressiveTax(price, overseasBands);
		}

		return calculateProgressiveTax(price, standardBands);
	}

	function syncBuyerType($wrap) {
		const t = $wrap.find("#buyer_type").val();
		$wrap.find('input[name="ftb"]').val(t === "ftb" ? "1" : "0");
		$wrap.find('input[name="btl_second"]').val(t === "btl" ? "1" : "0");
		$wrap.find('input[name="buyer_overseas"]').val(t === "overseas" ? "1" : "0");
	}

	function updateStampDuty() {
		const $wrap = $(".stamp-duty-calculator");
		const $priceInput = $wrap.find('input[name="purchase_price"]');
		const $resultInput = $wrap.find('input[name="stamp_duty"]');
		const buyerType = $wrap.find("#buyer_type").val();

		if (!$wrap.length || !$priceInput.length || !$resultInput.length) return;

		syncBuyerType($wrap);

		const price = parseMoney($priceInput.val());
		const stampDuty = calculateStampDuty(price, buyerType);

		$resultInput.val(formatNumber(stampDuty));
	}

	function formatPurchasePriceInput(input) {
		if (!input) return;
		const numericValue = parseMoney(input.value);

		if (numericValue <= 0) {
			input.value = '';
			return;
		}

		input.value = formatNumber(numericValue);
	}

	$(document).ready(function() {
		updateStampDuty();

		$(document).on("change", "#buyer_type", function() {
			updateStampDuty();
		});

		$(document).on("input change", ".stamp-duty-calculator input[name='purchase_price']", function() {
			updateStampDuty();
		});

		$(document).on("blur", ".stamp-duty-calculator input[name='purchase_price']", function() {
			formatPurchasePriceInput(this);
			updateStampDuty();
		});

		$(document).on("click", ".stamp-duty-calculator button[type='button']", function(e) {
			e.preventDefault();
			formatPurchasePriceInput($('.stamp-duty-calculator input[name="purchase_price"]')[0]);
			updateStampDuty();
		});
	});
})(jQuery);
</script>

<script>
(function($) {
	function addStampDutyPoundSymbol() {
		const input = document.querySelector('.stamp-duty-calculator input[name="stamp_duty"]');
		if (!input) return;

		// already done
		if (input.dataset.poundInjected === 'true') {
			const pound = input.parentNode.querySelector('.stamp-duty-pound');
			if (pound) {
				const styles = window.getComputedStyle(input);
				pound.style.fontFamily = styles.fontFamily;
				pound.style.fontSize = styles.fontSize;
				pound.style.fontWeight = styles.fontWeight;
				pound.style.lineHeight = styles.lineHeight;
				pound.style.color = styles.color;
			}
			return;
		}

		const styles = window.getComputedStyle(input);

		// wrap the input
		const wrapper = document.createElement('div');
		wrapper.style.position = 'relative';
		wrapper.style.display = 'inline-block';
		wrapper.style.width = styles.width;
		wrapper.className = 'stamp-duty-pound-wrap';

		input.parentNode.insertBefore(wrapper, input);
		wrapper.appendChild(input);

		// create pound sign
		const pound = document.createElement('span');
		pound.className = 'stamp-duty-pound';
		pound.textContent = '£';
		pound.style.position = 'absolute';
		pound.style.left = '0';
		pound.style.top = '50%';
		pound.style.transform = 'translateY(-50%)';
		pound.style.pointerEvents = 'none';
		pound.style.zIndex = '2';

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
		addStampDutyPoundSymbol();
	});

	$(window).on('load', function() {
		addStampDutyPoundSymbol();
		setTimeout(addStampDutyPoundSymbol, 300);
	});
})(jQuery);
</script>