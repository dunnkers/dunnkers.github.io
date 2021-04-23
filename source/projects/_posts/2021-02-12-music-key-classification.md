---
layout: project
title:  "Musical Key Recognition using a Hidden Markov Model"
image: /images/projects/music-key-classification.png
link: /music-key-classification
permalink: /music-key-classification
github: https://github.com/dunnkers/music-key-classification/
---

Musical keys can be thought of as the foundation on which music and songs are created. The development of an automated technique to recognise the overall key of a musical recording is driven by the need in the production and mixing of music. In this paper Hidden Markov Models (HMMs) are used to detect the key of tracks retrieved from Spotify’s web API. The relative strength of each pitch in different segments of a track, represented as the chroma vector, was extracted for about 10,000 tracks. The HMMs models were trained for each mode, major and minor, and shifted to create one for each key. Two model states were chosen for the HMM models to optimize the validation error rate as well as the computational time. Additionally, a naive approach was created using cross-correlation. These two methods were compared using 10-fold cross-validation on various sized data-sets. While both models performed better and stabilized further with an increase in the number of tracks, the HMMs out-performed the naive method. A brief investigation of the confidence level associated with the labelled keys found a decrease in validation error for tracks with a higher confidence. It is therefore recommended to further explore the cause of the key confidence and to what extent it affects the training of the models.