var playlist = {}

function updatePlaylist(obj, key, value) {
  obj = obj[key] = value
  return playlist
}

function removeFromPlaylist(obj, key) {
  obj = delete obj.key
  return playlist
}