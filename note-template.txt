---
isbn: {{metaData.isbn}}
type: book
---

## 元数据

> [!grey] 书籍信息
>> [!col]
>> ![ {{metaData.title}}|110]({{metaData.cover}})
>>>
>>> - 书名： {{metaData.title}}
>>> - 作者： {{metaData.author}}
>>> - 出版时间： {{metaData.publishTime}}
>>> - ISBN： {{metaData.isbn}}
>>> - 分类： {{metaData.category}}
>>> - 出版社： {{metaData.publisher}}

## 笔记

{%- set allNotes = [] -%}
{%- for highlightItem in chapterHighlights -%}
{%- for highlight in highlightItem.highlights -%} 
{%- set allNotes = allNotes.concat({'type': 'highlight', 'data': highlight, 'range': highlight.range.split("-")[0] | int}) -%}
{%- endfor -%}
{%- endfor -%}
{%- for reviewitem in bookReview.chapterReviews -%}
{%- for review in reviewitem.reviews -%} 
{%- set allNotes = allNotes.concat({'type': 'review', 'data': review,'range': review.range.split("-")[0] | int}) -%}
{%- endfor -%}
{%- for chapterReview in reviewitem.chapterReviews -%} 
{%- set allNotes = allNotes.concat({'type': 'chapterReview', 'data': chapterReview}) -%}
{%- endfor -%}
{%- endfor -%}
{%- set allNotes = allNotes|sort(attribute='data.chapterUid')|groupby('data.chapterUid') -%}
{% for chapterUid, notes in allNotes %} 

### {{ notes[0].data.chapterTitle }}

{%- for note in notes|sort(attribute='range') %}

{% if note.type == 'highlight' and not note.data.reviewContent %}

{%- set rangeParts = note.data.range | split("-") -%}
{%- set deeplink = "weread://bestbookmark?bookId=" + metaData.bookId + "&chapterUid=" + note.data.chapterUid + "&rangeStart=" + rangeParts[0] + "&rangeEnd=" + rangeParts[1] -%}

- {{ note.data.markText | trim }} [⤴️](<{{ deeplink }}>){% elif note.type == 'review' %}
{%- set rangeParts = note.data.range | split("-") -%}
{%- set deeplink = "weread://bestbookmark?bookId=" + metaData.bookId + "&chapterUid=" + note.data.chapterUid + "&rangeStart=" + rangeParts[0] + "&rangeEnd=" + rangeParts[1] -%}
- {{ note.data.abstract | trim }} [⤴️](<{{ deeplink }}>)

> {{ note.data.content }} {% elif note.type == 'chapterReview' %}- {{ note.data.content }} {%- endif %}{%- endfor %}{% endfor %}
