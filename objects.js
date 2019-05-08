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

var playlist = {
  'Jack Johnson': 'Banana Pancakes',
};

 function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}