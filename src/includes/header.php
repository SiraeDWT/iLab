<?php
include 'functions.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <title><?php echo addTitle(); ?></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property ="og:site_name" content="iLab">
    <meta property ="og:title" content="Dylan Vercalsteren">
    <meta property ="og:description" content="<?php echo addDescription(); ?>">
    <meta property ="og:type" content="website">
    <meta property ="og:url" content="https://dylan-vercalsteren.be/projets/ilab/">
    <meta property ="og:image" content="https://dylan-vercalsteren.be/projets/ilab/assets/images/toutou.webp">
    <meta property ="og:image:width" content="386">
    <meta property ="og:image:height" content="386">

    <meta name="description" content="<?php echo addDescription(); ?>">
    <meta name="keywords" content="<?php echo addTags(); ?>">
    <meta name="author" content="<?php echo addGroup(); ?>">
    <meta name="copyright" content="<?php echo addGroup(); ?>">
    <?php echo addRobotsMetadata(); ?>

    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://use.typekit.net/lri1xdp.css">
    <link rel="stylesheet" href="styles/app.css">
    <script src="scripts/app.js" defer></script>
</head>
<body style="height:1024px;width:1366px;-webkit-touch-callout: none; -webkit-user-select: none" id="top" class="<?php echo addClass(); ?>">