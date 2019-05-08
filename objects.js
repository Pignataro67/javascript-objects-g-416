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

var playlist = { 'artist': 'Song' };

 function updatePlaylist(list, artist, song) {
  return Object.assign({}, list, {[artist]: song});
};

 function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
};