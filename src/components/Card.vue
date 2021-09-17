<template>
  <div
    class="bg-white h-full max-h-sm w-full max-w-md px-6 pt-4 pb-10 md:px-0 flex flex-col justify-center sm:shadow-medium rounded"
  >
    <div class="flex flex-col justify-center">
      <slot name="card-header"></slot>

      <slot name="form"></slot>

      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>
