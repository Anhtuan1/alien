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
$spreadsheetId = "1xAm-JXeqWMX1KsA8IJ6VKgFbzHiy21lTPTTfiyNG8OA";
$range = "シート2!A1:D";
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
$each = 200;
$numpage = floor($num_row/$each);

for($per=58;$per<60;$per++){

    for($count=$per*$each;$count<($per+1)*$each;$count++){
        $data = $values[$count];
        $url = $data[0];
        $html = file_get_html($url);

        $tags = $html->find("#str-contents .section-inner .list-icon-a .icon-txt-i"); // D 
        $arr_tg = Array();
        foreach($tags as $tag){
            array_push($arr_tg,el($tag));
        }
        $tag2s = $html->find("#str-contents .section-c .list-icon-a .icon-txt-h"); // I 
        $arr_tg2 = Array();
        foreach($tag2s as $tag){
            array_push($arr_tg2,el($tag));
        }
        $col_D = join(', ', $arr_tg);
        $col_I = join(', ', $arr_tg2);
        $col_E = el($html->find('#str-contents .section-inner .list-info-b .item a',0)); //E
        $col_F = el($html->find('#str-contents .section-inner .list-info-b .item a',1)); //F
        $col_G = el($html->find('#str-contents .section-inner .list-info-b .item a',2)); //G
        $col_H = el($html->find('#str-contents .hdg-f-wrap .hdg-f-content .hdg-f',0)); //H
        $acces = $html->find('#str-contents .section-inner .section-item-a .content .hdg-c-wrap h4'); 
        $col_J = '';
        $col_K = '';
        $col_L = '';
        $col_M = '';
        $col_N = '';
        $col_O = '';
        $col_P = '';
        $col_Q = '';

        for($c = 0; $c<sizeOf($acces); $c++){
            $parent = $acces[$c]->parent();
            $text = el($parent->next_sibling());
            $parent2 = $acces[$c]->parent()->next_sibling()->next_sibling();
            if(!isset($parent2->class)){
                $text .= el($parent2);
            }

            if($acces[$c]->plaintext == 'アクセス'){ // J
                $col_J = $text; 
            }
            if($acces[$c]->plaintext == '給与'){ // K
                $col_K = $text; 
            }
            
            if($acces[$c]->plaintext == '勤務時間'){ // L
                $col_L = $text; 
            }
            if($acces[$c]->plaintext == '休日'){ //M
                $col_M = $text; 
            }
            if($acces[$c]->plaintext == '待遇・福利厚生'){ //N
                $col_N = $text; 
            }
            if($acces[$c]->plaintext == '求める資格'){ //O
                $col_O = $text; 
            }
            if($acces[$c]->plaintext == '特典'){ //P
                $col_P = $text; 
            }
            if($acces[$c]->plaintext == 'ポイント'){ //Q
                $col_Q = $text; 
            }
            
        }
        $info = $html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr th'); 
        $col_R = '';
        $col_S = '';
        $col_T = '';
        $col_U = '';
        $col_V = '';
        $col_W = '';
        $col_X = '';

        for($c = 0; $c<sizeOf($info); $c++){ 
            if($info[$c]->plaintext == '企業名'){ //R
                $col_R = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '住所'){ //S
                $col_S = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '派遣許認可番号'){ //T
                $col_T = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '有料職業紹介事業許可番号'){ //U
                $col_U = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '電話番号'){ //V
                $col_V = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '電話受付時間'){ //W
                $col_W = el($html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)); 
            }
            if($info[$c]->plaintext == '企業サイト'){ //X
                $col_X = $html->find('#str-contents .section-inner .section-item-a .content .tbl-a tr td', $c)->find('a',0)->plaintext; 
            }
        }

        $value[$num] = [	
            $url,
            $data[1],
            $data[2],
            $col_D,
            $col_E,
            $col_F,
            $col_G,
            $col_H,
            $col_I,
            $col_J,
            $col_K,
            $col_L,
            $col_M,
            $col_N,
            $col_O,
            $col_P,
            $col_Q,
            $col_R,
            $col_S,
            $col_T,
            $col_U,
            $col_V,
            $col_W,
            $col_X
        ];
        $num++;
        $html->clear();
        unset($html);

    }


    $range = 'シート1!A'.($per*$each + 2).':X'.($per*$each+$num+1);
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
    $value = [];
    $num = 0;
}
    



?>
</body>
</html>
