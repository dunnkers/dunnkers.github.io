---
layout: project
title:  "Backdoors in Neural Networks"
image: /images/projects/neural-network-backdoors.png
link: /neural-network-backdoors/
permalink: /neural-network-backdoors/
---

Neural Networks are in increasing popularity, being applied in ever more fields and applications. The expanding set of tools available to train Neural Networks makes it easier for both consumers and professionals to utilize the power of the architecture. The networks do come at a risk however. Because big computer vision networks can take up vast computational resources to train, consumers resort to using pre-trained off-the-shelf models. Using pre-trained networks in critical applications without precaution might pose serious security risks - think of applications like biometrical identification with face recognition, traffic sign recognition for autonomous driving, or usage in robotics and industrial control (Casini et al, 2019): serious harm might be done if there exist vulnerabilities in the Neural Networks powering these applications. In this experiment, we show that it is relatively easy to infect (Deep) Neural Networks when an adversary has access to the training data and network, tricking the network into giving false outputs when some very specific input is given.
