cf.writeAsync('cf_async_530340727', '<style> .cf_apple_plain { padding: 0 !important; border: none !important; background-color: transparent; }</style><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">  <table class="cf_apple_plain" align="center" style="cursor: pointer !important; width: 100% !important; height: 50px !important; max-width: 400px; margin: 0 auto !important; font-family: Trebuchet MS, Arial, Helvetica; border-collapse: collapse !important; white-space: normal !important; line-height: 1.5 !important;" onclick="window.open(\'https://srv.tunefindforfans.com/showads/track/clk.php?cid=46717782&aid=100000769&adid=12908936&creative_id=500123965&artist=King+Crimson&song=&search=&b=Firefox_94&cs=1&t=16377846762289&uri=https%3A%2F%2Fwww.allmusic.com%2Fartist%2Fking-crimson-mn0000076057&subtag=&ldmo=&caph=0&capv=0&url=https://www.bandsintown.com/King+Crimson?came_from=307&utm_medium=web&utm_source=tonefuse_floating&utm_campaign=track&trigger=track\');"><tbody class="cf_apple_plain">       <tr>      <td class="cf_apple_plain" style="text-align: right; vertical-align: middle !important; width: 40px !important;">        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #e4e4e4; position: relative !important; right: -2px !important;">          <i class="fa fa-music" aria-hidden="true" style="color: #000; font-size: 24px !important; position: relative; top: 7px; right: 11px; font-family: FontAwesome !important; margin: auto; padding: 0; width: auto;"></i>        </div>      </td>      <td class="cf_apple_plain" style="text-align: center !important; vertical-align: middle !important;">        <div style="color: #000 !important; padding: 0px 8px; font-size: 15px; font-weight: bold;">          Track King Crimson        </div>        <div style="color: #616161; font-size: 12px; border-top: 2px solid #b1b1b1;">            on Bandsintown        </div>      </td>      <td class="cf_apple_plain" style="text-align: left !important; vertical-align: middle !important; width: 40px !important;">        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #e4e4e4; position: relative !important; left: -2px !important;">          <i class="fa fa-volume-up" aria-hidden="true" style="color: #000; font-size: 24px !important; position: relative; top: 8px; left: 8px; font-family: FontAwesome !important; margin: auto; padding: 0; width: auto;"></i>        </div>      </td>     </tr>  </tbody></table>');cf.pixel('https://srv.tunefindforfans.com/showads/track/imp.php?cid=46717782&aid=100000769&artist=King+Crimson&song=&search=&b=Firefox_94&cs=1&uri=https%3A%2F%2Fwww.allmusic.com%2Fartist%2Fking-crimson-mn0000076057&t=1637784676&subtag=&ldmo=&adid=12908936&creative_id=500123965&caph=0&capv=0&atv=old');			if(!window.au_dropped) {
				window.au_dropped = true;
				var audigent_url = '//a.ad.gt/api/v1/u/matches/95?url=' + encodeURIComponent(window.location.href) + "&ref=" + encodeURIComponent(document.referrer);
				cf.include(audigent_url, function() {
					if (cf.vars.artist) {
						window.au = window.au || []; window.au.push({'category': 'tags', 'action': ["ARTIST - " + cf.vars.artist]});
					} else {
						// If this is a ToneFuse ad:
						// cf.vars.artist is not present by the time this function gets called
						// So we use the data stored in cf.adunits for this ad unit
						if (cf.adunits[100000769].artist) {
							window.au = window.au || []; window.au.push({'category': 'tags', 'action': ["ARTIST - " + cf.adunits[100000769].artist]});
						}
					}
				});
			}cf.used_campaigns.push(12908936);cf.used_formats.push('1x1');