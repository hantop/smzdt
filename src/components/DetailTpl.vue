<template>
  
</template>
<script>
export default {
  created () {
    fetch('/forward.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*'
      },
      body: 'url=/CaiyuPartner/api/v1/invest/platform/valid&data[pid]=' + this.$route.params.pid

    }).then(function (res) {
      return res.json()
    })
      .then(function (data) {
        console.log(data)
        console.log(data.code)
      })
    //   fetch('/send', {
    //     method: 'POST',
    //     // mode: 'same-origin',
    //     mode: 'cors',
    //     body: JSON.stringify({ name: input.value }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => {
    //     return res.json;
    //   }).then(data => {
    //     console.log(data);
    //   }).catch(err => console.log(err));
  }
}
</script>

