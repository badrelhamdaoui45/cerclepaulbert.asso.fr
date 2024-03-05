jQuery(function($){
	//profils pour la requete
	if(typeof scroll_category_wp != "undefined")
		{
		var data = Array();
		data[4] = { /* Search */
				page: 2,
				category_name: '',
				post_type: 'any',
				order: 'DESC',
				post_status: ['publish'],
				orderby: 'post_date',
				date_query: '',
				s: s_wp //Recherche
				};
		data[3] = { /* Archive */
				page: 2,
				category_name: '',
				post_type: 'post',
				order: 'DESC',
				post_status: ['publish'],
				orderby: 'post_date',
				date_query: date_query_wp, //Date
				s: ''
				};
		data[2] = { /* Actu par catégorie */
				page: 2,
				category_name: scroll_category_wp,
				post_type: 'post',
				order: 'DESC',
				post_status: ['publish'],
				orderby: 'post_date',
				date_query: '',
				s: ''
				};
		data[1] = { /* Agenda */
				page: 2,
				category_name: 'agenda',
				post_type: 'post',
				order: 'ASC',
				post_status: ['future','publish'],
				orderby: 'post_date',
				date_query: '',
				s: ''
				};
		data[0] = { /* Accueil */
				page: 2,
				category_name: 'accueil',
				post_type: 'post',
				order: 'DESC',
				post_status: ['publish'],
				orderby: 'post_date',
				date_query: '',
				s: ''
				};
		$('.post-listing').append( '<span class="load-more"></span>' );
		var button = $('.post-listing .load-more');
		var loading = false;
		var scrollHandling = {
			allow: true,
			reallow: function() {
				scrollHandling.allow = true;
			},
					delay: 400 //(milliseconds) adjust to the highest acceptable value
			};
		$(window).on("scroll", function(){
			if( ! loading && scrollHandling.allow ) {
				scrollHandling.allow = false;
				setTimeout(scrollHandling.reallow, scrollHandling.delay);
				var offset = $(button).offset().top - $(window).scrollTop();
				if( 2000 > offset ) {
					loading = true;
					$('.post-listing').append( '<div id="loading"><img src="' + chemin_theme + '/img/ajax-loader.svg"></div>' );
					data[profil_scroll]['action'] = 'be_ajax_load_more';
					data[profil_scroll]['nonce'] = beloadmore.nonce;
					data[profil_scroll]['query'] = beloadmore.query;
					$.post(beloadmore.url, data[profil_scroll], function(res) {
						if( res.success) {
							$('.post-listing #loading').remove();
							$('.post-listing').append( res.data );
							$('.post-listing').append( button );
							data[profil_scroll].page = data[profil_scroll].page + 1;
							loading = false;
						}
						else
						{
						$('.post-listing #loading').remove();
						}
					});

				}
			}		
		});
		}
});