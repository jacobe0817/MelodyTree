cf.writeAsync('cf_async_679088979', '<table align="center" style="letter-spacing: normal; direction:ltr; display: table; border: 0 !important; cursor: pointer !important; width: 100% !important; max-width: 500px !important; height: 50px !important; margin: 0 auto !important; font-family: Trebuchet MS, Arial, Helvetica !important; line-height: 1.5 !important; background: transparent !important; border-collapse: collapse !important; white-space: normal !important; font-size: 0em !important;" onclick="window.open(\'https://srv.tunefindforfans.com/showads/track/clk.php?cid=46717782&aid=100000769&adid=12908295&creative_id=500125391&artist=Adele&song=&search=&b=Firefox_94&cs=1&t=16378090079866&uri=https%3A%2F%2Fwww.allmusic.com%2Fartist%2Fadele-mn0000503460&subtag=&ldmo=&caph=0&capv=0&url=https://www.amazon.com/gp/dmusic/promotions/AmazonMusicUnlimited/?tag=100000769us-20\');">  <tbody style="padding: 0 !important; border: none !important; background: transparent;">  <tr style="padding: 0 !important; border: none !important; background: transparent;">      <td style="padding: 0 0 0 5px !important; border: 0 !important; background: transparent; text-align: right !important; vertical-align: middle !important; width: 40px !important;">        <div class="cf_class" style="width: 40px; height: 40px !important; border-radius: 50% !important; background-color: #e4e4e4 !important; position: relative !important; right: -2px !important;">            <div class="cf_class" style="text-align: right; position: relative; top: 6px; left: -3px;">               <svg style="display:initial;" width="30" height="30" viewBox="0 0 32 32">                 <path d="M6 4l20 12-20 12z" style="stroke-width:0;fill:#000;"/>               </svg>            </div>         </div>      </td>      <td style="padding: 0 !important; border: 0 !important; background: transparent; text-align: center !important; vertical-align: middle !important;">        <div class="cf_class" style="text-align: center; color: #000 !important; padding: 0px 8px !important; font-size: 15px !important; font-weight: bold !important; line-height: 1.5;">          Play Adele         </div>         <div class="cf_class" style="text-align: center; color: #616161 !important; font-size: 12px !important; border-top: 2px solid  #b1b1b1 !important; line-height: 1.5;">            on Amazon Music Unlimited (ad)         </div>      </td>      <td style="padding: 0 5px 0 0 !important; border: 0 !important; background: transparent; text-align: left !important; vertical-align: middle !important; width: 40px !important;">        <div class="cf_class" style="width: 40px; height: 40px; border-radius: 50%; background-color: #e4e4e4; position: relative !important; left: -2px !important;">            <div class="cf_class" style="text-align: left; position: relative; top: 8px; right: -7px;">               <svg width="25" height="25" viewBox="0 0 75 75">                  <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#000;stroke-width:5;stroke-linejoin:round;fill:#000;"/>                    <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#000;stroke-width:5;stroke-linecap:round"/>               </svg>            </div>         </div>      </td>   </tr></tbody></table>');cf.pixel('https://srv.tunefindforfans.com/showads/track/imp.php?cid=46717782&aid=100000769&artist=Adele&song=&search=&b=Firefox_94&cs=1&uri=https%3A%2F%2Fwww.allmusic.com%2Fartist%2Fadele-mn0000503460&t=1637809008&subtag=&ldmo=&adid=12908295&creative_id=500125391&caph=0&capv=0&atv=old');			if(!window.au_dropped) {
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
			}cf.used_campaigns.push(12908295);cf.used_formats.push('1x1');