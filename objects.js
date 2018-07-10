var playlist = {
}

function updatePlaylist(obj, key, value) {
  playlist = obj[key] = value
  return playlist
}

function removeFromPlaylist(obj, key) {
  playlist = delete obj.key
  return playlist
}