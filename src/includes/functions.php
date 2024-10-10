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
    } else{
        return "iLabrador";
    }
}

function addDescription(){
    $file = getPage();

    if($file == 'index.php'){
        return "";
    } elseif($file == 'app.php'){
        return "";
    } else{
        return "";
    }
}

function addTags(){
    $tags = ['iLab', 'Sensibilisation', 'Dylan Vercalsteren', 'Thibault Varga', 'Noa Jacquemin', 'Éleonore Koterko', 'Xavier-Philippe Renk', 'DWT', 'HEAJ', 'UX Design', 'UI Design', 'Design Web', 'Développement Web'];
    $display_tags = implode(', ', $tags);

    return $display_tags;
}

function addGroup(){
    $names = ['Dylan Vercalsteren', 'Thibault Varga', 'Noa Jacquemin', 'Éleonore Koterko', 'Xavier-Philippe Renk'];
    $display_names = implode(', ', $names);

    return $display_names;
}
?>