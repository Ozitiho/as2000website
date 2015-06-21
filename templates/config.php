<?php
/*
2 constanten die ervoor zorgen dat als je iets moet includen, dat het dan vanaf de root begint
ROOT_PATH voor in je html href's en src's. 
BASE_URL voor je PHP include's 
*/

	define("ROOT_PATH",$_SERVER["DOCUMENT_ROOT"] . "/");
	define("BASE_URL","/");
