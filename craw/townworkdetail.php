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
$spreadsheetId = "15aV1QtoJtHmr-h2MniiCoJhDdLbtsWeWASLTTawfDjc";
$range = "シート2!A1:D";
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$num_row = 0;
set_time_limit(0);
if (empty($values)) {

//
} else {

$num_row = sizeOf($values) + 1;
}

$value = [];
$num=0;
function el($el){
    return isset($el) ? trim($el->plaintext) : '';
}
function ol($el){
    $es = $el->find('li');
    $text = Array();
    if(sizeof($es) >= 2){
        for($i=1;$i<=sizeof($es);$i++){
            array_push($text,$i.'.'.trim($es[$i-1]->plaintext));
        }
        return join($text,"\n");
    }else{
        return el($el);
    }
    
}

function ol_p($el){
    $es = $el->find('p');
    $text = Array();
    if(sizeof($es) >= 2){
        for($i=1;$i<=sizeof($es);$i++){
            array_push($text,trim(ol_span($es[$i-1])));
        }
        return join($text,"\n");
    }else{
        return el($el);
    }
}

function ol_span($el){
    $es = $el->find('span');
    $text = Array();
    if(sizeof($es) >= 1){
        for($i=1;$i<=sizeof($es);$i++){
            array_push($text,trim($es[$i-1]->plaintext));
        }
        return join($text," ");
    }else{
        return el($el);
    }
}

function type1($text){
    return isset($text) ? $text : '';
}

function type2($html,$class,$index){ 
    $result = '';
    return $index == -1 ? ol($html->find($class)) : ol($html->find($class,$index));
}

function type3($html,$field,$class){
    $result = '';
    $acces = $html->find($class);
    for($c = 0; $c<sizeOf($acces); $c++){
        $text = $acces[$c]->next_sibling();
        if(el($acces[$c]) == $field){ 
            $result = trim(ol_p($text)); 
            break;
        }
    }
    return $result;
}

function type4($html,$class){ 
    $tags = $html->find($class); // D 
    $arr_tg = Array();
    foreach($tags as $tag){
        array_push($arr_tg,ol($tag));
    }
    return join(', ', $arr_tg);
}

function type3_array($html,$field,$class){
    $result = Array();
    $acces = $html->find($class);
    for($c = 0; $c<sizeOf($acces); $c++){
        $text = $acces[$c]->next_sibling();
        if(ol($acces[$c]) == $field){ 
            array_push($result,trim(ol($text)));
        }
    }
    return join("\n", $result);
}

$each = 200;
$numpage = floor($num_row/$each);
//B エリア1/Area1
// エリア2/ erea2
//D 職種/ Job type
// 会社名/ company name
//F タイトル/ title
//G 給与/ Salary
// 交通
// 勤務時間
// 職種
// タグ
// 対象となる方・資格
// 勤務地
// 休日・休暇
// 採用予定人数
// 交通費詳細
// 待遇・福利厚生
// 会社事業内容
// 会社住所
// ホームページリンク




for($per=0;$per<5;$per++){

    for($count=$per*$each;$count<($per+1)*$each;$count++){
    if($count < $num_row-1){
        $data = $values[$count];
        $url = $data[0];
        $html = file_get_html($url);
        $value[$num] = [
            type1($url),
            type2($html,'.breadcrumbs-lst li', 1),
            type2($html,'.breadcrumbs-lst li', 2),
            type1('工場/製造'),
            type3($html,'社名（店舗名）','.job-ditail-tbl-inner dt'),
            type2($html,'.contents-wrap .contents-main-wrap .comparison-TM-headerText', 0),
            type3($html,'給与','.job-ditail-tbl-inner dt'),
            type3($html,'勤務地','.job-ditail-tbl-inner dt'),
            type3($html,'勤務時間','.job-ditail-tbl-inner dt'),
            type3($html,'職種','.job-ditail-tbl-inner dt'),
            type4($html,'.job-detail-merit-wrap .job-detail-merit-inner li'),
            type3($html,'対象となる方・資格','.job-ditail-tbl-inner dt'),
            type3($html,'勤務地','.job-ditail-tbl-inner dt'),
            type3($html,'休日・休暇','.job-ditail-tbl-inner dt'),
            type3($html,'採用予定人数','.job-ditail-tbl-inner dt'),
            type3($html,'交通費詳細','.job-ditail-tbl-inner dt'),
            type3($html,'待遇・福利厚生','.job-ditail-tbl-inner dt'),
            type3($html,'会社事業内容','.job-ditail-tbl-inner dt'),
            type3($html,'会社住所','.job-ditail-tbl-inner dt'),
            type3($html,'ホームページリンク','.job-ditail-tbl-inner dt')
        ];

        
        echo $url;
        echo '<br>';
        
        $num++;
        $html->clear();
        unset($html);
        //var_dump($value);
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
$fp = fopen('file_townwork.csv', 'w');
foreach ($value as $fields) {
    fputcsv($fp, $fields);
}



fclose($fp); 



?>
</body>
</html>
