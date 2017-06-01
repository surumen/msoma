(function ($) {
	$(function() {
		user_alert_check_alerts = function(){
			//$.jStorage.deleteKey("UserAlert_closed");
			user_alert_closed_nids = $.jStorage.get("UserAlert_closed");
			$.getJSON(Drupal.settings.basePath + Drupal.settings.pathPrefix + Drupal.settings.user_alert.url_prefix + 'js/user-alert/get-message', function( data ) {
				var items = [];
				if(data){
					$(document).trigger('UserAlert.json_successful');
					$.each( data, function( key, val ) {
						if(user_alert_closed_nids && $.inArray($(val).data('user-alert-nid').toString(),user_alert_closed_nids) == -1 || !user_alert_closed_nids){
							items.push(val);
						}
					});
					if(items){
						$('.block-user-alert').html(items.join(""));
						$(document).trigger('UserAlert.content_added');
					}
				}
			});
			$('body').delegate('div.user-alert-close a', 'click', function() {
				id = $(this).attr('rel');
				$('#user-alert-' + id).fadeOut('slow',function(){
					$(document).trigger('UserAlert.alert_closed');
				});
				if($.isArray(user_alert_closed_nids)){
					user_alert_closed_nids.push(id);
					$.jStorage.set("UserAlert_closed", user_alert_closed_nids, {TTL: 31536000000});
				}else{
					user_alert_closed_nids = [id];
					$.jStorage.set("UserAlert_closed", user_alert_closed_nids, {TTL: 31536000000});
				}
			});
		}();
	});
}(jQuery));
;
/**
 * @file
 * AddThis javascript actions.
 */

(function ($) {
  Drupal.behaviors.addthis = {
    scriptLoaded: false,

    attach: function(context, settings) {

      // The addthis configuration is not loaded but the settings are passed
      // to do so.
      if (!this.isConfigLoaded() && this.isSettingsLoaded()) {
        // Initialize config.
        this.initConfig();

        // Load widget js.
        if (!this.scriptLoaded) {
          this.loadDomready();
        }
      }
      // The addthis configuration is not loaded but no setting are available
      // to load anything.
      else if(!this.isConfigLoaded() && !this.isSettingsLoaded()) {
        // Do nothing
      }

      // Trigger ready on ajax attach.
      if (context != window.document) {
        Drupal.behaviors.addthis.ajaxLoad(context, settings);
      }

    },

    // Returns if the settings defined by the addthis module are loaded.
    isSettingsLoaded: function () {
      if (typeof Drupal.settings.addthis == 'undefined') {
        return false;
      }
      return true;
    },

    // Returns if the configuration variables needed for widget.js are defined.
    isConfigLoaded: function() {
      if (typeof addthis_config == 'undefined' || typeof addthis_share == 'undefined') {
        return false;
      }
      return true;
    },

    initConfig: function () {
      addthis_config = Drupal.settings.addthis.addthis_config;
      addthis_share = Drupal.settings.addthis.addthis_share;
    },

    // Load the js library when the dom is ready.
    loadDomready: function() {
      // If settings asks for loading the script after the dom is loaded, then
      // load the script here.
      if (!this.scriptLoaded &&
          this.isConfigLoaded() &&
          Drupal.settings.addthis.domready) {
        $.getScript(Drupal.settings.addthis.widget_url, Drupal.behaviors.addthis.scriptReady);
      }
    },

    // Callback for loading the widget.js dynamically.
    scriptReady: function () {
      this.scriptLoaded = true;
    },

    // Called when a ajax request returned.
    ajaxLoad: function(context, settings) {
      if (typeof window.addthis != 'undefined' &&
          typeof window.addthis.toolbox == 'function')
      {
          window.addthis.toolbox('.addthis_toolbox');
      }
    }

  };

  // This load the config in time to run any addthis functionality.
  if (Drupal.behaviors.addthis.isConfigLoaded()) {
    addthis_config = Drupal.settings.addthis.addthis_config;
    addthis_share = Drupal.settings.addthis.addthis_share;
  }

  // Document ready in case we want to load AddThis into the dom after every
  // thing is loaded.
  //
  // Is executed once after the attach happened.
  $(document).ready(function() {
    Drupal.behaviors.addthis.loadDomready();
  });

}(jQuery));
;
