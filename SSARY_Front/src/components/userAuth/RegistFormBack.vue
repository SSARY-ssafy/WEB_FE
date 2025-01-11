<template>
  <div class="form">
    <div class="logo">
      <router-link :to="{ name: 'main' }">로고~<br /><br /></router-link>
      <p>회원가입</p>
    </div>
    <div class="form-box">
      <InputField
        :labelText="'Name'"
        :type="'text'"
        :placeholder="'이름 입력'"
        :required="true"
        v-model.trim="name"
      />
      <div class="multi-input">
        <SelectField
          :labelText="'Birth'"
          :options="birthYears"
          :placeholder="'생년'"
          :required="true"
          v-model.trim="birthYear"
        />
        <SelectField
          :options="birthMonths"
          :placeholder="'생월'"
          :required="true"
          v-model.trim="birthMonth"
        />
        <SelectField
          :options="birthDays"
          :placeholder="'생일'"
          :required="true"
          v-model.trim="birthDay"
        />
      </div>
      <div class="multi-input">
        <InputField
          :labelText="'Generation'"
          :type="'number'"
          :placeholder="'기수 입력'"
          :required="true"
          v-model.trim="generation"
        />
        <InputField
          :type="'number'"
          :placeholder="'반 입력'"
          :required="true"
          v-model.trim="cls"
        />
      </div>
      <SelectField
        :labelText="'Agreement'"
        :options="agreementOptions"
        :placeholder="'자소서 첨삭 동의 여부'"
        :required="true"
        v-model.trim="agreement"
      />
      <button-basic type="button" @click="goPrev">Prev</button-basic>
      <button-basic type="button" @click="regist">Regist</button-basic>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import InputField from "@/components/InputField.vue";
import SelectField from "@/components/SelectField.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

const emit = defineEmits(["handle-is-next"]);

const goPrev = () => {
  emit("handle-is-next", false);
};

const userStore = useUserStore();

const name = ref("");
const birthYear = ref("");
const birthYears = [
  { name: "1950", value: 1950 },
  { name: "1951", value: 1951 },
  { name: "1952", value: 1952 },
  { name: "1953", value: 1953 },
  { name: "1954", value: 1954 },
  { name: "1955", value: 1955 },
  { name: "1956", value: 1956 },
  { name: "1957", value: 1957 },
  { name: "1958", value: 1958 },
  { name: "1959", value: 1959 },
  { name: "1960", value: 1960 },
  { name: "1961", value: 1961 },
  { name: "1962", value: 1962 },
  { name: "1963", value: 1963 },
  { name: "1964", value: 1964 },
  { name: "1965", value: 1965 },
  { name: "1966", value: 1966 },
  { name: "1967", value: 1967 },
  { name: "1968", value: 1968 },
  { name: "1969", value: 1969 },
  { name: "1970", value: 1970 },
  { name: "1971", value: 1971 },
  { name: "1972", value: 1972 },
  { name: "1973", value: 1973 },
  { name: "1974", value: 1974 },
  { name: "1975", value: 1975 },
  { name: "1976", value: 1976 },
  { name: "1977", value: 1977 },
  { name: "1978", value: 1978 },
  { name: "1979", value: 1979 },
  { name: "1980", value: 1980 },
  { name: "1981", value: 1981 },
  { name: "1982", value: 1982 },
  { name: "1983", value: 1983 },
  { name: "1984", value: 1984 },
  { name: "1985", value: 1985 },
  { name: "1986", value: 1986 },
  { name: "1987", value: 1987 },
  { name: "1988", value: 1988 },
  { name: "1989", value: 1989 },
  { name: "1990", value: 1990 },
  { name: "1991", value: 1991 },
  { name: "1992", value: 1992 },
  { name: "1993", value: 1993 },
  { name: "1994", value: 1994 },
  { name: "1995", value: 1995 },
  { name: "1996", value: 1996 },
  { name: "1997", value: 1997 },
  { name: "1998", value: 1998 },
  { name: "1999", value: 1999 },
  { name: "2000", value: 2000 },
  { name: "2001", value: 2001 },
  { name: "2002", value: 2002 },
  { name: "2003", value: 2003 },
  { name: "2004", value: 2004 },
  { name: "2005", value: 2005 },
  { name: "2006", value: 2006 },
  { name: "2007", value: 2007 },
  { name: "2008", value: 2008 },
  { name: "2009", value: 2009 },
  { name: "2010", value: 2010 },
  { name: "2011", value: 2011 },
  { name: "2012", value: 2012 },
  { name: "2013", value: 2013 },
  { name: "2014", value: 2014 },
  { name: "2015", value: 2015 },
  { name: "2016", value: 2016 },
  { name: "2017", value: 2017 },
  { name: "2018", value: 2018 },
  { name: "2019", value: 2019 },
  { name: "2020", value: 2020 },
  { name: "2021", value: 2021 },
  { name: "2022", value: 2022 },
  { name: "2023", value: 2023 },
  { name: "2024", value: 2024 },
  { name: "2025", value: 2025 },
];

const birthMonths = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "11", value: 11 },
  { name: "12", value: 12 },
];
const birthDays = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "11", value: 11 },
  { name: "12", value: 12 },
  { name: "13", value: 13 },
  { name: "14", value: 14 },
  { name: "15", value: 15 },
  { name: "16", value: 16 },
  { name: "17", value: 17 },
  { name: "18", value: 18 },
  { name: "19", value: 19 },
  { name: "20", value: 20 },
  { name: "21", value: 21 },
  { name: "22", value: 22 },
  { name: "23", value: 23 },
  { name: "24", value: 24 },
  { name: "25", value: 25 },
  { name: "26", value: 26 },
  { name: "27", value: 27 },
  { name: "28", value: 28 },
  { name: "29", value: 29 },
  { name: "30", value: 30 },
  { name: "31", value: 31 },
];
const birthMonth = ref("");
const birthDay = ref("");
const generation = ref("");
const cls = ref("");
const agreement = ref("");
const agreementOptions = [
  { name: "O", value: 0 },
  { name: "X", value: 1 },
];

const regist = () => {
  alert("회원 등록");
  return;
};
</script>

<style scoped></style>
