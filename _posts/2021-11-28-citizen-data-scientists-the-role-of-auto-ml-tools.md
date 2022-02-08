---
layout: post
title:  "Citizen Data Scientists: the role of AutoML"
date:   2021-11-28 13:06:00 +0100
categories: ['Kaggle', 'Competitions', 'Data Visualization', 'Data Science']
tags: ['Tableau', 'Citizen Data Scientists']
---

## Introduction

I recently took part in the [Kaggle's annual Machine Learning and Data Science Survey competition](https://www.kaggle.com/c/kaggle-survey-2021/overview) together with a colleague of mine, [Alessia Musio](https://alessiamusio.com/).

The Survey, as stated in the Kaggle page, presents a comprehensive view of the state of data science and machine learning and was live from 09/01/2021 to 10/04/2021. After cleaning the data, they finished with 25.973 responses!

The topic we decided to explore what the role of Automated Machine Learning and how this can impact business strategies.
For the full overview of the work, please refer to the notebook we [published on Kaggle](https://www.kaggle.com/jacoporepossi/citizen-data-scientists-the-role-of-auto-ml-tools), since this post will be a quick overview of our findings.

## Problem statement
At the [Data Science Salon 2020 in Austin](https://roundtable.datascience.salon/what-indeeds-job-market-data-can-tell-us-about-trends-in-data-science), Indeed.com revealed that **job postings** on its site **for Data Scientists had more than tripled** since December 2013.
<br>
While this is great for data science professionals, the same study revealed that the supply is still way lower than the demand.
<br>
In a world increasingly dominated by data, companies are trying to **bridge this gap** to keep up with the competition. When it comes to hiring data scientists, top salaries may not be enough and therefore, there are those who are adapting and **exploiting new methods** that could gradually solve this issue.
<br>
**Automated machine learning (ML) tools, or AutoML**, are designed to automate many steps in the data science process; these methods have been proliferating over the past few years, making it easier to create machine learning models by **removing repetitive tasks** without requiring the expertise of many data scientists.
<br><br>
The dilemma seems to have already found a solution, that is the birth of a new professional figure: the **Citizen Data Scientist**, a concept firstly introduced by [Gartner](https://www.gartner.com/en/newsroom/press-releases/2017-01-16-gartner-says-more-than-40-percent-of-data-science-tasks-will-be-automated-by-2020) years ago.
<br>
Suddenly, thanks to AutoML methods, **other technical members** of the organization with deep domain knowledge like BI analysts, data analysts, business analysts can also become **valuable contributors** to an organization's development of ML and AI models.
<br><br>
Should data scientists be worried about these methods? How will our role evolve? But most importantly, are we aware of this trend?
<br><br>
In the survey we analized, we studied people's traits and behavior towards these tools to understand if, as a community, **we are ready to embrace what could become a new way of doing data science in the future**.

## Automated Machine Learning: A short overview

Automated machine learning, also referred to as automated ML or AutoML, is the process of **automating** the time-consuming, iterative tasks of the machine learning model development.<a href="#f1" id="a1"><sup>[1]</sup></a>
<br>
Several major AutoML libraries have become very popular **since 2013** with [Auto-Weka](https://www.cs.ubc.ca/labs/beta/Projects/autoweka/). The aim is always the same: to **automate one or more phases** of the classic **machine learning pipeline**, making it easier for non-experts to create machine learning models or allowing expert users to build models quicker and more efficiently.
<br>
In general, the **main components** of the pipeline that can be automated are: the initial data preparation and feature engineering,  hyperparameter optimization and model evaluation and neural architecture search.<a href="#f2" id="a2"><sup>[2]</sup></a>

Below, an image showing the **areas heavily affected by AutoML**, adapted from <a href="#f3" id="a3"><sup>[3]</sup></a> and <a href="#f4" id="a4"><sup>[4]</sup></a>.

<iframe
    width="690px"
    height="370px"
    src="https://alessiamusio.com/other/Kaggle/AutoML.html"
    frameborder="0"
    allowfullscreen
></iframe>

One of the main advantages of the AutoML platforms, therefore, is the **true Data Science democratization**<a href="#f5" id="a5"><sup>[5]</sup></a>, in other words enabling a **more diverse** and larger group of users to **contribute to the data science process**.
<br>
With the economic uncertainty of these times, creating a **new class of AI/ML developers** with minimal investment allows maintaining or increasing **competitive advantage**.
<br><br>
Having said that, we are ready to dive into the data and analyze the results of the survey.

## Exploratory Data Analysis

Based on the message we wanted to convey, creating a traditional notebook was not the best choice. Rather, we wanted our visual project to be interactive as well as eye-catching and strongly distinguished on a graphic level. For this reason, we have decided to display the CVs of our Personas, recalling a desktop-file interaction that anyone among us is familiar with. The metaphor used is relevant both to the topic of our analysis (we are in fact talking about how the working landscape in data science will transform) and to the type of data displayed (education, work experience, tools, skills, etc.).
The next challenge was to understand how to do it (with all the limitations of the case).

That is why we opted for a Tableau Dashboard.

<div class='tableauPlaceholder' id='viz1638056477365' style='position: relative'><noscript><a href='#'><img alt='CV ' src='https://public.tableau.com/static/images/CV/CVsKaggleSurvey2021/CV/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='CVsKaggleSurvey2021/CV' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/CV/CVsKaggleSurvey2021/CV/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='it-IT' /><param name='filter' value='publish=yes' /></object></div> <script type='text/javascript'> var divElement = document.getElementById('viz1638056477365'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.width='690px';vizElement.style.height='1227px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement); </script>

Our starting point was to explore the <b>overall behavior</b> of the survey respondents, about <b>25k people</b>, but also to familiarize ourselves with the tool by exploring some macro results.
<br>
In the dashboard, this is called **Miscellaneous**.
<br>
To look at the all respondents, you need to view all files at once. You achieve that in **two ways**:
- you can **unselect the current file** you are looking at (by clicking again on the file name). This is the fastest way.
- you can **select all the files** by clicking them while holding **CTRL/COMMAND**

You can also see Miscellanous even if you select 2 Personas at a time. This is still considered Miscellaneous because it's a mixture of people.
<br><br>
After selecting all files, let's examine the information together.
<br>
In <b>General Information</b>, it is immediately obvious that the <b>average age is relatively low</b>, with about <b>56%</b> of respondents being under <b>30 years old</b>.
<br>
Geographically, the countries with the most respondents are <b>India and the USA</b>, which represent <b>28.7% and 10.2% of the total</b>, respectively.
<br><br>
Our hypothetical CV then moves from <b>Education&Work</b> on to <b>Skills</b>: in the former, the <b>most frequent answers</b> are reported, while in the latter, there is a <b>heatmap comparing ML Experience & Coding Experience</b>.
<br>
Generally speaking, we see that most of the respondents are <b>students</b> (26%) or <b>data scientists</b> (14%) and, if workers, employed in the Computers/Technology (25%) or Education (20%) sectors.
<br>
Almost <b>36% of people</b>, on a daily basis, <b>analyze and explore data</b> to influence business decisions. This is followed by <b>20%</b> who apply <b>ML to explore new areas</b>. The young age coincides with little experience both in coding and in Machine Learning, with more than <b>50% of respondents having less than 3 years</b>.
<br><br>
<b>A key aspect</b> on which we would like to reflect, however, is this: in the AutoML tools section on the right, it is interesting to note that <b>AutoML is either not used</b> (5%) or <b>very few are familiar with it</b>. In fact, those who are familiar with AutoML, selected for the most part Google, Microsoft and Amazon, which together accounts for only 6%.

## Conclusions

As stated before, we [published a notebook on Kaggle](https://www.kaggle.com/jacoporepossi/citizen-data-scientists-the-role-of-auto-ml-tools) where we further analyzed the findings and created a storytelling with Personas, each one telling its **own story and its own approach** to data analysis and tools currently available.

Of course, **not all** data science challenges **can be solved using AutoML tools**. At the moment, the most **suitable use cases** are those in which the use of **black-box models** is allowed. In this case it is possible to take advantage of the simplifications that the tools provide, allowing you to **focus more on other aspects of the pipeline**.<a href="#f3" id="a3"><sup>[3]</sup></a>
<br>
Models that require more **in-depth skills** or where data modeling is particularly difficult, **still require** the experience of **qualified data scientists**. In this case, it is very likely that one **relies on PartialAutoML** and not Full techniques to have **greater control of the decision-making steps** along the design workflow.
<br><br>
In any case, we believe that it is **time to adapt** and give value to the knowledge of AutoML tools, thus favoring the **proliferation of Citizen Data Scientists**.
<br>
The advantage, as mentioned, is **twofold** and affects both **less experienced professionals and experts**. On the one hand, it becomes **more efficient and economical beneficial** to employ many of the standard Data Science activities, a trend that will be even more prevalent in the future as these tools improve. At the same time, **experienced** data scientists will be **free to take on more technically demanding tasks**, allowing them to use their skills more efficiently and innovate faster, while **increasing their job satisfaction**. This benefits both the worker and companies seeking to maximize their production and **employee retention**, as correctly pointed out here<a href="#f3" id="a3"><sup>[3]</sup></a>.

To conclude, it is our hope that AutoML will lead to a true **Data Science democratization**, allowing more diverse and numerous user groups to actively contribute.

For the more curious cats, we have created a chapter specifically to explain the **background of this analysis plus a little more**. We suggest you take a look at the Breakdown!

**ALESSIA AND JACOPO**

# <span class="title-section w3-xxlarge">References</span>

<span id="f1">1.</span> [What is automated machine learning (AutoML)?](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/machine-learning/concept-automated-ml.md)<br>
<span id="f2">2.</span> [Machine Learning in Python: Main developments and technology trends in data science, machine learning, and artificial intelligence](https://arxiv.org/pdf/2002.04803.pdf)<br>
<span id="f3">3.</span> [Rethinking AI talent strategy as automated machine learning comes of age](https://www.mckinsey.com/business-functions/mckinsey-analytics/our-insights/rethinking-ai-talent-strategy-as-automated-machine-learning-comes-of-age)<br>
<span id="f4">4.</span> [Taking the Human out of Learning Applications: A Survey on Automated Machine Learning](https://arxiv.org/pdf/1810.13306.pdf)<br>
<span id="f5">5.</span> [AutoML 2.0: Is The Data Scientist Obsolete?](https://www.forbes.com/sites/cognitiveworld/2020/04/07/automl-20-is-the-data-scientist-obsolete/?sh=2e5661ef53c9)<br>
