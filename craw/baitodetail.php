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
$client->setApplicationName('Mynavi');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAuthConfig(__DIR__.'/credentials.json');
$client->setAccessType('offline');
$service = new Google_Service_Sheets($client);
$spreadsheetId = "1uUph1kRJj4-oCw2SEoaG5c5FDdK9cy1TILnP0E4wwMA";
$range = "Sheet2!A1:D";
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$num_row = 0;
set_time_limit(0);
if (empty($values)) {
	
} else {
	$num_row = sizeOf($values) + 1;
}

$value = [];
$num=0;
function el($el){
    return isset($el) ? $el->plaintext : '';
}
function ol($el){
    $es = $el->find('li');
    $text = Array();
    for($i=1;$i<=sizeof($es);$i++){
        array_push($text,$i.'.'.$es[$i-1]->plaintext);
    }
    return join($text,"\n");
}
$each = 200;
$numpage = floor($num_row/$each);

for($per=0;$per<30;$per++){

    for($count=$per*$each;$count<($per+1)*$each;$count++){
    if($count < $num_row-1){
        $data = $values[$count];
        $url = $data[0];
        $html = file_get_html($url);
        $col_B = el($html->find('.jobContentTopViewWrap .jobContentShopPrText',0));
        $col_C = el($html->find('.jobContentBaseInformationSet .jobContentBaseInformationContent',0));
        $acces = $html->find('.wrapItem .jobContentBaseInformationSetL .jobContentBaseInformationItem span'); 
        $col_D = '';
        $col_E = '';
        $col_F = '';
        for($c = 0; $c<sizeOf($acces); $c++){
            $text = $acces[$c]->parent()->parent()->next_sibling();
            
            if(el($acces[$c]) == '雇用形態'){ 
                $col_D = el($text); 
            }
            if(el($acces[$c]) == '勤務地'){ 
                $col_E = ol($text); 
            }
            if(el($acces[$c]) == 'アクセス'){ 
                $col_F = ol($text); 
            }
           
            
        }
        $acces = $html->find('.wrapItem .jobContentBaseInformationSetR .jobContentBaseInformationItem span'); 
        $col_G = '';
        $col_H = '';
        
        for($c = 0; $c<sizeOf($acces); $c++){
            $text = $acces[$c]->parent()->parent()->next_sibling();
            
            if(el($acces[$c]) == 'シフト'){ 
                $col_G = el($text); 
            }
            if(el($acces[$c]) == '面接地'){ 
                $col_H = ol($text); 
            }
            
        }
        $col_I = '';
        if(el($html->find('.wrapItem .jobInformationTitle',0)) == 'お仕事情報'){
            $col_I = el($html->find('.wrapItem .jobInformationTitle',0)->next_sibling());
        }
        $col_J = '';
        if(el($html->find('.wrapItem .noticePoint .noticePointTitle',0)) == '注目ポイント'){
            $col_J = el($html->find('.wrapItem .noticePoint .noticePointTitle',0)->next_sibling());
        }

        $acces = $html->find('.wrapItem .columnJobInformation .jobInformationItem'); 
        $col_K = '';
        for($c = 0; $c<sizeOf($acces); $c++){
            $text = $acces[$c]->next_sibling();
            
            if(el($acces[$c]) == '待遇・福利厚生'){ 
                $col_K = el($text); 
                break;
            }
        }

        $acces2 = $html->find('.wrapItem .entryInformationColumn .entryInformationItem'); 
        $col_L = '';
        $col_M = '';
        for($c = 0; $c<sizeOf($acces2); $c++){
            $text = $acces2[$c]->next_sibling();
            
            if(el($acces2[$c]) == '会社・店舗名'){ 
                $col_L = ol($text); 
            }
            if(el($acces2[$c]) == '事業内容'){ 
                $col_M .= el($text)."\n"; 
                
            }
            
            
        }
        echo $url;
        echo '<br>';
        //var_dump($col_M);
        // $tags = $html->find("#str-contents .section-inner .list-icon-a .icon-txt-i"); // D 

        
        // $arr_tg = Array();
        // foreach($tags as $tag){
        //     array_push($arr_tg,el($tag));
        // }
        // $tag2s = $html->find("#str-contents .section-c .list-icon-a .icon-txt-h"); // I 
        // $arr_tg2 = Array();
        // foreach($tag2s as $tag){
        //     array_push($arr_tg2,el($tag));
        // }
        // $col_D = join(', ', $arr_tg);
        // $col_I = join(', ', $arr_tg2);
        // $col_E = el($html->find('#str-contents .section-inner .list-info-b .item a',0)); //E
        // $col_F = el($html->find('#str-contents .section-inner .list-info-b .item a',1)); //F
        // $col_G = el($html->find('#str-contents .section-inner .list-info-b .item a',2)); //G
        // $col_H = el($html->find('#str-contents .hdg-f-wrap .hdg-f-content .hdg-f',0)); //H
        // $acces = $html->find('#str-contents .section-inner .section-item-a .content .hdg-c-wrap h4'); 
        // $col_J = '';
        // $col_K = '';
        // $col_L = '';
        // $col_M = '';
        // $col_N = '';
        // $col_O = '';
        // $col_P = '';
        // $col_Q = '';

        // for($c = 0; $c<sizeOf($acces); $c++){
        //     $parent = $acces[$c]->parent();
        //     $text = el($parent->next_sibling());
        //     $parent2 = $acces[$c]->parent()->next_sibling()->next_sibling();
        //     if(!isset($parent2->class)){
        //         $text .= el($parent2);
        //     }

        //     if($acces[$c]->plaintext == 'アクセス'){ 
        //         $col_J = $text; 
        //     }
        //     if($acces[$c]->plaintext == '給与'){ // K
        //         $col_K = $text; 
        //     }
            
        //     if($acces[$c]->plaintext == '勤務時間'){ // L
        //         $col_L = $text; 
        //     }
        //     if($acces[$c]->plaintext == '休日'){ //M
        //         $col_M = $text; 
        //     }
        //     if($acces[$c]->plaintext == '待遇・福利厚生'){ //N
        //         $col_N = $text; 
        //     }
        //     if($acces[$c]->plaintext == '求める資格'){ //O
        //         $col_O = $text; 
        //     }
        //     if($acces[$c]->plaintext == '特典'){ //P
        //         $col_P = $text; 
        //     }
        //     if($acces[$c]->plaintext == 'ポイント'){ //Q
        //         $col_Q = $text; 
        //     }
            
        // }
        // $info = $html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr th'); 
        // $col_R = '';
        // $col_S = '';
        // $col_T = '';
        // $col_U = '';
        // $col_V = '';
        // $col_W = '';
        // $col_X = '';

        // for($c = 0; $c<sizeOf($info); $c++){ 
        //     if($info[$c]->plaintext == '企業名'){ //R
        //         $col_R = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '住所'){ //S
        //         $col_S = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '派遣許認可番号'){ //T
        //         $col_T = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '有料職業紹介事業許可番号'){ //U
        //         $col_U = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '電話番号'){ //V
        //         $col_V = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '電話受付時間'){ //W
        //         $col_W = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
        //     }
        //     if($info[$c]->plaintext == '企業サイト'){ //X
        //         $col_X = $html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)->find('a',0)->plaintext; 
        //     }
        // }

        $value[$num] = [	
            $url,
            $col_B,
            $col_C,
            $col_D,
            $col_E,
            $col_F,
            $col_G,
            $col_H,
            $col_I,
            $col_J,
            $col_K,
            $col_L,
            $col_M
        ];
        $num++;
        $html->clear();
        unset($html);
       // var_dump($value);
    //break;
    }
    
    //break;
    }


    // $range = 'Sheet1!A'.($per*$each + 2).':M'.($per*$each+$num+1);
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
    
    //$value = [];
    //$num = 0;

}
$fp = fopen('file_baito.csv', 'w');
foreach ($value as $fields) {
    fputcsv($fp, $fields);
}



fclose($fp); 



?>
</body>
</html>
