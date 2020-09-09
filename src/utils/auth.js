import storage from '@/assets/js/storage'

export function getopenID() {
  return storage.get('openID')
}

export function setopenID(openid) {
  storage.set('openID', openid)
}

export function removeopenID() {
  storage.remove('openID')
}
