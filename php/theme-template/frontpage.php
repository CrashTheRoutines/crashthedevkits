<?php get_header(); ?>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Theme Name</h1>
      <p>Lorem ipsum...</p>
      <a href="#" class="connect-btn">Let's connect →</a>
    </div>
    <div class="hero-image">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/hero_image.png" alt="Luxury Car" />
    </div>
  </div>
</section>

<!-- Other Sections -->

<!-- Forms -->
<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
  <input type="hidden" name="action" value="custom_form_submit">
  <input type="text" name="username" placeholder="Ваше имя">
  <input type="email" name="email" placeholder="Ваш Email">
  <button type="submit">Отправить</button>
</form>

<?php get_footer(); ?>
