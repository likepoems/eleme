<template>
  <span>{{location}}</span>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'Geo',
  data () {
    return {
      location: ''
    }
  },
  created () {
    let location = new BMap.Geolocation()
    location.getCurrentPosition((r) => {
      let point = new BMap.Point(r.point.Ing, r.point.lat)
      let myGeo = new BMap.Geocoder()
      myGeo.getLocation(point, (res) => {
        this.location = res.address
      })
    })
  }
}
</script>

<style>

</style>
