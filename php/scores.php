<?php

// The JSON standard MIME header.
header('Content-type: application/json');

include 'config.php';

mysql_connect($config_DBserver, $config_DBuser, $config_DBpassword) or die ("sdf");
mysql_select_db($config_DBname) or die ("sdsd");
mysql_set_charset('utf8');

$post_json = $_POST["save_score"];
if ( !empty($post_json)) {
	insertScoreJson($post_json);
}

$get_json = $_GET["ssadsad"];
if ( !empty($get_json)) {
	getHighscore();
} 


/**
 * Get highscores
 *
 * @return JSON object with top ten highscores
 */
function getHighscore() {

	$highscores = array();
	$i = 0;

	$sql = "SELECT *
        	FROM   neversquare_scores
        	ORDER BY  score
        	LIMIT 10";
	$result = mysql_query($sql);
	while ($row = mysql_fetch_object($result)) {
		$highscores[$i]['name'] = $row->name;
		$highscores[$i]['score'] = $row->score;	
		$i++;	
	}
	mysql_free_result($result);

	return json_encode($highscores);
}

function insertScoreJson($json) {
	insertScore($json->{'name'}, $json->{'score'});
}

function insertScore($name, $score) {
	if (!empty($name) && !empty($score)) {
		$sql = "INSERT INTO neversquare_scores
					VALUES ('$name', $score)";
		$result = mysql_query($sql);
		return $result;	
	}
	mysql_free_result($result);
	return false;
}


?>