<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  created() {
    console.log('*/*/*/*/*/*')
    console.log(axios)
    console.log('rafa')
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('Something wrong happened' + error)
      })
  }
}
</script>

<style lang="scss" scoped></style>
