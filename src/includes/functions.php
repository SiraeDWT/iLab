<?php
function getPage(){
    $currentPage = basename($_SERVER['PHP_SELF']);
    return $currentPage;
}

function addTitle(){
    $file = getPage();

    if($file == 'index.php'){
        return "Découvrez notre projet • iLabrador";
    } elseif($file == 'app.php'){
        return "Expérimentez • iLabrador";
    } elseif($file == 'credits.php'){
        return "Crédits • iLabrador";
    } else{
        return "iLabrador";
    }
}

function addDescription(){
    $file = getPage();

    if($file == 'index.php' || $file == 'credits.php'){
        return "Découvrez notre application qui vous offre une expérience narrative à propos des difficultés quotidiennes rencontrées par les personnes malvoyantes.";
    } elseif($file == 'app.php'){
        return "Découvrez le quotidien d'une personne malvoyante ainsi que toutes les difficultés que cela implique à travers les explications d'un chien-guide nommé iLabrador.";
    } else{
        return "";
    }
}

function addTags(){
    $tags = ['iLab', 'Sensibilisation', 'PMR', 'Dylan Vercalsteren', 'Thibault Varga', 'Noa Jacquemin', 'Éleonore Koterko', 'Xavier-Philippe Renk', 'DWT', 'HEAJ', 'UX Design', 'UI Design', 'Design Web', 'Développement Web'];
    $display_tags = implode(', ', $tags);

    return $display_tags;
}

function addGroup(){
    $names = ['Dylan Vercalsteren', 'Thibault Varga', 'Noa Jacquemin', 'Éleonore Koterko', 'Xavier-Philippe Renk'];
    $display_names = implode(', ', $names);

    return $display_names;
}

function addClass(){
    $file = getPage();

    if($file == 'index.php'){
        return "landing";
    } elseif($file == 'app.php'){
        return "application";
    } elseif($file == 'credits.php'){
        return "credits";
    } else{
        return "";
    }
}

function addRobotsMetadata(){
    $file = getPage();

    if($file == 'index.php'){
        return '<meta name="robots" content="index">';
    }   
}
?>