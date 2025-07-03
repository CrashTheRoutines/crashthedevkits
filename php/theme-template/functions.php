<?php
function themename_enqueue_styles() {
    wp_enqueue_style('themename-main-style', get_stylesheet_uri());
    wp_enqueue_style('themename-custom-style', get_template_directory_uri() . 'style.css');

    // Modules
    wp_enqueue_style('header-style', get_template_directory_uri() . '/css/header.css');
    wp_enqueue_style('footer-style', get_template_directory_uri() . '/css/footer.css');
    wp_enqueue_style('blocks-style', get_template_directory_uri() . '/css/blocks.css');
}

add_action('wp_enqueue_scripts', 'themename_enqueue_styles');

function themename_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus([
        'main_menu' => 'Main Menu',
    ]);
}

add_action('after_setup_theme', 'themename_theme_setup');

// Add Scripts & Styles

function themename_scripts() {
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/css/custom.css');
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');

// Icons

add_theme_support('post-thumbnails');

// Register Menu

function register_my_menus() {
    register_nav_menus(array(
        'header-menu' => __('Header Menu'),
        'footer-menu' => __('Footer Menu'),
    ));
}
add_action('init', 'register_my_menus');

// Add Widgets

function my_widgets_init() {
    register_sidebar(array(
        'name' => 'Sidebar',
        'id' => 'sidebar-1',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
    ));
}
add_action('widgets_init', 'my_widgets_init');

// Add Forms

function handle_custom_form() {
    $name = sanitize_text_field($_POST['username']);
    $email = sanitize_email($_POST['email']);

    // можно отправить email, записать в БД и т.д.
    wp_mail('you@example.com', 'Новая заявка', "Имя: $name, Email: $email");

    wp_redirect(home_url('/thank-you'));
    exit;
}
add_action('admin_post_nopriv_custom_form_submit', 'handle_custom_form');
add_action('admin_post_custom_form_submit', 'handle_custom_form');
