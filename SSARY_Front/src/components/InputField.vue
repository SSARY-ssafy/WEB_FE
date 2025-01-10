<template>
  <div class="input-wrapper">
    <label :for="id">{{ labelText }}</label>
    <span v-if="cautionText" :class="{ red: isRed }" class="caution">
      {{ cautionText }}
    </span>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      :required="required"
    />
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
  type: {
    type: String,
    default: "text",
  },
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
});

const emit = defineEmits();

const updateValue = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 1em;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 8px;
  margin: 8px 0 20px 0;
}

input.small {
  width: 49%;
}

.caution {
  font-size: 0.8rem;
  padding: 0 0.4rem;
}
.caution.red {
  color: var(--warning-color);
}
</style>
