<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
import { data as changelogsData } from '../github/changelogs.data'
import Contributors from './Contributors.vue'

const changelogs = ref([])

onMounted(async () => {
  changelogs.value = await changelogsData()
})

const md = new MarkdownIt()

function renderMarkdown(string: string | null | undefined) {
  const body = string ?? 'No changelog provided.'
  const flavoredString = body.replaceAll("\n", "\n\n")
    .split(/---\r\n\r\n### Checksums|---\r\n\r\nMD5/)[0]
    .replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, '[@$2](https://github.com/$2)')
    .replace(/#(\d+)/g, '[#$1](https://github.com/RepoDevil/Himitsu/issues/$1)')
    .replace(/https\:\/\/github.com\/RepoDevil\/Himitsu\/releases\/tag\/(.*?)/g, '#$1')
    .trim()

  return md.render(flavoredString)
}

const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
})
</script>

<template>
  <div
    v-for="(release, index) of changelogs"
    :key="release.tag_name"
  >
    <h2 :id="index === 0 ? 'latest' : release.tag_name">
      <a
        :href="release.html_url"
        target="_blank"
      >
        {{ release.tag_name }}
      </a>
      <Badge v-if="index === 0" type="tip" text="Latest" />
      <a
        class="header-anchor"
        :href="index === 0 ? '#latest' : `#${release.tag_name}`"
        :aria-label="`Permalink to &quot;${release.tag_name}&quot;`"
      />
    </h2>
    <time :datetime="release.published_at!">
      {{ dateFormatter.format(new Date(release.published_at!)) }}
    </time>
    <div v-html="renderMarkdown(release.body)" />
    <Contributors
      :body="release.body!"
      :author="release.author.login"
      :tag="release.tag_name"
    />
  </div>
</template>

<style lang="stylus" scoped>
h2 {
  margin-bottom: 0
  display: flex
  align-items: center
  gap: 0.5rem
}

time {
  font-size: 0.875rem
  color: var(--vp-c-text-2)
}
</style>