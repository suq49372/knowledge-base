<script setup lang="ts">
import XueButton from '../Button/Button.vue';
import XueIcon from '../Icon/Icon.vue';
import XueTag from '../Tag/Tag.vue';

type OptionItem = { label: string; text: string };
type AnswerSection = { title: string; content: string };

const props = withDefaults(
  defineProps<{
    index?: number;
    subject?: string;
    difficulty?: string;
    source?: string;
    date?: string;
    question?: string;
    options?: OptionItem[];
    expanded?: boolean;
    answerSections?: AnswerSection[];
  }>(),
  {
    index: 1,
    subject: '校内',
    difficulty: '中等',
    source: '数学六年级（上）期中',
    date: '2024.4.27',
    question:
      '某学校的环形跑道长400米，甲、乙同时从同一起点分别以一定的速度慢跑和骑自行车。如果反向而行，那么他们每隔40秒相遇一次；如果同向而行，那么他们每隔80秒乙就追上甲一次。甲乙的速度分别是多少m/s？',
    options: () => [
      { label: 'A', text: '第二种' },
      { label: 'B', text: '第一种' },
      { label: 'C', text: '第三种' },
      { label: 'D', text: '第四种' },
    ],
    expanded: false,
    answerSections: () => [
      { title: '正确答案', content: '已知两个等差数列的前 n 项和，结合追及与相遇关系计算速度。' },
      { title: '解析', content: '反向相遇速度和为 10m/s，同向追及速度差为 5m/s，联立可得甲乙速度。' },
    ],
  },
);
</script>

<template>
  <article class="xue-question-card" :class="{ 'xue-question-card--expanded': props.expanded }" data-figma-node="11803:12059">
    <header class="xue-question-card__header">
      <div class="xue-question-card__meta">
        <span>{{ props.index }}.</span>
        <XueTag color="blue">{{ props.subject }}</XueTag>
        <XueTag color="purple">{{ props.difficulty }}</XueTag>
        <span class="xue-question-card__source">{{ props.source }}</span>
        <XueButton composition="icon" content="textButton" color="gray" aria-label="查看来源">
          <template #icon><XueIcon name="link" :size="16" /></template>
        </XueButton>
        <span class="xue-question-card__date">{{ props.date }}</span>
      </div>
      <div class="xue-question-card__actions">
        <XueButton composition="icon" content="textButton" color="gray" aria-label="收藏">
          <template #icon><XueIcon name="star" :size="16" /></template>
        </XueButton>
        <span />
        <XueButton composition="icon" content="textButton" color="gray" aria-label="编辑">
          <template #icon><XueIcon name="edit" :size="16" /></template>
        </XueButton>
        <span />
        <XueButton composition="icon" content="textButton" color="gray" aria-label="更多">
          <template #icon><XueIcon name="more" :size="16" /></template>
        </XueButton>
      </div>
    </header>

    <section class="xue-question-card__body">
      <p class="xue-question-card__question">{{ props.question }}</p>
      <div class="xue-question-card__options">
        <span v-for="option in props.options" :key="option.label">{{ option.label }}. {{ option.text }}</span>
      </div>
      <div v-if="props.expanded" class="xue-question-card__answers">
        <section v-for="section in props.answerSections" :key="section.title">
          <h4>{{ section.title }}</h4>
          <p>{{ section.content }}</p>
        </section>
      </div>
    </section>

    <footer class="xue-question-card__footer">
      <span>使用次数 12</span>
      <span>正确率 86%</span>
      <span>更新时间 {{ props.date }}</span>
    </footer>
  </article>
</template>

<style scoped lang="scss">
.xue-question-card {
  display: flex;
  width: 818px;
  flex-direction: column;
  gap: var(--xue-padding-16);
  border: 1px solid var(--xue-divider);
  border-radius: var(--xue-radius-8);
  background: var(--xue-white);
  padding: var(--xue-padding-20);
  color: var(--xue-text-primary);
  font-family: var(--xue-font-family);
}

.xue-question-card__header,
.xue-question-card__meta,
.xue-question-card__actions,
.xue-question-card__options,
.xue-question-card__footer {
  display: flex;
  align-items: center;
}

.xue-question-card__header {
  justify-content: space-between;
  gap: var(--xue-padding-16);
}

.xue-question-card__meta {
  gap: var(--xue-padding-8);
  min-width: 0;
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-14);
}

.xue-question-card__source {
  overflow: hidden;
  max-width: 180px;
  color: var(--xue-text-primary);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xue-question-card__date {
  color: var(--xue-text-secondary);
}

.xue-question-card__actions {
  gap: var(--xue-padding-10);
  color: var(--xue-text-secondary);

  > span {
    width: 1px;
    height: 12px;
    background: var(--xue-divider);
  }
}

.xue-question-card__body {
  display: grid;
  gap: var(--xue-padding-12);
}

.xue-question-card__question,
.xue-question-card__answers p {
  margin: 0;
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-16);
}

.xue-question-card__options {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--xue-padding-32);
  color: var(--xue-text-primary);
  font-size: var(--xue-font-size-14);
  line-height: var(--xue-line-height-16);
}

.xue-question-card__answers {
  display: grid;
  gap: var(--xue-padding-16);
  padding-top: var(--xue-padding-4);
}

.xue-question-card__answers section {
  display: grid;
  gap: var(--xue-padding-8);
}

.xue-question-card__answers h4 {
  margin: 0;
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-12);
  font-weight: var(--xue-font-weight-medium);
  line-height: var(--xue-line-height-12);
}

.xue-question-card__footer {
  gap: var(--xue-padding-24);
  border-top: 1px solid var(--xue-divider);
  padding-top: var(--xue-padding-16);
  color: var(--xue-text-secondary);
  font-size: var(--xue-font-size-12);
  line-height: var(--xue-line-height-12);
}
</style>
