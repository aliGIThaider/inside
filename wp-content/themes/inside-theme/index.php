<? get_header(); ?>
	<!--[if lt IE 9]>
	<style>
		.wrapper {
			display: none;
		}
		footer {
			display: none;
		}

		body {
			background: gray
		}
	</style>
	<div style='text-align:center;'>
		<br><br><a href="#" class="logo" style="float:none;"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt=""></a><br><br><br><br><br>
		<a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode"
		   style="color:#fff; font-size:18px;font-weight:bold; text-decoration:underline;">
			You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today.
		</a>
	</div>
	<![endif]-->
<div class="wrapper">
	<header id="header">
		<div class="container">
				<?$title1 = get_field('title_1', false, false); ?>
				<? if( !empty($title1) ): ?>
					<p class="animated">
						<?php echo $title1; ?>
					</p>
				<? endif; ?>

				<?$title2 = get_field('title_2', false, false); ?>
				<? if( !empty($title2) ): ?>
					<h1 class="animated">
						<?php echo $title2; ?>
					</h1>
				<? endif; ?>

				<?$title3 = get_field('title_3', false, false); ?>
				<? if( !empty($title2) ): ?>
					<h2 class="animated">
						<?php echo $title3; ?>
					</h2>
				<? endif; ?>
			<a href="#" class="header-link">Impressum</a>
		</div>
	</header>
	<div class="navbar animated">
		<div class="container clearfix">
			<a href="<?php echo site_url(); ?>" class="logo"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt=""/></a>
			<nav>
				<ul>
					<li><a href="#first-sect" class="scrollto">Startseite</a></li>
					<li><a href="#kompetenzen" class="scrollto">Kompetenzen</a></li>
					<li><a href="#konzept" class="scrollto">Konzept</a></li>
					<li><a href="#uber-uns" class="scrollto">Über Uns</a></li>
					<li><a href="#kontakt" class="scrollto">Kontakt</a></li>
				</ul>
			</nav>
		</div>
	</div>

	<section class="first-slider-sect" id="first-sect">
		<div class="container clearfix animated">
			<div class="slider">
				<?php $slider = new WP_query(array('post_type' => 'slider', 'posts_per_page' => -1, 'order' => 'ASC')); ?>
				<?php if ($slider -> have_posts()) : ?>
				<div class="swiper-container">
					<div class="swiper-wrapper">
					<?php while ($slider -> have_posts()) : $slider -> the_post(); ?>

						<div class="swiper-slide">
							<?$image = get_field('img'); ?>
							<? if( !empty($image) ): ?>
								<img src="<?php echo $image['url']; ?>" alt=" <?php echo $image['alt']; ?>" title="<?php echo $image['title']; ?>"/>
							<? endif; ?>
						</div>

					<?php endwhile; ?>
					</div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
				<?php else: ?>
					<!-- no posts found -->
				<?php endif; ?>

			</div>
			<div class="text">
				<?php $screen1Title = get_field('title', 21); ?>
				<? if( !empty($screen1Title) ): ?>
					<h4>
						<? echo $screen1Title; ?>
					</h4>
				<? endif; ?>
				<?php $screen1Text = get_field('text', 21); ?>
				<? if( !empty($screen1Text) ): ?>
					<p>
						<? echo $screen1Text; ?>
					</p>
				<? endif; ?>
			</div>
		</div>
	</section>

	<section class="competencies-sect" id="kompetenzen">
		<div class="container">
			<?php $screen2Title = get_field('title', 34); ?>
			<? if( !empty($screen2Title) ): ?>
				<h3 class="animated">
					<? echo $screen2Title; ?>
				</h3>
			<? endif; ?>
			<?php $screen2Descrip = get_field('description', 34); ?>
			<? if( !empty($screen2Descrip) ): ?>
				<p class="animated sect-descrip">
					<? echo $screen2Descrip; ?>
				</p>
			<? endif; ?>
			<span class="animated sect-title-line"></span>
			<div class="competencies-block-wrap clearfix">

				<?php $competBlock = new WP_query(array('post_type' => 'kompetenzen', 'posts_per_page' => 4, 'order' => 'ASC')); ?>
				<?php if ( $competBlock -> have_posts() ) : while ($competBlock ->  have_posts() ) : $competBlock -> the_post(); ?>

					<a href="<? the_permalink(); ?>" class="competencies-block animated">
						<span class="title"><?php the_title(); ?></span>
						<?php echo get_the_post_thumbnail(); ?>
						<?php the_content(); ?>
					</a>

				<?php endwhile; ?>
				<!-- post navigation -->
				<?php else: ?>
				<!-- no posts found -->
				<?php endif; ?>

			</div>
		</div>
	</section>

	<section class="concept-sect" id="konzept">
		<div class="container">
			<?php $screen2Title = get_field('title', 36); ?>
			<? if( !empty($screen2Title) ): ?>
				<h3 class="animated">
					<? echo $screen2Title; ?>
				</h3>
			<? endif; ?>
			<?php $screen2Descrip = get_field('description', 36); ?>
			<? if( !empty($screen2Descrip) ): ?>
				<p class="animated sect-descrip">
					<? echo $screen2Descrip; ?>
				</p>
			<? endif; ?>
			<span class=" animated sect-title-line"></span>
			<div class="concept-img animated">
				<div class="bulb-wrap">
					<img src="<?php echo get_template_directory_uri(); ?>/img/bulb.png" alt="" class="bulb"/>
					<img src="<?php echo get_template_directory_uri(); ?>/img/bulb-hover.png" alt="" class="bulb hover"/>
				</div>

				<img src="<?php echo get_template_directory_uri(); ?>/img/conzept-arrow.png" alt="" class="arrow"/>
				<img src="<?php echo get_template_directory_uri(); ?>/img/conzept-arrow-mobile.png" alt="" class="arrow-mobile"/>

				<div class="konzept-wrap">
					<img src="<?php echo get_template_directory_uri(); ?>/img/konzept.png" alt="" class="konzept"/>
					<img src="<?php echo get_template_directory_uri(); ?>/img/konzept-hover.png" alt="" class="konzept hover"/>
				</div>

				<div class="puzzle-wrap">
					<img src="<?php echo get_template_directory_uri(); ?>/img/puzzle.png" alt="" class="puzzle"/>
					<img src="<?php echo get_template_directory_uri(); ?>/img/puzzle-hover.png" alt="" class="puzzle hover"/>
				</div>
			</div>
			<div class="concept-blocks-wrap clearfix animated">
				<?php $conceptBlock = new WP_query(array('post_type' => 'concept', 'posts_per_page' => 5, 'order' => 'ASC')); ?>
				<?php if ( $conceptBlock -> have_posts() ) : while ($conceptBlock ->  have_posts() ) : $conceptBlock -> the_post(); ?>
					<div class="concept-block">
						<div class="line"><span></span></div>
						<p class="title"><?php the_title(); ?></p>
						<div class="text">
							<?php the_content(); ?>
						</div>
					</div>
				<?php endwhile; ?>
				<!-- post navigation -->
				<?php else: ?>
				<!-- no posts found -->
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="about-us-section" id="uber-uns">
		<div class="container">
			<?php $screen2Title = get_field('title', 38); ?>
			<? if( !empty($screen2Title) ): ?>
				<h3 class="animated">
					<? echo $screen2Title; ?>
				</h3>
			<? endif; ?>
			<?php $screen2Descrip = get_field('description', 38); ?>
			<? if( !empty($screen2Descrip) ): ?>
				<p class="animated sect-descrip">
					<? echo $screen2Descrip; ?>
				</p>
			<? endif; ?>
			<span class="animated sect-title-line"></span>
			<div class="crewmans-wrap clearfix">
				<?php $crewman = new WP_query(array('post_type' => 'crewman', 'posts_per_page' => 3, 'order' => 'ASC')); ?>
				<?php if ( $crewman -> have_posts() ) : while ($crewman ->  have_posts() ) : $crewman -> the_post(); ?>
					<a href="#" class="crewman-block animated">
                    <span class="photo-wrap">
                        <span class="bg"></span>
	                    <?php echo get_the_post_thumbnail(); ?>
                    </span>
						<span class="title"><?php the_title(); ?></span>
						<?php $crewmanSubtitle = get_field('subtitle'); ?>
						<? if( !empty($crewmanSubtitle) ): ?>
							<span class="subtitle"><? echo $crewmanSubtitle; ?></span>
						<? endif; ?>

						<?php $kernkompetenzen = get_field('kernkompetenzen'); ?>
						<? if( !empty($kernkompetenzen) ): ?>
							<span class="section">
		                        <i>Kernkompetenzen:</i>
								<? echo $kernkompetenzen; ?>
		                    </span>
						<? endif; ?>

						<?php $privates = get_field('privates'); ?>
						<? if( !empty($privates) ): ?>
							<span class="section">
		                        <i>Privates:</i>
								<? echo $privates; ?>
		                    </span>
						<? endif; ?>
					</a>
				<?php endwhile; ?>
				<!-- post navigation -->
				<?php else: ?>
				<!-- no posts found -->
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="contact-sect" id="kontakt">
		<div class="container">
			<?php $screen2Title = get_field('title', 40); ?>
			<? if( !empty($screen2Title) ): ?>
				<h3 class="animated">
					<? echo $screen2Title; ?>
				</h3>
			<? endif; ?>
			<?php $screen2Descrip = get_field('description', 40); ?>
			<? if( !empty($screen2Descrip) ): ?>
				<p class="animated sect-descrip">
					<? echo $screen2Descrip; ?>
				</p>
			<? endif; ?>
			<span class="animated sect-title-line"></span>
			<div class="clear"></div>
			<div class="contact-wrap clearfix">
				<div class="contact-form animated">
					<form action="#">
						<input type="text" class="input input-name" placeholder="Your name"/>
						<input type="text" class="input input-phone" placeholder="Telefon:"/>
						<input type="text" class="input input-email" placeholder="E-mail:"/>
						<textarea name="message" id="message" cols="30" rows="4" class="input input-message" placeholder="Your message..."></textarea>
						<button class="btn-send">SEND</button>
					</form>
				</div>
				<div class="contact-info animated">
					<?php $contactInfoTitle = get_field('contacts_info_title', 40); ?>
					<? if( !empty($contactInfoTitle) ): ?>
						<p class="title">
							<? echo $contactInfoTitle; ?>
						</p>
					<? endif; ?>
					<strong>Kontakt:</strong>
					<?php $address = get_field('address', 40); ?>
					<? if( !empty($address) ): ?>
						<address>
							<span class="icon"><i></i></span>
							<? echo $address; ?>
						</address>
					<? endif; ?>
					<?php $email = get_field('email', 40); ?>
					<? if( !empty($email) ): ?>
						<p class="email">
							<span class="icon"><i></i><i class="hover"></i><i class="active"></i></span>
							E-Mail:
							<a href="mailto:<? echo $email; ?>"><? echo $email; ?></a>
						</p>
					<? endif; ?>
					<?php $phone = get_field('phone', 40); ?>
					<? if( !empty($phone) ): ?>
						<p class="phone">
							<span class="icon"><i></i><i class="hover"></i><i class="active"></i></span>
							Tel.:
							<a href="tel:<? echo $phone; ?>"><? echo $phone; ?></a>
						</p>
					<? endif; ?>
				</div>
				<?php $fileLink = get_field('file', 64); ?>
				<? if( !empty($fileLink) ): ?>
					<a href="<? echo $fileLink['url']; ?>" class="contacts-link">
						Datenschutzerklärung <br/>
						Preisliste
					</a>
				<? endif; ?>

			</div>
		</div>
	</section>

	<footer>
		<div class="container clearfix">
			<?php $kontakt = get_field('kontakt', 42); ?>
			<? if( !empty($kontakt) ): ?>
				<div class="footer-block animated">
					<h6>Kontakt:</h6>
					<? echo $kontakt; ?>
				</div>
			<? endif; ?>
			<?php $rgesellschaft = get_field('rgesellschaft', 42); ?>
			<? if( !empty($rgesellschaft) ): ?>
				<div class="footer-block animated">
					<h6>RGesellschaft:</h6>
					<? echo $rgesellschaft; ?>
				</div>
			<? endif; ?>
			<?php $rechtliches = get_field('rechtliches', 42); ?>
			<? if( !empty($rechtliches) ): ?>
				<div class="footer-block animated">
					<h6>Rechtliches:</h6>
					<? echo $rechtliches; ?>
				</div>
			<? endif; ?>
			<?php $linksetzung = get_field('linksetzung', 42); ?>
			<? if( !empty($linksetzung) ): ?>
				<div class="footer-block animated">
					<h6>Linksetzung:</h6>
					<? echo $linksetzung; ?>
				</div>
			<? endif; ?>
			<?php $copyright = get_field('copyright', 42); ?>
			<? if( !empty($copyright) ): ?>
				<div class="footer-block animated copyright-block">
					<h6>Copyright:</h6>
					<? echo $copyright; ?>
				</div>
			<? endif; ?>
		</div>
		<div class="container footer-bottom animated">
			<div class="footer-social">
				<?php $fb_link = get_field('fb_link', 42); ?>
				<? if( !empty($fb_link) ): ?>
					<a href="<? echo $fb_link; ?>" class="fb">
						<i></i>
						<i class="hover"></i>
						<i class="active"></i>
					</a>
				<? endif; ?>
				<?php $tweet_link = get_field('tweet_link', 42); ?>
				<? if( !empty($tweet_link) ): ?>
					<a href="<? echo $tweet_link; ?>" class="tweet">
						<i></i>
						<i class="hover"></i>
						<i class="active"></i>
					</a>
				<? endif; ?>
				<?php $dribbble_link = get_field('dribbble_link', 42); ?>
				<? if( !empty($dribbble_link) ): ?>
					<a href="<? echo $dribbble_link; ?>" class="dribble">
						<i></i>
						<i class="hover"></i>
						<i class="active"></i>
					</a>
				<? endif; ?>
				<?php $linkedin_link = get_field('linkedin_link', 42); ?>
				<? if( !empty($linkedin_link) ): ?>
					<a href="<? echo $linkedin_link; ?>" class="linkedin">
						<i></i>
						<i class="hover"></i>
						<i class="active"></i>
					</a>
				<? endif; ?>
				<?php $g_plus_link = get_field('g_plus_link', 42); ?>
				<? if( !empty($g_plus_link) ): ?>
					<a href="<? echo $g_plus_link; ?>" class="g-plus">
						<i></i>
						<i class="hover"></i>
						<i class="active"></i>
					</a>
				<? endif; ?>
			</div>
			<?php $copyOneLine = get_field('copyright_one_line', 42); ?>
			<? if( !empty($copyOneLine) ): ?>
				<div class="copyright">
					<? echo $copyOneLine; ?>
				</div>
			<? endif; ?>
			<a href="#header" class="scrollTop scrollto">
				<i></i>
				<i class="hover"></i>
				<i class="active"></i>
			</a>
		</div>
	</footer>

</div>

<? get_footer(); ?>