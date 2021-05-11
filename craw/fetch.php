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
$spreadsheetId = "1aD-BoZIEsx6oi6A8AI38t3oAqAwShcynmQoGQd1LxnU";
$range = "Sheet1!A2:B";
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$num_row = 0;
set_time_limit(0);
if (empty($values)) {
	
} else {
	$num_row = sizeOf($values);
}
$value = [];
for($i =0 ; $i<19; $i++){
    $data = $values[$i];
    $url = "https://wax.eosrio.io/v2/state/get_account?account=".$data[1];
    
    $ch = curl_init();

    // set url
    curl_setopt($ch, CURLOPT_URL, $url);
    sleep(1);
    //return the transfer as a string
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    sleep(1);
    // $output contains the output string
    $output = json_decode(curl_exec($ch));
    var_dump(($output->tokens)[0]->amount);
    $wax = 0;
    $tlm = 0;
    if(isset(($output->tokens)[1]->amount)){
    
        for($c = 0; $c< sizeof($output->tokens);$c++){
            if(($output->tokens)[$c]->symbol == 'WAX'){
                $wax = ($output->tokens)[$c]->amount;
            }
            if(($output->tokens)[$c]->symbol == 'TLM'){
                $tlm = ($output->tokens)[$c]->amount;
            }
        }
    }
    $value[$i] = [	
        $wax ,
        $tlm,
        isset($output->account->cpu_limit->available) ? $output->account->cpu_limit->available : '',
        isset($output->account->cpu_limit->max) ? $output->account->cpu_limit->max : '',
        isset($output->account->cpu_limit->used) ? ceil(($output->account->cpu_limit->used)*100/$output->account->cpu_limit->max) : '',
        isset((($output->actions)[0])->timestamp) ? (($output->actions)[0])->timestamp : ''
    ];
    
    curl_close($ch);    
    sleep(1);
}
var_dump($value);
$range2 = 'Sheet1!C2:H';
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
    $range2,
    $body,
    $params
);


?>
</body>
</html>
