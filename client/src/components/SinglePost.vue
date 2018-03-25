<template>
  <div :class="classData">
      <div class="single-post wow fadeInUp" data-wow-delay=".4s">
          <!-- Post Thumb -->
          <div class="post-thumb">
              <img :src="post.thumbnail" alt="">
          </div>
          <!-- Post Content -->
          <div class="post-content">
              <div class="post-meta d-flex">
                  <div class="post-author-date-area d-flex">
                      <!-- Post Author -->
                      <div class="post-author">
                      </div>
                      <!-- Post Date -->
                      <div class="post-date">
                          <a v-if="post.date" href="#">{{this.dateFormat(new Date(post.date*1000), "ddd, dd mmm yyyy")}}</a>
                      </div>
                  </div>
                  <!-- Post Comment & Share Area -->
                  <div class="post-comment-share-area d-flex">
                      <!-- Post Favourite -->
                      <div class="post-favourite" v-if="post.like_count">
                          <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i> {{post.like_count.count}}</a>
                      </div>
                      <!-- Post Comments -->
                      <div class="post-comments" v-if="post.comment_count">
                          <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> {{post.comment_count.count}}</a>
                      </div>
                      <!-- Post Share -->
                      <div class="post-share">
                          <a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
              <a href="#">
                  <p class="post-headline">{{post.text}}</p>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
var dateFormat = require('dateformat')

export default {
  name: 'SinglePost',
  props: ['post', 'class-data'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    dateFormat: dateFormat
    // TODO: Create methods that will be sent into Button component
  }
}
</script>
