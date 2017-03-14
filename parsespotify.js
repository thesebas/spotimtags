var apage = $('#album-page .header-album');
var albumtitle = $('h1.h-title', apage).innerText;
var album = $('#album-tracks .tracklist-album');
var artist = $('a[data-uri^="spotify:artist:"]', apage);
var artistName = artist.innerText;
var artistId = artist.getAttribute('data-uri');
var tracks = $$('tr[data-list-item]', album).map(function (e) {
		var d = JSON.parse(e.getAttribute('data-log-data'));
		var dur = $('.tl-time', e).innerText;
		dur = dur.split(':');
		dur = parseInt(dur[0], 10)*60+parseInt(dur[1], 10);
		return {
			"@" : d['target_uri'],
			"ALBUM" : albumtitle,
			"ARTIST" : artistName,
			"spotify:artist" : artistId,
			"TITLE" : d['name'],
			"TRACKNUMBER" : "" + (d['index'] + 1),
			"spotify:album" : album.getAttribute('data-uri'),
			"DURATION" : ""+dur
		};
	});
JSON.stringify(tracks);
