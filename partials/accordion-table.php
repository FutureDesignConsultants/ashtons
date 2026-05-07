<?php
$table = $args['table'] ?? [];

$header_row = $table['header_row'] ?? [];
$rows = $table['body_rows'] ?? [];
$footer_row = $table['footer_rows'] ?? [];

$header_leading_cell = $header_row['leading_cell'] ?? '';
$header_cells = $header_row['cells'] ?? [];

$footer_leading_cell = $footer_row['leading_cell'] ?? '';
$footer_cells = $footer_row['cells'] ?? [];

if (!function_exists('render_accordion_table_body_cell')) {
	function render_accordion_table_body_cell($cell = []) {
		$type = $cell['type'] ?? '';
		$text = $cell['text'] ?? '';

		if ($type === 'tick') {
			return '
				<span class="accordion-table__icon accordion-table__icon--tick" aria-label="Included">
					<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.83219 12.8138C4.30812 12.2958 3.60566 12.0054 2.85445 11.9948C2.10546 11.982 1.39192 12.2554 0.852338 12.7585C-0.26118 13.7965 -0.286663 15.51 0.793615 16.5789L13.5431 29.1805C14.065 29.6963 14.7929 29.9952 15.5419 29.9995H15.563C16.3153 29.9995 17.0211 29.7187 17.5529 29.2081L43.1771 4.61019C44.274 3.55722 44.274 1.84269 43.1771 0.789726C42.0802 -0.263242 40.2941 -0.263242 39.1972 0.789726L15.5929 23.4498L4.83219 12.8138Z" fill="#FF8D28"/>
					</svg>
				</span>
			';
		}

		if ($type === 'text' && $text) {
			return '<span class="accordion-table__cell-text">' . esc_html($text) . '</span>';
		}

		return '
			<span class="accordion-table__icon accordion-table__icon--none" aria-label="Not included">
				<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="4.24264" y1="3" x2="30.355" y2="29.1124" stroke="#D7D7D7" stroke-width="6" stroke-linecap="round"/>
					<line x1="3.39453" y1="29.1128" x2="29.5069" y2="3.00044" stroke="#D7D7D7" stroke-width="6" stroke-linecap="round"/>
				</svg>
			</span>
		';
	}
}

if (!$header_leading_cell && !$header_cells && !$rows && !$footer_leading_cell && !$footer_cells) {
	return;
}
?>


<div class="accordion__table accordion-table">
	<div class="accordion-table__scroll">
		<table class="accordion-table__table">

			<?php if ($header_leading_cell || $header_cells) : ?>
			<thead>
				<tr>
					<th scope="col" class="accordion-table__leading-heading">
						<?php echo esc_html($header_leading_cell); ?>
					</th>

					<?php foreach ($header_cells as $cell) : ?>
					<th scope="col" class="accordion-table__column-heading">
						<?php echo esc_html($cell['text'] ?? ''); ?>
					</th>
					<?php endforeach; ?>
				</tr>
			</thead>
			<?php endif; ?>

			<?php if ($rows) : ?>
			<tbody>
				<?php foreach ($rows as $row) : ?>
				<?php
						$row_leading_cell = $row['leading_cell'] ?? '';
						$row_cells = $row['cells'] ?? [];
						?>
				<tr>
					<th scope="row" class="accordion-table__row-heading">
						<?php echo nl2br(esc_html($row_leading_cell)); ?>
					</th>

					<?php foreach ($row_cells as $index => $cell) : ?>
					<td class="accordion-table__body-cell"
						data-label="<?php echo esc_attr($header_cells[$index]['text'] ?? ''); ?>">
						<?php echo render_accordion_table_body_cell($cell); ?>
					</td>
					<?php endforeach; ?>
				</tr>
				<?php endforeach; ?>
			</tbody>
			<?php endif; ?>

			<?php if ($footer_leading_cell || $footer_cells) : ?>
			<tfoot>
				<tr>
					<th scope="row" class="accordion-table__footer-heading">
						<?php echo esc_html($footer_leading_cell); ?>
					</th>

					<?php foreach ($footer_cells as $index => $cell) : ?>
					<td class="accordion-table__footer-cell"
						data-label="<?php echo esc_attr($header_cells[$index]['text'] ?? ''); ?>">
						<?php echo wpautop(esc_html($cell['text'] ?? '')); ?>
					</td>
					<?php endforeach; ?>
				</tr>
			</tfoot>
			<?php endif; ?>

		</table>
	</div>
</div>