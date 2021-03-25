<template>
  <div>Not found</div>
</template>

<script>
export default {
  name: 'Categorias',
  asyncData ({ redirect }) {
    return redirect('/404')
  }
}
</script>
