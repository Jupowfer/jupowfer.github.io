---
layout: default
title: 归档
---

<div class="archives-page">
  <h1>文章归档</h1>
  
  <ul class="archive-list">
    {% for post in site.posts %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture month %}{{ post.date | date: '%m' }}{% endcapture %}
      
      {% if year != current_year %}
        {% assign current_year = year %}
        <li class="archive-year">
          <h2>{{ year }}年</h2>
          <ul class="year-posts">
      {% endif %}
      
      <li class="archive-item">
        <time>{{ post.date | date: "%m-%d" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
      
      {% if forloop.last %}
          </ul>
        </li>
      {% else %}
        {% capture next_year %}{{ site.posts[forloop.index].date | date: '%Y' }}{% endcapture %}
        {% if year != next_year %}
          </ul>
        </li>
        {% endif %}
      {% endif %}
    {% endfor %}
  </ul>
</div>
