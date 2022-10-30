<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>
<body class="antialiased">
<?php get_header(); ?>
<header class="entry-header mb-4">
	<h2 class="entry-title text-5xl md:text-5xl font-extrabold leading-tight mb-1 text-center mt-10">
		404
	</h2>
	<p class="text-gray-800 text-2xl md:text-3xl font-light mb-8 text-center">
		<?php _e( 'Sorry, the page you are looking for could not be found.', 'tailpress' ); ?>
		<br>
		<br>
		<a href="<?php echo get_bloginfo( 'url' ); ?>" class="btn btn-theme px-4 py-2 rounded text-center text-white">
		<?php _e( 'Go Home', 'tailpress' ); ?>
	</a>
	</p>
</header>
<?php get_footer(); ?>
</body>
</html>
