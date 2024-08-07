<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { data as releaseData } from '../github/release.data'

const release = ref(null)

onMounted(async () => {
  release.value = await releaseData()
})

const downloadInformation = computed(() => {
  if (!release.value) return { beta: { tagName: '', asset: null }, stable: { tagName: '', asset: null } }
  return {
    beta: {
      tagName: release.value.beta.tag_name ?? '00000000',
      asset: (release.value.beta.assets ?? [])
        .find(a => /^Himitsu-[A-Za-z0-9]+-google-universal-matagi.apk/.test(a.name)),
    },
    stable: {
      tagName: release.value.stable.tag_name ?? '00000000',
      asset: (release.value.stable.assets ?? [])
        .find(a => /^Himitsu-[A-Za-z0-9]+-google-universal-matagi.apk/.test(a.name)),
    },
  }
})

const isAndroid = ref(true)

onMounted(() => {
  isAndroid.value = !!navigator.userAgent.match(/android/i)
})
</script>

<template>
  <div>
    <div v-if="!isAndroid" class="custom-block danger">
      <p class="custom-block-title">
        <HopeIcon icon="fas fa-exclamation-triangle" /> Unsupported operating system
      </p>
      <p>
        <strong>Himitsu</strong> is an <strong>Android app</strong> only.
        Use an Android device to download and install the app.
      </p>
    </div>
    <div v-if="!isAndroid" class="custom-block warning">
      <p class="custom-block-title" style="color: #D24438;">
  <HopeIcon icon="fas fa-info-circle" />Caution</p>
<p>
  Any app for any operating systems other than Android called
  <strong>Himitsu</strong> is not affiliated with this project.
</p>
      <blockquote>
        For more information, read the
        <a href="/docs/faq/general">General FAQ</a>.
      </blockquote>
    </div>
    <div class="download-buttons">
      <a
        class="download-button primary"
        :download="downloadInformation.stable.asset?.name"
        :href="downloadInformation.stable.asset?.browser_download_url"
      >
        <span class="text">Himitsu</span>
        <span class="version">{{ downloadInformation.stable.tagName }}</span>
      </a>
      <a
        class="download-button secondary"
        :download="downloadInformation.beta.asset?.name"
        :href="downloadInformation.beta.asset?.browser_download_url"
      >
        <span class="text">Himitsu</span>
        <span class="version">㊙ {{ downloadInformation.beta.tagName }} ㊙</span>
      </a>
    </div>
    <span class="version-disclaimer">
      Requires <strong>Android 5.0</strong> or higher.
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '../.vuepress/styles/palette.scss';

.download-buttons {
  display: flex;
  gap: 0.75em;
  justify-content: center;
  align-items: center;
  margin: 0.75em auto;
}

.download-button {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;

  &:hover {
    text-decoration: none !important;
  }

  &.primary {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);

    &:hover {
      border-color: var(--vp-button-brand-hover-border);
      color: var(--vp-button-brand-hover-text);
      background-color: var(--vp-button-brand-hover-bg);
    }

    &:active {
      border-color: var(--vp-button-brand-active-border);
      color: var(--vp-button-brand-active-text);
      background-color: var(--vp-button-brand-active-bg);
    }
  }

  &.secondary {
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);

    &:hover {
      border-color: var(--vp-button-alt-hover-border);
      color: var(--vp-button-alt-hover-text);
      background-color: var(--vp-button-alt-hover-bg);
    }

    &:active {
      border-color: var(--vp-button-alt-active-border);
      color: var(--vp-button-alt-active-text);
      background-color: var(--vp-button-alt-active-bg);
    }
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;
    font-size: 1.25em;
  }

  .text {
    margin-right: 10px;
  }

  .version {
    font-size: 0.8em;
  }
}

.version-disclaimer {
  display: block;
  text-align: center;
  margin: 0.75em auto;
  font-size: 0.75rem;
}

 .custom-block {
  padding: 0.5em; /* Reduced padding */
  border-left: 5px solid;
  margin: 1em 0;
  border-radius: 15px; /* More rounded borders */

  &.danger {
    background-color: $darker-gray;
    border-color: $darkest-gray;
    color: $light-gray;
  }

  &.warning {
    background-color: $dark-gray2;
    border-color: $darkest-gray2;
    color: $light-gray; // Keep text color as white or adjust as needed

    &-title {
      color: #ffa500; // Change "Caution" title to orange
    }
  }

  &-title {
    font-weight: bold;
    margin-bottom: 0.5em;
  }
}

</style>