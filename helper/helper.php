<?php

 function parse_svg($svg) {
     $svg = str_replace('far ', '', $svg);
     $svg = str_replace('fas ', '', $svg);
     $svg = str_replace('fab ', '', $svg);
     $svg = str_replace('fa-', '', $svg);
     $svg = str_replace('fa ', '', $svg);

     return $svg;
 }

 function render_svg($svg, $svg_icons, $setAttributes = false, $extraProps = []) {
     // Parse SVG
     $svg = parse_svg($svg);

     // Example of the svgIcon array, in real usage this would be populated with the appropriate SVG data.
     $svgIcon = $svg_icons;

     $fontAwesome = isset($svgIcon[$svg]) ? $svgIcon[$svg] : null;

     if (!$fontAwesome) {
         return null;
     }

     $fontAwesomeSvg = isset($fontAwesome['svg']['brands']) ? $fontAwesome['svg']['brands'] : $fontAwesome['svg']['solid'];

     $viewBox = "0 0 " . $fontAwesomeSvg['width'] . " " . $fontAwesomeSvg['height'];
     $path = $fontAwesomeSvg['path'];

     $align = null;

     switch ($svg) {
         case 'align-center':
             $align = [
                 'fillRule' => 'evenodd',
                 'clipRule' => 'evenodd',
                 'd' => 'M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z'
             ];
             break;
         case 'align-left':
             $align = [
                 'fillRule' => 'evenodd',
                 'clipRule' => 'evenodd',
                 'd' => 'M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z'
             ];
             break;
         case 'align-right':
             $align = [
                 'fillRule' => 'evenodd',
                 'clipRule' => 'evenodd',
                 'd' => 'M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z'
             ];
             break;
         case 'align-justify':
             $align = [
                 'd' => 'M0 0H18V2H0V0ZM0 5.00001H18V7.00001H0V5.00001ZM0 10H18V12H0V10Z'
             ];
             break;
     }

     if ($align) {
         return '<svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">'
             . '<path fill-rule="' . $align['fillRule'] . '" clip-rule="' . $align['clipRule'] . '" d="' . $align['d'] . '"></path>'
             . '</svg>';
     }

     $extraPropsString = '';
     foreach ($extraProps as $key => $value) {
         $extraPropsString .= ' ' . $key . '="' . htmlspecialchars($value) . '"';
     }

     return !$setAttributes || $setAttributes === 'not_set' ?
         '<svg xmlns="https://www.w3.org/2000/svg" viewBox="' . $viewBox . '"' . $extraPropsString . '>'
         . '<path d="' . $path . '"></path>'
         . '</svg>' :
         '<svg width="20" height="20" xmlns="https://www.w3.org/2000/svg" viewBox="' . $viewBox . '"' . $extraPropsString . '>'
         . '<path d="' . $path . '"></path>'
         . '</svg>';
 }
