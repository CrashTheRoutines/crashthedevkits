<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
  <div class="container">
    <nav class="navbar">
      <div class="logo"><?php bloginfo('name'); ?></div>
      <?php
      function register_my_menus() {
        register_nav_menus([
            'header_menu' => 'Menu',
        ]);
    }
    add_action('after_setup_theme', 'register_my_menus');
    
        wp_nav_menu([
          'theme_location' => 'main_menu',
          'container' => false,
          'menu_class' => 'nav-links'
        ]);
      ?>
      <a href="#" class="quote-btn">Get a quote</a>
    </nav>
  </div>
</header>
