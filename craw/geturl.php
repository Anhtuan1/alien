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
$range = "シート2!A2:A";
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$num_row = 0;

if (empty($values)) {
	
} else {
	$num_row = sizeOf($values) + 1;
}
$range = 'シート2!A'.$num_row .':A'.$num_row;

$data = Array();

$url = 'https://job-con.jp';

$html = file_get_html($url);
$value = [];
$fp = fopen('file.csv', 'w');

foreach($html->find("#str-contents .box-search-a-inner ._col-4 li a") as $title){
	
	$link = $title->href;
	$link2 = $url.''.$link;
	$namevie = $title->innertext;
	$namevie = str_replace("'","`",$namevie);
	//$van = substr($namevie,0,1);
	// $sql="INSERT INTO news ( cat_id, name_vie, url, van) 
    // VALUES ('American', '$namevie', '$link2','$van')"; 
	// mysql_query($sql) or die (mysql_error()); 
	
    $html2 = file_get_html($link2);
var_dump($link2);
if($link2 == 'https://job-con.jp/chugoku-shikoku/' || $link2=='https://job-con.jp/kyusyu-okinawa/'){
    
    foreach($html2->find("#str-contents .box-search-a-inner ._col-4 li a") as $title)
		{
            $link3 = $title->href;
			$link3 = $url.''.$link3;
			$namevie2 = $title->innertext;
			$namevie2 = str_replace("'","`",$namevie2);
			$html3 = file_get_html($link3);
            $list = Array($link3);
            $el = $html3->find('#str-contents .item-b .all',0);

            $number_page = isset($el) ? ceil(($el->plaintext)/40) : '1';
            for($i=2; $i<=$number_page;$i++){
                array_push($list,$link3.'/page='.$i.'_'.($i+1));
            }
            
            foreach($list as $pg){
                $html_page = file_get_html($pg);
                
                    foreach($html_page->find('#str-contents .section-inner .column-item .lyt-pnl-b .btn-i') as $title){
                        $link4 = $title->href;
                        $value[$num_row] = [	
                                $link4,
                                $namevie,
                                $namevie2
                            ];
                        
                        $num_row++;
                    }
                
            }
            
        }
    foreach ($value as $fields) {
        fputcsv($fp, $fields);
    }
}
}

fclose($fp);

// $range = 'シート2!A1:C'.$num_row;
// $body = new Google_Service_Sheets_ValueRange(
//     [
//         'values' => $value
//     ]
// );
// $params = [
//     'valueInputOption' => 'RAW'
// ];
// $result = $service->spreadsheets_values->update(
//     $spreadsheetId,
//     $range,
//     $body,
//     $params
// );


?>
</body>
</html>
