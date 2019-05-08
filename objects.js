// var playlist = {
//   PearlJam: 'Evenflow',
//   AliceInChains: 'Man in the Box'
// };

// function updatePlaylist(playlist, artist, song) {
//   playlist[artist] = song
//   return playlist
// }

// function removeFromPlaylist(playlist, artist) {
//   delete playlist[artist]
//   return playlist
// }

var playlist = { "Lady Gaga": "Born This Way" };

 function updatePlaylist(playlist, artist, song) { 
  return Object.assign(playlist, { [artist]: song });
}

 function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
