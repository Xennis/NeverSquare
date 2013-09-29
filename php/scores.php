<?php

error_reporting(0);

// The JSON standard MIME header.
header('Content-type: application/json');

include 'config.php';

mysql_connect($config_DBserver, $config_DBuser, $config_DBpassword) or die ("sdf");
mysql_select_db($config_DBname) or die ("sdsd");
mysql_set_charset('utf8');

//$post_json = $_POST["name"];
//if ( !empty($post_json)) {
//	insertScoreJson($post_json);
//}

if ($_SERVER['REQUEST_METHOD'] === "GET") {
	echo getHighscore();
} 
else if ($_SERVER['REQUEST_METHOD'] === "POST") {
	echo insertScore($_POST["name"], intval($_POST["score"]));
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

/**
 * Insert new score
 *
 * @param string name Player name
 * @param integer score Player score
 * @return JSON object true / false
 */
function insertScore($name, $score) {
	$returnValue = new stdClass();
	$returnValue->result = false;

	if (!empty($name) && (strlen($name) < 30) && !empty($score)) {
		$sql = "INSERT INTO neversquare_scores
					VALUES ('$name', $score)";
		$returnValue->result = mysql_query($sql);
		//return $result;	
	}
	return json_encode($returnValue);
}
?>