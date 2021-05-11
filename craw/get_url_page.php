
<?php
include "simplehtmldom/simple_html_dom.php"; 
require __DIR__ . '/vendor/autoload.php';
$client = new \Google_Client();
$client->setApplicationName($_POST['url_data']);
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAuthConfig(__DIR__.'/credentials.json');
$client->setAccessType('offline');
$service = new Google_Service_Sheets($client);
$spreadsheetId = $_POST['sheet_data'];

$data = Array();
$url = $_POST['url_data'];

$list = Array($url);
$number_page = ceil($_POST['total_result']/$_POST['each_result']);
for($i=2; $i<=$number_page;$i++){
    array_push($list,$url.$_POST['param_page_number'].$i);
}
$value = [];
$num_row = 0;

foreach($list as $pg){
    
    $html_page = file_get_html($pg);
    //var_dump($html_page->find($_POST['class_data']));
    foreach($html_page->find($_POST['class_data']) as $title){
        $link2 = $title->href;
        $link2 = sizeOf(explode('http',$link2)) == 1 ? parse_url($url)["scheme"].'://'.parse_url($url)["host"].$link2 : $link2;
        $value[$num_row] = [	
                $link2
            ];
        
        $num_row++;
        array_push($data,$link2);
    }
    $html_page->clear();
    unset($html);
}

//echo join(" ",$data);

// $fp = fopen('file_baito.csv', 'w');



// $link2 = $url.'/kanagawa/ss-17/';
// $html2 = file_get_html($link2);
// $list = Array($link2);
// $el = $html2->find('#__nuxt .columnResultListSide .wrapSideWhite .researchCount span',0);

// $number_page = isset($el) ? ceil(($el->plaintext)/30) : '1';
// for($i=2; $i<=$number_page;$i++){
//     array_push($list,$link2.'?pageNo='.$i);
// }
// var_dump($list);
// foreach($list as $pg){
//     $html_page = file_get_html($pg);

//     foreach($html_page->find('#__layout .jobOfferSearchListMainWrap .jobOfferSearchListWrap .tabJobOfferCardContentWrap .informationTextWrap .jobOfferGTM') as $title){
//         $link4 = $url.$title->href;
//         $value[$num_row] = [	
//                 $link4
//             ];
        
//         $num_row++;
//     }

// }
//     // foreach($html2->find("#str-contents .box-search-a-inner ._col-4 li a") as $title)
// 	// 	{
//     //         $link3 = $title->href;
// 	// 		$link3 = $url.''.$link3;
// 	// 		$namevie2 = $title->innertext;
// 	// 		$namevie2 = str_replace("'","`",$namevie2);
// 	// 		$html3 = file_get_html($link3);
//     //         $list = Array($link3);
//     //         $el = $html3->find('#str-contents .item-b .all',0);

//     //         $number_page = isset($el) ? ceil(($el->plaintext)/30) : '1';
//     //         for($i=2; $i<=$number_page;$i++){
//     //             array_push($list,$link3.'?pageNo='.$i.'_'.($i+1));
//     //         }
            
//     //         foreach($list as $pg){
//     //             $html_page = file_get_html($pg);
                
//     //                 foreach($html_page->find('#str-contents .section-inner .column-item .lyt-pnl-b .btn-i') as $title){
//     //                     $link4 = $title->href;
//     //                     $value[$num_row] = [	
//     //                             $link4,
//     //                             $namevie,
//     //                             $namevie2
//     //                         ];
                        
//     //                     $num_row++;
//     //                 }
                
//     //         }
            
//     //     }
// foreach ($value as $fields) {
//     fputcsv($fp, $fields);
// }
$range = $_POST['sheet_tag']."!".$_POST['range_from'].':'.$_POST['range_to'];
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
$open = 'https://docs.google.com/spreadsheets/d/'.$_POST['sheet_data'];
echo '<a class="btn btn-outline-success btn-rounded" target="_blank" href="'.$open.'">View import file</a>';
?>

