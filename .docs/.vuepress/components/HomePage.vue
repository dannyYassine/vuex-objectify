<template>
  <div id="home">
    <HeaderNav />
    <section>
      <div class="section-content">
        <img class="animate-delay-1" src="/vuex-objectify/logo.png">
        <p class="description animate-delay-1 mt-6 mb-6">
          <b>Dynamically</b> creates an <b>interface of objects</b> to easily communicate with vuex
        </p>
        <div class="animate-delay-2 columns mt-2">
          <div class="column is-6">
            <h4>Turning this:</h4>
            <div class="language-javascript extra-class"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'module/action'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>Types<span class="token punctuation">.</span>mutations<span class="token punctuation">.</span><span class="token constant">SET_FIRST_THING</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token constant">TYPES</span><span class="token punctuation">.</span>getters<span class="token punctuation">.</span>getSomething<span class="token punctuation">]</span>
</code></pre></div>
          </div>
          <div class="column is-6">
            <h4>Into this:</h4>
            <div class="language-javascript extra-class"><pre class="language-javascript"><code>dispatches<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

commits<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">setFirstThing</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

getters<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>
          </div>
        </div>
        <p class="sub-description animate-delay-1">
          No more <b>constants</b>, no more <b>strings</b>
        </p>
        <div class="my-editor animate-delay-3 animate-delay-3" @click="onCodeClicked">
          $ yarn add vuex-objectify
        </div>
        <div class="animate-delay-3 mt-4">
          <router-link to="/guide/install">
            <b-button class="get-started" type="is-dark">Get Started &#10142;</b-button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { NotificationProgrammatic as Notification } from 'buefy'

export default {
name: "HomePage",
  methods: {
    onCodeClicked() {
      /* Get the text field */
      navigator.clipboard.writeText('yarn add vuex-objectify').then(() => {
        /* Alert the copied text */
        Notification.open({
          message: 'Copied to clipboard!'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  height: 100vh;
}
section {
  margin: 40px auto;
  text-align: center;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
  }

  div.language-javascript {
    background-color: rgba(255,221,172, 0.1);
    box-shadow: rgb(1,1,1,0.1) 0 5px 40px;

    pre.language-javascript {
      font-size: 14px !important;
    }
  }

  .get-started {
    height: 55px;
    width: 130px;
  }

  .sub-description {
    margin: 5px;
  }

  img {
    width: auto;
    height: 220px;
    margin: auto;
    border-radius: 40px;
    box-shadow: rgb(1,1,1,0.3) 0 5px 10px;
  }
}

.animate-delay-1 {
  opacity: 0;
  animation-duration: 0.6s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-name: animate-delay;
  animation-timing-function: ease;
}

.animate-delay-2 {
  opacity: 0;
  animation-duration: 0.6s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  animation-name: animate-delay;
  animation-timing-function: ease;
}

.animate-delay-3 {
  opacity: 0;
  animation-duration: 0.6s;
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
  animation-name: animate-delay;
  animation-timing-function: ease;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* required class */
.my-editor {
  cursor: pointer;
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: rgba(255,105,234, 0.1);
  color: #920270;
  width: 280px;
  height: 60px;
  margin: 30px auto;
  overflow: hidden;
  text-align: center;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  padding: 20px 5px 5px 5px;

  /* optional class for removing the outline */
  &::v-deep .prism-editor__textarea:focus {
    outline: none;
  }

  &::v-deep div.prism-editor__container {
    top: -6px;
  }
}

.token.number {
  padding-bottom: 8px;
}

@media screen and (max-width: 600px) {
  .get-started {
    margin-bottom: 60px;
  }
  section {
    margin: 40px 5px;
  }
}
</style>