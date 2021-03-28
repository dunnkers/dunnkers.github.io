---
layout: project
title:  "Finding 'God' components in Apache Tika"
image: /images/projects/god-components-apache-tika.png
link: /god-components
permalink: /god-components
---

God Components (or ’God objects’) are components in a software system that have accumulated a large bulk of classes and lines of code over time. Such really large, bulky components are hard to maintain and to reason about; they are in fact a software anti-pattern. It is preferred to have smaller, isolated components instead. Although it is a common good practice to build software by creating small building blocks of reusable code and accessing them using a declarative and well-documented API, big code-bases might still suffer from scaling issues: large inter-weaved software components might develop that become difficult to reason about.
In this project, one such analysis will be ran on the Apache Tika project.