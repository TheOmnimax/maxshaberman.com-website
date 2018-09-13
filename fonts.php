<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Fonts</title>
		<?php include '../includes/head.php' ?>
	</head>
	<body>
  		<?php
			 include '../includes/top.php';
		?>
		<center>
		<p class="prose">While creating this site, I had trouble finding a reliable place to find good fonts. I mean, is it really so tough to just have an easy-to-view version of fonts? So, here it is! It took a lot of time to manually type out each font I found in Windows, so I hope you get a lot of use out of it. This was also the first time I used PHP functions, so that was fun! Once I learn JavaScript, I'll set it so only fonts that work for your browser will display. You can find the code I used <a href="font_code.php">here</a></p>
		
		<table class="font">
			<tr><td><font size=6>Default</td><td><font size=6><b>Bold</b></td><td><font size=6><i>Italics</i></td><td><font size=6><b><i>Bold Italics</i></b></td></tr>
			<?php
				function fontRow($font){
					$row = "<tr><td><font face='" . $font . "'>" . $font . "</td><td><font face='" . $font . "'><b>" . $font . "</b></td><td><font face='" . $font . "'><i>" . $font . "</i></td><td><font face='" . $font . "'><i><b>" . $font . "</i></b></td></tr>\n";
					echo $row;}

				fontRow("AR Berkley");
				fontRow("AR Blanca");
				fontRow("AR Bonnie");
				fontRow("AR Carter");
				fontRow("AR Cena");
				fontRow("AR Christy");
				fontRow("Ar Darling");
				fontRow("AR Decode");
				fontRow("AR Delaney");
				fontRow("AR Destine");
				fontRow("AR Essence");
				fontRow("AR Herman");
				fontRow("AR Julian");
				fontRow("Agency FB");
				fontRow("Algerian");
				fontRow("Arial");
				fontRow("Arial Black");
				fontRow("Arial Narrow");
				fontRow("Arial Rounded MT Bold");
				fontRow("Arial Unicode MS");
				fontRow("Bahnschrift");
				/*fontRow("Bahnschrift Condensed");
				fontRow("Bahnschrift Light");
				fontRow("Bahnschrift Light Condensed");
				fontRow("Bahnschrift Light SemiCondensed");
				fontRow("Bahnschrift SemiBold");
				fontRow("Bahnschrift SemiBold Condensed");
				fontRow("Bahnschrift SemiCondensed");
				fontRow("Bahnschrift SemiLight");
				fontRow("Bahnschrift SemiLight Condensed");
				fontRow("Bahnschrift SemiLight SemiConde");*/
				fontRow("Basker Old Face");
				fontRow("Bauhaus 93");
				fontRow("Bell MT");
				fontRow("Berlin Sans FB");
				fontRow("Berlin Sans FB Demi");
				fontRow("Bernard MT Condensed");
				fontRow("Blackadder ITC");
				fontRow("Bodoni MT");
				fontRow("Book Antiqua");
				fontRow("Bookman Old Style");
				fontRow("Bookshelf Symbol 7");
				fontRow("Bradley Hand ITC");
				fontRow("Britannic");
				fontRow("Broadway");
				fontRow("Brush Script MT");
				fontRow("Calibri");
				fontRow("Calibri Light");
				fontRow("Californian FB");
				fontRow("Calisto MT");
				fontRow("Cambria");
				fontRow("Cambria Math");
				fontRow("Candara");
				fontRow("Castellar");
				fontRow("Centaur");
				fontRow("Century");
				fontRow("Century Gothic");
				fontRow("Century Schoolbook");
				fontRow("Chiller");
				fontRow("Colonna MT");
				fontRow("Comic Sans MS");
				fontRow("Consolas");
				fontRow("Constantia");
				fontRow("Cooper");
				fontRow("Copperplate Gothic");
				fontRow("Corbel");
				fontRow("Courier New");
				fontRow("Curlz MT");
				fontRow("Ebrima");
				fontRow("Edwardian Scripts ITC");
				fontRow("Elephant");
				fontRow("Engravers MT");
				fontRow("Eras ITC");
				fontRow("Felic Titling");
				fontRow("Footlight MT");
				fontRow("Forte");
				fontRow("Franklin Gothic");
				fontRow("Franklin Gothic Book");
				fontRow("Freestyle Script");
				fontRow("French Script MT");
				fontRow("Gabriola");
				fontRow("Gadugi");
				fontRow("Garamond");
				fontRow("Georgia");
				fontRow("Gigi");
				fontRow("Gill Sans");
				fontRow("Gill Sans MT");
				fontRow("Gloucester MT");
				fontRow("Goudy Old Style");
				fontRow("Goudy Stout");
				fontRow("HP Simplified");
				fontRow("Haettenschweiler");
				fontRow("Harlow Solid");
				fontRow("Harrington");
				fontRow("High Tower Text");
				fontRow("HoloLens MDL2 Assets");
				fontRow("Impact");
				fontRow("Imprint MT Shadow");
				fontRow("Informal Roman");
				fontRow("Ink Free");
				fontRow("Javanese Text");
				fontRow("Jokerman");
				fontRow("Juice ITC");
				fontRow("Kristen ITC");
				fontRow("Kunstler Script");
				fontRow("Leelawadee UI");
				fontRow("Ludica Bright");
				fontRow("Lucida Calligraphy");
				fontRow("Lucida Console");
				fontRow("Lucida Fax");
				fontRow("Lucida Handwriting");
				fontRow("Lucida Sans");
				fontRow("Lucida Sans Typewriter");
				fontRow("Lucida Sans Unicode");
				fontRow("MS Gothic");
				fontRow("MS PGothic");
				fontRow("MS Reference Sans Serif");
				fontRow("MS Reference Specialty");
				fontRow("MS UI Gothic");
				fontRow("MV Boli");
				fontRow("Magneto");
				fontRow("Maiandro GD");
				fontRow("Malgun Gothic");
				fontRow("Marlett");
				fontRow("Matura MT Script Capitals");
				fontRow("Microsft Himalaya");
				fontRow("Microsoft JhengHei");
				fontRow("Microsoft JhengHei UI");
				fontRow("Microsoft New Tai Lue");
				fontRow("Microsoft PhagsPa");
				fontRow("Microsoft Sans Serif");
				fontRow("Microsoft Tai Le");
				fontRow("Microsoft YaHei");
				fontRow("Microsoft YaHei UI");
				fontRow("Microsoft Yi Baiti");
				fontRow("MingLiU-ExtB");
				fontRow("MingLiU_HKSCS-ExtB");
				fontRow("Mistral");
				fontRow("Modern No. 20");
				fontRow("Mongolian Baiti");
				fontRow("Monospace");
				fontRow("Monotype Corsiva");
				fontRow("Myanmar Text");
				fontRow("NSimSun");
				fontRow("Niagra Engraved");
				fontRow("Niagra Solid");
				fontRow("Nirmala UI");
				fontRow("OCR A");
				fontRow("Old English Text MT");
				fontRow("Onyx");
				fontRow("PMingLiU-ExtB");
				fontRow("Palace Script MT");
				fontRow("Palatino Linotype");
				fontRow("Papyrus");
				fontRow("Parchment");
				fontRow("Perpetua");
				fontRow("Perpetua Titling MT");
				fontRow("Playbill");
				fontRow("Poor Richard");
				fontRow("Pristina");
				fontRow("Rage");
				fontRow("Ravie");
				fontRow("Rockwell");
				fontRow("Script MT");
				fontRow("Segoe MDL2 Assets");
				fontRow("Segoe Print");
				fontRow("Segoe Script");
				fontRow("Segoe UI");
				fontRow("Segoe UI Emoji");
				fontRow("Segoe UI Historic");
				fontRow("Segoe UI Symbol");
				fontRow("Shadowcard Gothic");
				fontRow("SimSun");
				fontRow("SimSun-ExtB");
				fontRow("Sitka");
				fontRow("Snap ITC");
				fontRow("Stencil");
				fontRow("Sylfaen");
				fontRow("Symbol");
				fontRow("TI Uni");
				fontRow("TI-83p Mini Sans");
				fontRow("TI-92p Mini Sans");
				fontRow("Tahoma");
				fontRow("Tempus Sans ITC");
				fontRow("Ti73pc");
				fontRow("Ti-83p Mini Sans");
				fontRow("Ti83pc");
				fontRow("Ti83Pluspc");
				fontRow("Ti86pc");
				fontRow("Ti89pc");
				fontRow("Ti92Pluspc");
				fontRow("Times New Roman");
				fontRow("Trebuchet MS");
				fontRow("Tw Cen MT");
				fontRow("Verdana");
				fontRow("Viner Hand ITC");
				fontRow("Vivaldi");
				fontRow("Vladimir Script");
				fontRow("Webdings");
				fontRow("Wide Latin");
				fontRow("Wingdings");
				fontRow("Wingdings 2");
				fontRow("Wingdings 2");
				fontRow("Wingdings 3");
				fontRow("Yu Gothic");
				fontRow("Yu Gothic UI");
			?>
		</table>
		</center>
		<?php
			 include '../includes/bottom.php';
		?>
	</body>
</html>