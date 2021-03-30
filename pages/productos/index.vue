<template>
  <div>Not found</div>
</template>

<script>
export default {
  name: 'Productos',
  asyncData ({ redirect }) {
    return redirect('/404')
  }
}
</script>
