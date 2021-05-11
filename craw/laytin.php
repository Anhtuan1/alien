<html>
<head>
<script src="https://apis.google.com/js/platform.js" async defer></script>

</head>
<body>
<div class="g-signin2" data-onsuccess="onSignIn"></div>
<?php
include "simplehtmldom/simple_html_dom.php"; 
require __DIR__ . '/vendor/autoload.php';
$client = new \Google_Client();
$client->setApplicationName('https://job-con.jp/');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAuthConfig(__DIR__.'/credentials.json');
$client->setAccessType('offline');
$service = new Google_Service_Sheets($client);
$spreadsheetId = "1sisJ2ZGgG7AeezZCQe-PTYoVZuwSIBH33DYmDDpUqYA";
$range = "シート1!A2:B";
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$num_row = 2;
if (empty($values)) {
	
} else {
	$num_row = sizeOf($values) + 1;
}
$range = 'シート1!A'.$num_row .':C'.$num_row;

$data = Array();

$url = 'https://job-con.jp';

$html = file_get_html($url);
$data = Array();
foreach($html->find("#str-contents .box-search-a-inner ._col-4 li a") as $title)
		{
	
	$link = $title->href;
	$link2 = $url.''.$link;
	$namevie = $title->innertext;
	$namevie = str_replace("'","`",$namevie);
	//$van = substr($namevie,0,1);
	// $sql="INSERT INTO news ( cat_id, name_vie, url, van) 
    // VALUES ('American', '$namevie', '$link2','$van')"; 
	// mysql_query($sql) or die (mysql_error()); 
	
	$html2 = file_get_html($link2);
	foreach($html2->find("#str-contents .box-search-a-inner ._col-4 li a") as $title)
		{
			$link3 = $title->href;
			$link3 = $url.''.$link3;
			$namevie2 = $title->innertext;
			$namevie2 = str_replace("'","`",$namevie2);
			$html3 = file_get_html($link3);
			foreach($html3->find("#str-contents .section-inner .column-item .lyt-pnl-b a") as $title){
				$link4 = $title->href;
				$html4 = file_get_html($link4);
				
				$value = [
					[	$link4,
						$namevie,
						$namevie2
						
					]
				];
				$range = 'シート1!A'.$num_row .':C'.$num_row;
				$body = new Google_Service_Sheets_ValueRange(
					[
						'values' => $value
					]
				);
				$params = [
					'valueInputOption' => 'RAW'
				];
				$result = $service->spreadsheets_values->update(
					$spreadsheetId,
					$range,
					$body,
					$params
				);
				$num_row++;
			}
			
		}
	
}



?>
</body>
</html>
