var playlist = {}

function updatePlaylist(obj, key, value) {
  obj = obj[key] = value
  return playlist
}

function removeFromPlaylist(obj, key) {
  playlist = delete obj.key
  return playlist
}