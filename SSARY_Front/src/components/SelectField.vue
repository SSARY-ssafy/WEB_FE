<template>
  <div class="input-wrapper">
    <label :for="id">{{ labelText }}</label>
    <span v-if="cautionText" :class="{ red: isRed }" class="caution">
      {{ cautionText }}
    </span>
    <select
      :id="id"
      :name="name"
      :value="modelValue"
      @change="updateValue"
      :required="required"
    >
      <option v-if="placeholder" value="" selected disabled hidden>
        {{ placeholder }}
      </option>
      <option v-for="op in options" :value="op.value" :key="op.value">
        {{ op.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  labelText: String,
  isRed: {
    type: Boolean,
    default: false,
  },
  cautionText: String,
  id: String,
  name: String,
  placeholder: String,
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  options: Array,
});

const emit = defineEmits();

const updateValue = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style scoped>
select {
  width: 100%;
  padding: 1em;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 8px;
  margin: 8px 0 20px 0;
}
select:invalid {
  color: var(--neutral-dark);
}

.caution {
  font-size: 0.8rem;
  padding: 0 0.4rem;
}
.caution.red {
  color: var(--warning-color);
}
</style>
