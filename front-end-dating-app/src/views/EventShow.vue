<template>
  <h1>Showing event {{ event.title }}</h1>
</template>

<script>
import EventService from '@/_services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
        console.log('*/*/*/*/*/*')
        console.log(this.event)
      })
      .catch(error => {
        console.log('*/*/*/*/*/*')
        console.log('Some error occured' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
