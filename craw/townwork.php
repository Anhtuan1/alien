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
$client->setApplicationName('https://baito.mynavi.jp/kanagawa/ss-17/');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAuthConfig(__DIR__.'/credentials.json');
$client->setAccessType('offline');
$service = new Google_Service_Sheets($client);
$spreadsheetId = "15aV1QtoJtHmr-h2MniiCoJhDdLbtsWeWASLTTawfDjc";
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

$url = 'https://townwork.net';

$html = file_get_html($url);
$value = [];
$fp = fopen('file_townwork.csv', 'w');


$link2 = $url.'/tokyo/jc_019/';
$html2 = file_get_html($link2);
$list = Array($link2);
$el = $html2->find('.contents-main-wrap .display-num-wrap .hit-num',0);

$number_page = isset($el) ? ceil(($el->plaintext)/30) : '1';
for($i=2; $i<=$number_page;$i++){
    array_push($list,$link2.'?page='.$i);
}
var_dump($list);
foreach($list as $pg){
    $html_page = file_get_html($pg);

    foreach($html_page->find('.job-lst-main-cassette-wrap .job-lst-box-wrap .job-lst-main-box-inner') as $title){
        $link4 = $url.$title->href;
        $value[$num_row] = [	
                $link4
            ];
        
        $num_row++;
    }

}
    // foreach($html2->find("#str-contents .box-search-a-inner ._col-4 li a") as $title)
	// 	{
    //         $link3 = $title->href;
	// 		$link3 = $url.''.$link3;
	// 		$namevie2 = $title->innertext;
	// 		$namevie2 = str_replace("'","`",$namevie2);
	// 		$html3 = file_get_html($link3);
    //         $list = Array($link3);
    //         $el = $html3->find('#str-contents .item-b .all',0);

    //         $number_page = isset($el) ? ceil(($el->plaintext)/30) : '1';
    //         for($i=2; $i<=$number_page;$i++){
    //             array_push($list,$link3.'?pageNo='.$i.'_'.($i+1));
    //         }
            
    //         foreach($list as $pg){
    //             $html_page = file_get_html($pg);
                
    //                 foreach($html_page->find('#str-contents .section-inner .column-item .lyt-pnl-b .btn-i') as $title){
    //                     $link4 = $title->href;
    //                     $value[$num_row] = [	
    //                             $link4,
    //                             $namevie,
    //                             $namevie2
    //                         ];
                        
    //                     $num_row++;
    //                 }
                
    //         }
            
    //     }
foreach ($value as $fields) {
    fputcsv($fp, $fields);
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
