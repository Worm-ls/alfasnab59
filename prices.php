<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: public, max-age=300'); // кеш 5 минут

$SUPABASE_URL = 'https://jyjfsdxutvdtijyfctrp.supabase.co';
$SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5amZzZHh1dHZkdGlqeWZjdHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNjE2NDAsImV4cCI6MjA4NzkzNzY0MH0.p5Y6u0biDehghNBLFMxAxNMOJHM9kPs4O935_IFnrco';

$url = $SUPABASE_URL . '/rest/v1/price_items?select=id,category,name,price_m3_1,price_m3_2,price_pcs_1,price_unit&is_active=eq.true&order=category,sort_order';

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'apikey: ' . $SUPABASE_KEY,
        'Authorization: Bearer ' . $SUPABASE_KEY,
    ],
    CURLOPT_TIMEOUT => 10,
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200 && $response) {
    echo $response;
} else {
    // Fallback — возвращаем пустой массив чтобы сайт не сломался
    echo '[]';
}
