<template>
  <!-- ****** Blog Area Start ****** -->
    <section class="blog_area section_padding_0_80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-12">
                    <div class="row">
                        <!-- Single Post Heading -->
                       <v-single-post v-if="postHeading" :post="postHeading" :class-data="'col-md-8 mx-auto col-sm-12'"></v-single-post>
                    </div>
                    <div class="row">
                        <!-- Single Post -->
                        <v-single-post v-for="post in posts" :key="post.media_id" :post="post" :class-data="'col-md-4 col-sm-12'"></v-single-post>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ****** Blog Area End ****** -->
</template>

<script>
import SinglePost from '@/components/SinglePost'
import InstagramService from '@/services/InstagramService'

export default {
  name: 'Blog',
  data () {
    return {
      postHeading: {},
      posts: []
    }
  },
  components: {
    'v-single-post': SinglePost
  },
  methods: {
    // TODO: Create methods that will be sent into Button component
    updatePostData: function (data) {
      this.$set(this, 'postHeading', data[0])
      this.$set(this, 'posts', data.slice(1))
    },
    async getInstagramPosts () {
      const response = await InstagramService.fetchPosts('kamisbatik')
      this.updatePostData(response.data)
    }
  },
  created () {
    this.getInstagramPosts()
  }
}
</script>
