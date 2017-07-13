var album = 
{
	"album_type": "album",
	"artists": "Thin Lizzy",
	"available_markets": "ISO 3166-2:US, ISO 3166-2:GB",
	"external_urls": "",
	"href": "https://api.spotify.com/v1/albums/6Cf545T4jkaiyvMnTRPOB2",
	"id": "6Cf545T4jkaiyvMnTRPOB2",
	"images": "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Thin_Lizzy_-_Jailbreak.jpg/220px-Thin_Lizzy_-_Jailbreak.jpg",
	"name": "Jailbreak",
	"release_date": "26 March 1976",
	"release_date_precision": "day",
	"type": "album",
	"uri": "spotify:track:6Cf545T4jkaiyvMnTRPOB2"
}

var one = document.getElementById('one');
one.innerHTML = album.name;

var two = document.getElementById('two');
two.innerHTML = album.artists;

var three = document.getElementById('three');
three.innerHTML = album.release_date;