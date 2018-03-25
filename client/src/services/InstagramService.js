import Api from '@/services/Api'

export default {
  fetchPosts (tag) {
    return Api().get('instagram/fetch/' + tag)
  }
}
