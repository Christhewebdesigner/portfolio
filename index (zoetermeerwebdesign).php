<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Zoetermeer webdesign & development">
  <meta name="keywords" content="webdesign, design, webdevelopment, development, webbeheer, beheer, goedkoop, laag tarief, voordelig">

  <title>Zoetermeer Webdesign</title>

  <link href="css/styles.css" type="text/css" rel="stylesheet"></link>
  <link href="https://fonts.googleapis.com/css?family=Oswald|Wire+One" rel="stylesheet">

  <script src="js/jquery-1.11.3.js" type="text/javascript"></script>
  <script src="js/index.js" type="text/javascript" ></script>
  <!--GOOGLE ANALYTICS-->
  <?php include_once("analyticstracking.php") ?>
</head>

<body>

<header></header>
<h1>Zoetermeer Webdesign</h1>

<!--INTRODUCTIE-->

  <div class="gradientoverlay"></div>
  <div class="blur">
  </div>

  <div id="intro">
    <p>Zoekt u een professionele website voor uw bedrijf? Wij zijn op zoek naar nieuwe klanten om door te groeien, hierom bieden wij u een professionele website aan voor een laag tarief.
      Stuur ons een bericht en wij nemen zo snel mogelijk contact met u op!
    </p>

    <div id="contactbtn">
      <p>CONTACT</p>
      <p>Zoetermeerwebdesign@hotmail.com</p>
    </div>
  </div>



    <!--CONTACT-->

    <div id="php">
        <?php include "email.php" ?>
    </div>

    <div id="contactBox">

    	<form id="contactForm" action="index.php" method="POST" autocomplete="off">

        <div class="contactFormGroup">
    			<!-- Naam:<br> -->
    			<input type="text" name="naam" maxlength="40" alt="Naam" required></input>
          <label>Naam</label>
        </div>
        <div class="contactFormGroup">
    			<!-- Email:<br> -->
    			<input type="text" name="email" maxlength="50" alt="Email" required></input>
            <label>Email</label>
        </div>
        <div class="contactFormArea">
    			<!-- Bericht:<br> -->
    			<textarea rows="4" cols="59" name="bericht" maxlength="1000" alt="Bericht" required></textarea>
          <label>Uw bericht</label>
        </div>
    			<!-- <img src="generate.php"/><p> Type Captcha.</p>
    			<input type="text" name="secure" alt="Type captcha code"> -->
    			<button type="submit" value="Verstuur" alt="Verstuur bericht" name="verstuur">Verstuur</button>
          <img class="returnbtn" src="http://cdn.onlinewebfonts.com/svg/img_365206.svg" width="25px" />

    	</form>

    </div>


  <!--PORTFOLIO-->

  <div id="bekijk">
    <p>Bekijk hier ons portfolio
    </p>
  </div>
  <div id="portfolio">

  </div>

  <div id="references">
    <ul>
      <!-- <a href="Tuincentrum van Groop (FINISH)/index.html" target="_blank"> -->
        <!-- <li><p>Tuincentrum van Groop</p> -->
        <!--<img src="img/TuincentrumVanGroop3_opt.png" width="250px"/>-->
      <!-- </li></a> -->

      <a href="http://www.euretos.com" target="_blank"><li class="margin_reference"><p>Euretos</p></li></a>
      <a href="http://www.amikgoesdigital.com" target="_blank"><li class="margin_reference"><p>Amikgoesdigital</p></li></a>
      <a href="http://www.woodshopmusic.nl" target="_blank">  <li class="margin_reference"><p>Woodshopmusic</p></li></a>
    </ul>
  </div>

</body>

</html>
