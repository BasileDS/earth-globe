<?php
/*
Plugin Name: Three.js Viewer
Plugin URI:  https://pactandpartners.com/fr/threejs-viewer
Description: A plugin to display Three.js content on a WordPress page.
Version:     1.0
Author:      Basile Dos Santos
Author URI:  https://pactandpartners.com/fr
License:     GPL2
*/

function custom_js_enqueue_script() {
    wp_enqueue_script('threejs', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', array(), 'r128', true);
    wp_enqueue_script('cursors-js', plugin_dir_url(__FILE__) . 'scripts/utils/cursors.js', array(), '1.0', true);
    wp_enqueue_script('resize-js', plugin_dir_url(__FILE__) . 'scripts/utils/resize.js', array(), '1.0', true);
    wp_enqueue_script('scene-js', plugin_dir_url(__FILE__) . 'scripts/utils/scene.js', array(), '1.0', true);
    wp_enqueue_script('camera-js', plugin_dir_url(__FILE__) . 'scripts/utils/camera.js', array(), '1.0', true);
    wp_enqueue_script('lights-js', plugin_dir_url(__FILE__) . 'scripts/utils/lights.js', array(), '1.0', true);
    wp_enqueue_script('textures-js', plugin_dir_url(__FILE__) . 'scripts/utils/textures.js', array(), '1.0', true);
    wp_enqueue_script('sphere-template-js', plugin_dir_url(__FILE__) . 'scripts/templates/sphere.js', array(), '1.0', true);
    wp_enqueue_script('pointers-js', plugin_dir_url(__FILE__) . 'scripts/utils/pointers.js', array(), '1.0', true);
    wp_enqueue_script('sphere-factory-js', plugin_dir_url(__FILE__) . 'scripts/factory/sphereFactory.js', array(), '1.0', true);
    wp_enqueue_script('mouse-js', plugin_dir_url(__FILE__) . 'scripts/utils/mouse.js', array(), '1.0', true);
    wp_enqueue_script('animate-js', plugin_dir_url(__FILE__) . 'scripts/animate.js', array(), '1.0', true);
    wp_enqueue_script('threejs-viewer-script', plugin_dir_url(__FILE__) . 'threejs-viewer-script.js', array(), '1.0', true);
}

function threejs_viewer_shortcode() {
    // Enqueue scripts when the shortcode is used
    custom_js_enqueue_script();

    // Return the HTML content for the viewer
    return '<div id="threejs-viewer"></div>';
}

add_shortcode('threejs_viewer', 'threejs_viewer_shortcode');
