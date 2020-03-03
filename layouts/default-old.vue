<template>
  <div>
    <nav style="display: flex; justify-content: center;">
      <ul>
        <li>
          <nuxt-link :to="localePath('/')">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/about')">
            About
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nav>
      <nuxt-link
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :style="$i18n.locale === locale.code ? 'color: red;' : ''"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </nav>
    <nuxt />
  </div>
</template>

<style></style>
