var playlist = {
  PearlJam: 'Evenflow',
  AliceInChains: 'Man in the Box'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}