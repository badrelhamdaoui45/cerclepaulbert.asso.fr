function charger_sections(id)
    {
	jQuery('#ajax_activite').html('');
    jQuery('#ajax_section').html('<div id="loading"><img src="'+stylesheet_directory+'/img/ajax-loader.svg"></div>');
	jQuery('html,body').animate({scrollTop: jQuery("#loading").offset().top-height_menu()}, 'fast' );
	jQuery.post(ajaxurl,{
			'action': 'charger_sections',
			'id_nom_activite': id
		},function(response){
				jQuery('#ajax_section').html(response);
				jQuery('html,body').animate({scrollTop: jQuery("#ajax_section").offset().top-height_menu()}, 'fast' );
			}
		);
    }
	
function charger_nom_activite(id)
    {
	jQuery('#ajax_activite').html('');
    jQuery('#ajax_nom_activite').html('<div id="loading"><img src="'+stylesheet_directory+'/img/ajax-loader.svg"></div>');
	jQuery('html,body').animate({scrollTop: jQuery("#loading").offset().top-height_menu()}, 'fast' );
	jQuery.post(ajaxurl,{
			'action': 'charger_nom_activite',
			'id_section': id
		},function(response){
				jQuery('#ajax_nom_activite').html(response);
				jQuery('html,body').animate({scrollTop: jQuery("#ajax_nom_activite").offset().top-height_menu()}, 'fast' );
			}
		);
    }
    
function charger_activite(id)
    {
    jQuery('#ajax_activite').html('<div id="loading"><img src="'+stylesheet_directory+'/img/ajax-loader.svg"></div>');
	jQuery('html,body').animate({scrollTop: jQuery("#loading").offset().top-height_menu()}, 'fast' );
	jQuery.post(ajaxurl,{
			'action': 'charger_activite',
			'id_activite': id
		},function(response){
				jQuery('#ajax_activite').html(response);
				jQuery('html,body').animate({scrollTop: jQuery("#ajax_activite").offset().top-height_menu()}, 'fast' );
				}
		);
    }